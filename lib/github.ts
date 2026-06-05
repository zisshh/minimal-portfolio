/**
 * GitHub contribution data scraped from GitHub's own public, no-auth
 * contributions endpoint (https://github.com/users/<user>/contributions).
 * First-party source, no token required. Cached + revalidated hourly by Next.
 */

export interface ContribDay {
  date: string;
  count: number;
  level: number;
}

export interface ContribData {
  total: number;
  weeks: ContribDay[][];
}

const EMPTY: ContribDay = { date: "", count: 0, level: 0 };

/** Group a flat, date-ordered day list into Sunday-started week columns. */
function toWeeks(days: ContribDay[]): ContribDay[][] {
  if (days.length === 0) return [];

  const weeks: ContribDay[][] = [];
  let week: ContribDay[] = [];

  const firstWeekday = new Date(days[0].date).getUTCDay();
  for (let i = 0; i < firstWeekday; i++) week.push(EMPTY);

  for (const day of days) {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length > 0) {
    while (week.length < 7) week.push(EMPTY);
    weeks.push(week);
  }
  return weeks;
}

/** "No contributions on June 1st." → 0 ; "5 contributions on June 2nd." → 5 */
function parseCount(text: string): number {
  if (/^\s*No contributions/i.test(text)) return 0;
  const match = text.match(/([\d,]+)\s+contribution/i);
  return match ? Number.parseInt(match[1].replace(/,/g, ""), 10) : 0;
}

export async function getContributions(
  user: string,
): Promise<ContribData | null> {
  try {
    const res = await fetch(
      `https://github.com/users/${encodeURIComponent(user)}/contributions`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; portfolio-contribution-graph)",
          "X-Requested-With": "XMLHttpRequest",
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return null;

    const html = await res.text();

    // Map each day cell id → contribution count (from its <tool-tip>).
    const counts = new Map<string, number>();
    const tooltipRe = /<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g;
    for (
      let tip = tooltipRe.exec(html);
      tip !== null;
      tip = tooltipRe.exec(html)
    ) {
      counts.set(tip[1], parseCount(tip[2]));
    }

    // Parse each day cell (data-date, id, data-level).
    const days: ContribDay[] = [];
    const cellRe =
      /data-date="(\d{4}-\d{2}-\d{2})"\s+id="([^"]+)"\s+data-level="(\d)"/g;
    for (
      let cell = cellRe.exec(html);
      cell !== null;
      cell = cellRe.exec(html)
    ) {
      days.push({
        date: cell[1],
        level: Number(cell[3]),
        count: counts.get(cell[2]) ?? 0,
      });
    }

    if (days.length === 0) return null;

    days.sort((a, b) => a.date.localeCompare(b.date));

    const header = html.match(/([\d,]+)\s+contribution/i);
    const total = header
      ? Number.parseInt(header[1].replace(/,/g, ""), 10)
      : days.reduce((sum, d) => sum + d.count, 0);

    return { total, weeks: toWeeks(days) };
  } catch {
    return null;
  }
}
