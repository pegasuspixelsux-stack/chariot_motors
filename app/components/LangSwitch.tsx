import type { Lang } from "../lib/i18n";

export function LangSwitch({ lang }: { lang: Lang }) {
  return (
    <div className="flex items-center gap-1 text-sm font-medium text-muted">
      <a
        href="/"
        aria-current={lang === "en" ? "page" : undefined}
        className={`px-1.5 py-1 transition-colors duration-150 ease-[var(--ease-apple)] hover:text-ink ${
          lang === "en" ? "text-ink" : ""
        }`}
      >
        EN
      </a>
      <span className="text-border-strong">/</span>
      <a
        href="/es"
        aria-current={lang === "es" ? "page" : undefined}
        className={`px-1.5 py-1 transition-colors duration-150 ease-[var(--ease-apple)] hover:text-ink ${
          lang === "es" ? "text-ink" : ""
        }`}
      >
        ES
      </a>
    </div>
  );
}
