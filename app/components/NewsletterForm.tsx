"use client";

import { t, type Lang } from "../lib/i18n";

export function NewsletterForm({ lang = "en" }: { lang?: Lang }) {
  const c = t(lang).newsletter;

  return (
    <form
      className="mt-4 flex flex-col gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        {c.emailLabel}
      </label>
      <div className="flex">
        <input
          id="newsletter-email"
          type="email"
          placeholder={c.placeholder}
          className="h-11 w-full border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] placeholder:text-muted-soft focus:border-brand focus:bg-white/[0.06]"
        />
        <button
          type="submit"
          className="h-11 shrink-0 bg-brand px-5 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-[var(--ease-apple)] hover:bg-brand-active active:scale-[0.97]"
        >
          {c.join}
        </button>
      </div>
    </form>
  );
}
