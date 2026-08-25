"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { inventory } from "../data/inventory";
import { t, type Lang } from "../lib/i18n";

const FIELD_CLASS =
  "h-12 w-full border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] placeholder:text-muted-soft focus:border-brand focus:bg-white/[0.06]";

type Status = "idle" | "submitting" | "sent";

export function ContactSection({ lang = "en" }: { lang?: Lang }) {
  const c = t(lang).contact;
  const [status, setStatus] = useState<Status>("idle");

  // TODO: dealer-specific — wire this up to a real backend (Firebase, a
  // lead-capture CRM, or an email service). Right now this only simulates
  // a submission: no data is sent anywhere.
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("sent"), 700);
  }

  return (
    <section id="contact" className="bg-canvas py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="type-display-md text-ink">{c.heading}</h2>
            <p className="mt-4 max-w-md text-body leading-relaxed">
              {c.subcopy}
            </p>

            <ul className="mt-8 flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-body">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                <span>{c.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-body">
                <Phone size={18} className="shrink-0 text-brand" />
                <a href={c.phoneHref} className="hover:text-ink">
                  {c.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-body">
                <EnvelopeSimple size={18} className="shrink-0 text-brand" />
                <a href={`mailto:${c.email}`} className="hover:text-ink">
                  {c.email}
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="surface-glass p-6 md:p-8">
              {status === "sent" ? (
                <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                  <CheckCircle size={32} className="text-brand" />
                  <p className="mt-4 type-title text-ink">{c.successTitle}</p>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    {c.successBody}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <label className="flex flex-col gap-2">
                    <span className="type-label text-muted">{c.formName}</span>
                    <input
                      type="text"
                      placeholder={c.namePlaceholder}
                      required
                      className={FIELD_CLASS}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="type-label text-muted">{c.formPhone}</span>
                    <input
                      type="tel"
                      placeholder={c.phonePlaceholder}
                      required
                      className={FIELD_CLASS}
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="type-label text-muted">{c.formVehicle}</span>
                    <select defaultValue="" className={`${FIELD_CLASS} appearance-none`}>
                      <option value="">{c.vehicleAny}</option>
                      {inventory.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.year} {item.make} {item.model}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="type-label text-muted">{c.formMessage}</span>
                    <textarea
                      placeholder={c.messagePlaceholder}
                      required
                      rows={4}
                      className="w-full resize-none border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] placeholder:text-muted-soft focus:border-brand focus:bg-white/[0.06]"
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-1 inline-flex h-12 items-center justify-center gap-2 bg-brand px-7 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-[var(--ease-apple)] hover:bg-brand-active active:scale-[0.97] disabled:opacity-60 disabled:active:scale-100"
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        {c.submitting}
                      </>
                    ) : (
                      c.submit
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
