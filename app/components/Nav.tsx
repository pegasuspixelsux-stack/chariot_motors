"use client";

import { useState } from "react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";

const LINKS = [
  { label: "Models", href: "#inventory" },
  { label: "Financing", href: "#financing" },
  { label: "Engineering", href: "#engineering" },
  { label: "Heritage", href: "#heritage" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="type-title text-ink">
            Chariot <span className="text-brand">Motors</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-body transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="#configure"
            className="inline-flex h-11 items-center bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-active active:scale-[0.98]"
          >
            Configure
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-[#0a0a0a] px-4 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-body hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#configure"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center bg-brand px-6 text-sm font-semibold text-white active:scale-[0.98]"
            >
              Configure
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
