"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

const SELECT_CLASS =
  "h-12 w-full appearance-none border border-border-strong bg-surface px-4 text-sm text-ink outline-none transition-colors focus:border-brand";

export function SearchCard() {
  return (
    <form
      className="grid grid-cols-1 gap-4 border border-border bg-surface-elevated p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)] md:grid-cols-[1fr_1fr_1fr_auto] md:items-end md:p-8"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">Series / Model</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            Any model
          </option>
          <option value="meridian">Meridian Sedan</option>
          <option value="apex">Apex Coupe</option>
          <option value="wraith">Wraith SUV</option>
          <option value="solstice">Solstice Convertible</option>
          <option value="vantage">Vantage Performance</option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="type-label text-muted">Condition</span>
        <select className={SELECT_CLASS} defaultValue="">
          <option value="" disabled>
            Any condition
          </option>
          <option value="new">New</option>
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
          <option value="0-60">Under $60,000</option>
          <option value="60-90">$60,000 - $90,000</option>
          <option value="90-140">$90,000 - $140,000</option>
          <option value="140+">$140,000+</option>
        </select>
      </label>

      <button
        type="submit"
        className="flex h-12 items-center justify-center gap-2 bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-active active:scale-[0.98]"
      >
        <MagnifyingGlass size={18} weight="bold" />
        Search
      </button>
    </form>
  );
}
