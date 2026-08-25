import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";

const NAV_LINKS = [
  { label: "Certified pre-owned", href: "#inventory" },
  { label: "Used vehicles", href: "#inventory" },
  { label: "Trade-in a vehicle", href: "#engineering" },
  { label: "Financing", href: "#financing" },
];

const HOURS = [
  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
  { day: "Saturday", time: "10:00 AM - 6:00 PM" },
  { day: "Sunday", time: "By appointment" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-surface-soft">
      <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="type-title text-ink">Chariot Motors</span>
            </div>
            <ul className="mt-6 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
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
            <h3 className="type-label text-muted">Hours</h3>
            <ul className="mt-6 flex flex-col gap-3">
              {HOURS.map((h) => (
                <li key={h.day} className="text-sm text-body">
                  <span className="block text-ink">{h.day}</span>
                  <span className="text-muted">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="type-label text-muted">Contact</h3>
            {/* TODO: dealer-specific — placeholder address/phone/email, replace with real contact info */}
            <ul className="mt-6 flex flex-col gap-4">
              <li className="flex items-start gap-2.5 text-sm text-body">
                <MapPin size={16} className="mt-0.5 shrink-0 text-muted" />
                <span>1200 Main Street, Charlotte, NC 28202</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-body">
                <Phone size={16} className="shrink-0 text-muted" />
                <a href="tel:+17045550142" className="hover:text-ink">
                  (704) 555-0142
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-body">
                <EnvelopeSimple size={16} className="shrink-0 text-muted" />
                <a
                  href="mailto:sales@chariotmotors.com"
                  className="hover:text-ink"
                >
                  sales@chariotmotors.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="type-label text-muted">Stay informed</h3>
            <p className="mt-6 text-sm text-body">
              New arrivals and price drops, roughly once a month.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-muted-soft sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Chariot Motors. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">
              Privacy policy
            </a>
            <a href="#" className="hover:text-ink">
              Terms of service
            </a>
            <a href="#" className="hover:text-ink">
              Cookie settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
