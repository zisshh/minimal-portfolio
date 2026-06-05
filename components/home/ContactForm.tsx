"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-lg border border-border bg-surface/60 px-3 py-2.5 text-[14px] text-fg placeholder:text-fg-faint outline-none transition-colors focus:border-fg-faint focus:bg-surface";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { success: boolean; error?: string };
      if (!res.ok || !json.success) {
        throw new Error(json.error ?? "Something went wrong. Please try again.");
      }
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-surface/40 p-5">
      <p className="mb-4 text-[13.5px] leading-[1.7] text-fg-muted">
        Prefer to write? Drop a note and I&apos;ll get back to you within 24 hours.
      </p>

      {/* Honeypot — hidden from humans, catches bots */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          autoComplete="name"
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="you@email.com"
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <textarea
        name="message"
        required
        rows={4}
        placeholder="What's on your mind?"
        className={cn(inputClass, "mt-3 resize-y")}
      />

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 rounded-lg bg-fg-strong px-4 py-2.5 text-[13.5px] font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          <Send className="h-3.5 w-3.5" aria-hidden />
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>

        {status === "sent" ? (
          <span className="text-[13px] text-accent">
            Thanks — your message is on its way.
          </span>
        ) : null}
        {status === "error" ? (
          <span className="text-[13px] text-fg-muted">{error}</span>
        ) : null}
      </div>
    </form>
  );
}
