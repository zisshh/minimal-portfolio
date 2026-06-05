import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const KEY = "portfolio:visitors";

function getRedis(): Redis | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

// Non-persistent fallback for local dev without a Redis store.
let memoryCount = 1000;

export async function GET() {
  const redis = getRedis();
  if (!redis) return NextResponse.json({ count: memoryCount });

  try {
    const count = (await redis.get<number>(KEY)) ?? 0;
    return NextResponse.json({ count });
  } catch {
    return NextResponse.json({ count: memoryCount });
  }
}

export async function POST() {
  const redis = getRedis();
  if (!redis) {
    memoryCount += 1;
    return NextResponse.json({ count: memoryCount });
  }

  try {
    const count = await redis.incr(KEY);
    return NextResponse.json({ count });
  } catch {
    memoryCount += 1;
    return NextResponse.json({ count: memoryCount });
  }
}
