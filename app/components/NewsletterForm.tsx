"use client";

export function NewsletterForm() {
  return (
    <form
      className="mt-4 flex flex-col gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex">
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@email.com"
          className="h-11 w-full border border-border-strong bg-surface px-4 text-sm text-ink outline-none placeholder:text-muted-soft focus:border-brand"
        />
        <button
          type="submit"
          className="h-11 shrink-0 bg-brand px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-active active:scale-[0.98]"
        >
          Join
        </button>
      </div>
    </form>
  );
}
