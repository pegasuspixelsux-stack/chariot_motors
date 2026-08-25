"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { t, LOCALE, type Lang } from "../lib/i18n";

type Tab = "financing" | "trade-in";

function monthlyPayment(price: number, down: number, apr: number, months: number) {
  const principal = Math.max(price - down, 0);
  const rate = apr / 100 / 12;
  if (rate === 0) return principal / months;
  const factor = Math.pow(1 + rate, months);
  return (principal * rate * factor) / (factor - 1);
}

function FinancingPanel({ lang }: { lang: Lang }) {
  const c = t(lang).financing;
  const currency = useMemo(
    () =>
      new Intl.NumberFormat(LOCALE[lang], {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }),
    [lang]
  );
  const [price, setPrice] = useState(24500);
  const [down, setDown] = useState(3000);
  const [term, setTerm] = useState(60);
  const [apr, setApr] = useState(6.9);

  const payment = useMemo(
    () => monthlyPayment(price, down, apr, term),
    [price, down, apr, term]
  );

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="surface-glass p-6 md:p-8">
        <p className="type-label text-muted">{c.estMonthly}</p>
        <p className="type-mono-figure mt-2 text-4xl text-ink">
          {currency.format(Math.round(payment))}
          <span className="text-base font-normal text-muted"> {c.perMo}</span>
        </p>

        <div className="mt-8 grid grid-cols-2 gap-5">
          <label className="flex flex-col gap-2">
            <span className="type-label text-muted">{c.vehiclePrice}</span>
            <input
              type="number"
              min={0}
              step={500}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value) || 0)}
              className="h-12 border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] focus:border-brand focus:bg-white/[0.06]"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="type-label text-muted">{c.downPayment}</span>
            <input
              type="number"
              min={0}
              step={500}
              value={down}
              onChange={(e) => setDown(Number(e.target.value) || 0)}
              className="h-12 border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] focus:border-brand focus:bg-white/[0.06]"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="type-label text-muted">{c.loanTerm}</span>
            <select
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className="h-12 appearance-none border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] focus:border-brand focus:bg-white/[0.06]"
            >
              {[36, 48, 60, 72].map((n) => (
                <option key={n} value={n}>
                  {c.months(n)}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="type-label text-muted">{c.estApr}</span>
            <input
              type="number"
              min={0}
              max={25}
              step={0.1}
              value={apr}
              onChange={(e) => setApr(Number(e.target.value) || 0)}
              className="h-12 border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] focus:border-brand focus:bg-white/[0.06]"
            />
          </label>
        </div>
        <p className="mt-4 text-xs text-muted-soft">{c.disclaimer}</p>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="type-title text-ink">{c.builtForHowYouBuy}</h3>
        <ul className="mt-5 flex flex-col gap-4">
          {c.financingBullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-body">
              <CheckCircle size={18} className="mt-0.5 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-8 inline-flex h-12 w-fit items-center gap-2 bg-brand px-7 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-[var(--ease-apple)] hover:bg-brand-active active:scale-[0.97]"
        >
          {c.getPrequalified}
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

function TradeInPanel({ lang }: { lang: Lang }) {
  const c = t(lang).financing;
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="surface-glass p-6 md:p-8">
        {submitted ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
            <CheckCircle size={32} className="text-brand" />
            <p className="mt-4 type-title text-ink">{c.submittedTitle}</p>
            <p className="mt-2 max-w-xs text-sm text-muted">{c.submittedBody}</p>
          </div>
        ) : (
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid grid-cols-2 gap-5">
              <label className="flex flex-col gap-2">
                <span className="type-label text-muted">{c.year}</span>
                <input
                  type="number"
                  placeholder={c.yearPlaceholder}
                  required
                  className="h-12 border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] placeholder:text-muted-soft focus:border-brand focus:bg-white/[0.06]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="type-label text-muted">{c.mileage}</span>
                <input
                  type="number"
                  placeholder={c.mileagePlaceholder}
                  required
                  className="h-12 border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] placeholder:text-muted-soft focus:border-brand focus:bg-white/[0.06]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="type-label text-muted">{c.make}</span>
                <input
                  type="text"
                  placeholder={c.makePlaceholder}
                  required
                  className="h-12 border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] placeholder:text-muted-soft focus:border-brand focus:bg-white/[0.06]"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="type-label text-muted">{c.model}</span>
                <input
                  type="text"
                  placeholder={c.modelPlaceholder}
                  required
                  className="h-12 border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] placeholder:text-muted-soft focus:border-brand focus:bg-white/[0.06]"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="type-label text-muted">{c.condition}</span>
              <select
                required
                defaultValue=""
                className="h-12 appearance-none border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] focus:border-brand focus:bg-white/[0.06]"
              >
                <option value="" disabled>
                  {c.selectCondition}
                </option>
                {c.conditionOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              className="mt-1 inline-flex h-12 w-fit items-center gap-2 bg-brand px-7 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-[var(--ease-apple)] hover:bg-brand-active active:scale-[0.97]"
            >
              {c.getEstimate}
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="type-title text-ink">{c.anyMakeAnyCondition}</h3>
        <ul className="mt-5 flex flex-col gap-4">
          {c.tradeInBullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-body">
              <CheckCircle size={18} className="mt-0.5 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function FinancingSection({ lang = "en" }: { lang?: Lang }) {
  const [tab, setTab] = useState<Tab>("financing");
  const reduce = useReducedMotion();
  const c = t(lang).financing;

  const TABS: { id: Tab; label: string }[] = [
    { id: "financing", label: c.tabFinancing },
    { id: "trade-in", label: c.tabTradeIn },
  ];

  return (
    <section id="financing" className="bg-surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal className="max-w-xl">
          <h2 className="type-display-md text-ink">{c.h2}</h2>
          <p className="mt-3 text-body">{c.p}</p>
        </Reveal>

        <div className="mt-10 flex gap-8 border-b border-border">
          {TABS.map((tb) => (
            <button
              key={tb.id}
              type="button"
              onClick={() => setTab(tb.id)}
              className={`relative pb-4 text-sm font-semibold transition-colors duration-150 ease-[var(--ease-apple)] ${
                tab === tb.id ? "text-ink" : "text-muted hover:text-body"
              }`}
            >
              {tb.label}
              {tab === tb.id && (
                <motion.span
                  layoutId={`financing-tab-underline-${lang}`}
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-brand"
                  transition={
                    reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 32 }
                  }
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={tab}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {tab === "financing" ? (
                <FinancingPanel lang={lang} />
              ) : (
                <TradeInPanel lang={lang} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
