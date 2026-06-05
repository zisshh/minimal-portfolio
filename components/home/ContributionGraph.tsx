import { getContributions } from "@/lib/github";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const LEVEL_CLASS = [
  "bg-fg-faint/15",
  "bg-accent/35",
  "bg-accent/55",
  "bg-accent/75",
  "bg-accent",
];

const profileUrl = `https://github.com/${profile.githubUser}`;

export async function ContributionGraph() {
  const data = await getContributions(profile.githubUser);

  return (
    <div className="rounded-xl border border-border bg-surface/40 p-4">
      <div className="mb-3 flex items-center justify-between text-[12px] text-fg-subtle">
        <span>
          {data
            ? `${data.total.toLocaleString()} contributions in the last year`
            : "GitHub contributions"}
        </span>
        <a
          href={profileUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="link-underline transition-colors hover:text-fg-strong"
        >
          @{profile.githubUser}
        </a>
      </div>

      {data ? (
        <>
          <div className="no-scrollbar overflow-x-auto pb-1">
            <div className="flex gap-[3px]" style={{ minWidth: "max-content" }}>
              {data.weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px]">
                  {week.map((day, di) => (
                    <div
                      key={di}
                      title={
                        day.date
                          ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${day.date}`
                          : undefined
                      }
                      className={cn(
                        "h-[11px] w-[11px] rounded-[2px]",
                        day.date ? LEVEL_CLASS[day.level] : "bg-transparent",
                      )}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-center justify-end gap-1.5 text-[11px] text-fg-subtle">
            <span>Less</span>
            {LEVEL_CLASS.map((cls, i) => (
              <span key={i} className={cn("h-[11px] w-[11px] rounded-[2px]", cls)} />
            ))}
            <span>More</span>
          </div>
        </>
      ) : (
        <p className="py-6 text-center text-[13px] text-fg-subtle">
          Contribution data is taking a break — see{" "}
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline text-fg hover:text-fg-strong"
          >
            @{profile.githubUser}
          </a>{" "}
          on GitHub.
        </p>
      )}
    </div>
  );
}
