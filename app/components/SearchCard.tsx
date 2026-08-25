"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { inventory } from "../data/inventory";

const SELECT_CLASS =
  "h-12 w-full appearance-none border border-white/10 bg-white/[0.04] px-4 text-sm text-ink outline-none transition-colors duration-150 ease-[var(--ease-apple)] focus:border-brand focus:bg-white/[0.06]";

const MAKES = Array.from(new Set(inventory.map((item) => item.make))).sort();

export function SearchCard() {
  return (
    <form
      className="surface-glass grid grid-cols-1 gap-4 p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] sm:grid-cols-2 sm:items-end lg:grid-cols-[1fr_1fr_1fr_1fr_auto] md:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">Make</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            Any make
          </option>
          {MAKES.map((make) => (
            <option key={make} value={make.toLowerCase()}>
              {make}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">Condition</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            Any condition
          </option>
          <option value="certified">Certified pre-owned</option>
          <option value="used">Used</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">Price range</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            Any price
          </option>
          <option value="0-20">Under $20,000</option>
          <option value="20-25">$20,000 - $25,000</option>
          <option value="25-32">$25,000 - $32,000</option>
          <option value="32+">$32,000+</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">Km</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            Any km
          </option>
          <option value="0-30k">Under 30,000 km</option>
          <option value="30-60k">30,000 - 60,000 km</option>
          <option value="60-90k">60,000 - 90,000 km</option>
          <option value="90k+">90,000+ km</option>
        </select>
      </label>

      <button
        type="submit"
        className="flex h-12 items-center justify-center gap-2 bg-brand px-6 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-[var(--ease-apple)] hover:bg-brand-active active:scale-[0.97] sm:col-span-2 lg:col-span-1"
      >
        <MagnifyingGlass size={18} weight="bold" />
        Search
      </button>
    </form>
  );
}
