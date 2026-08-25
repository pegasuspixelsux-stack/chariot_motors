import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { LangSwitch } from "./LangSwitch";
import { t, type Lang } from "../lib/i18n";

export function Footer({ lang = "en" }: { lang?: Lang }) {
  const c = t(lang).footer;

  return (
    <footer className="border-t border-border bg-surface-soft">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="type-title text-ink">Chariot Motors</span>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {c.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-150 ease-[var(--ease-apple)] hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="type-label text-muted">{c.hoursTitle}</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {c.hours.map((h) => (
                <li key={h.day} className="text-sm text-body">
                  <span className="block text-ink">{h.day}</span>
                  <span className="text-muted">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="type-label text-muted">{c.linksTitle}</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {c.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-150 ease-[var(--ease-apple)] hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="type-label text-muted">{c.stayInformed}</h3>
            <p className="mt-6 text-sm text-body">{c.newsletterCopy}</p>
            <NewsletterForm lang={lang} />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-soft sm:flex-row sm:items-center sm:justify-between">
          <p>{c.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink">
              {c.cookies}
            </a>
            <LangSwitch lang={lang} />
          </div>
        </div>
      </div>
    </footer>
  );
}
