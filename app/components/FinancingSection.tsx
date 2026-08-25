"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

type Tab = "financing" | "trade-in";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const TABS: { id: Tab; label: string }[] = [
  { id: "financing", label: "Financing" },
  { id: "trade-in", label: "Trade-in value" },
];

function monthlyPayment(price: number, down: number, apr: number, months: number) {
  const principal = Math.max(price - down, 0);
  const rate = apr / 100 / 12;
  if (rate === 0) return principal / months;
  const factor = Math.pow(1 + rate, months);
  return (principal * rate * factor) / (factor - 1);
}

function FinancingPanel() {
  const [price, setPrice] = useState(68450);
  const [down, setDown] = useState(8000);
  const [term, setTerm] = useState(60);
  const [apr, setApr] = useState(6.9);

  const payment = useMemo(
    () => monthlyPayment(price, down, apr, term),
    [price, down, apr, term]
  );

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="border border-border bg-surface p-6 md:p-8">
        <p className="type-label text-muted">Estimated monthly payment</p>
        <p className="type-mono-figure mt-2 text-4xl text-ink">
          {currency.format(Math.round(payment))}
          <span className="text-base font-normal text-muted"> / mo</span>
        </p>

        <div className="mt-8 grid grid-cols-2 gap-5">
          <label className="flex flex-col gap-2">
            <span className="type-label text-muted">Vehicle price</span>
            <input
              type="number"
              min={0}
              step={500}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value) || 0)}
              className="h-12 border border-border-strong bg-canvas px-4 text-sm text-ink outline-none focus:border-brand"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="type-label text-muted">Down payment</span>
            <input
              type="number"
              min={0}
              step={500}
              value={down}
              onChange={(e) => setDown(Number(e.target.value) || 0)}
              className="h-12 border border-border-strong bg-canvas px-4 text-sm text-ink outline-none focus:border-brand"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="type-label text-muted">Loan term</span>
            <select
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className="h-12 appearance-none border border-border-strong bg-canvas px-4 text-sm text-ink outline-none focus:border-brand"
            >
              <option value={36}>36 months</option>
              <option value={48}>48 months</option>
              <option value={60}>60 months</option>
              <option value={72}>72 months</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="type-label text-muted">Est. APR</span>
            <input
              type="number"
              min={0}
              max={25}
              step={0.1}
              value={apr}
              onChange={(e) => setApr(Number(e.target.value) || 0)}
              className="h-12 border border-border-strong bg-canvas px-4 text-sm text-ink outline-none focus:border-brand"
            />
          </label>
        </div>
        <p className="mt-4 text-xs text-muted-soft">
          Estimate only. Final terms depend on credit approval and
          participating lender.
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="type-title text-ink">Built for how you buy.</h3>
        <ul className="mt-5 flex flex-col gap-4">
          {[
            "Rates from 4.9% APR for qualified buyers",
            "Terms up to 72 months on new and certified inventory",
            "Pre-qualify in minutes without affecting your credit score",
            "Financing available on new, certified, and used vehicles",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-body">
              <CheckCircle size={18} className="mt-0.5 shrink-0 text-brand" />
              {item}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="mt-8 inline-flex h-12 w-fit items-center gap-2 bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-active active:scale-[0.98]"
        >
          Get pre-qualified
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

function TradeInPanel() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="border border-border bg-surface p-6 md:p-8">
        {submitted ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
            <CheckCircle size={32} className="text-brand" />
            <p className="mt-4 type-title text-ink">Estimate on its way.</p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              We will email your trade-in range within one business day.
            </p>
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
                <span className="type-label text-muted">Year</span>
                <input
                  type="number"
                  placeholder="2021"
                  required
                  className="h-12 border border-border-strong bg-canvas px-4 text-sm text-ink outline-none placeholder:text-muted-soft focus:border-brand"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="type-label text-muted">Mileage</span>
                <input
                  type="number"
                  placeholder="42,000"
                  required
                  className="h-12 border border-border-strong bg-canvas px-4 text-sm text-ink outline-none placeholder:text-muted-soft focus:border-brand"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="type-label text-muted">Make</span>
                <input
                  type="text"
                  placeholder="Chariot"
                  required
                  className="h-12 border border-border-strong bg-canvas px-4 text-sm text-ink outline-none placeholder:text-muted-soft focus:border-brand"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="type-label text-muted">Model</span>
                <input
                  type="text"
                  placeholder="Meridian"
                  required
                  className="h-12 border border-border-strong bg-canvas px-4 text-sm text-ink outline-none placeholder:text-muted-soft focus:border-brand"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="type-label text-muted">Condition</span>
              <select
                required
                defaultValue=""
                className="h-12 appearance-none border border-border-strong bg-canvas px-4 text-sm text-ink outline-none focus:border-brand"
              >
                <option value="" disabled>
                  Select condition
                </option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </label>
            <button
              type="submit"
              className="mt-1 inline-flex h-12 w-fit items-center gap-2 bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-active active:scale-[0.98]"
            >
              Get my trade-in estimate
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="type-title text-ink">Any make. Any condition.</h3>
        <ul className="mt-5 flex flex-col gap-4">
          {[
            "Free appraisal, ready in about 10 minutes",
            "We will buy your car even if you do not buy ours",
            "Apply your trade-in value directly to a new Chariot",
            "Offers hold for 7 days at any showroom",
          ].map((item) => (
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

export function FinancingSection() {
  const [tab, setTab] = useState<Tab>("financing");
  const reduce = useReducedMotion();

  return (
    <section id="financing" className="bg-surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal className="max-w-xl">
          <h2 className="type-display-md text-ink">
            Financing and trade-in, sorted before you visit.
          </h2>
          <p className="mt-3 text-body">
            Run the numbers or price out your current car. Either way, walk
            in already knowing where you stand.
          </p>
        </Reveal>

        <div className="mt-10 flex gap-8 border-b border-border">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`relative pb-4 text-sm font-semibold transition-colors ${
                tab === t.id ? "text-ink" : "text-muted hover:text-body"
              }`}
            >
              {t.label}
              {tab === t.id && (
                <motion.span
                  layoutId="financing-tab-underline"
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
              {tab === "financing" ? <FinancingPanel /> : <TradeInPanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
