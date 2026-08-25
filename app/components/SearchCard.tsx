"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { inventory } from "../data/inventory";
import { t, type Lang } from "../lib/i18n";

const SELECT_CLASS =
  "h-12 w-full appearance-none border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] focus:border-brand focus:bg-white/[0.06]";

const MAKES = Array.from(new Set(inventory.map((item) => item.make))).sort();

export function SearchCard({ lang = "en" }: { lang?: Lang }) {
  const c = t(lang).search;

  return (
    <form
      className="surface-glass grid grid-cols-1 gap-4 p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] sm:grid-cols-2 sm:items-end lg:grid-cols-[1fr_1fr_1fr_1fr_auto] md:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">{c.make}</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            {c.anyMake}
          </option>
          {MAKES.map((make) => (
            <option key={make} value={make.toLowerCase()}>
              {make}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">{c.condition}</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            {c.anyCondition}
          </option>
          <option value="certified">{c.certified}</option>
          <option value="used">{c.used}</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">{c.priceRange}</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            {c.anyPrice}
          </option>
          {c.priceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">{c.km}</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            {c.anyKm}
          </option>
          {c.kmOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <button
        type="submit"
        className="flex h-12 items-center justify-center gap-2 bg-brand px-6 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-[var(--ease-apple)] hover:bg-brand-active active:scale-[0.97] sm:col-span-2 lg:col-span-1"
      >
        <MagnifyingGlass size={18} weight="bold" />
        {c.search}
      </button>
    </form>
  );
}
