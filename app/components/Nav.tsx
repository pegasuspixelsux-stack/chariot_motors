"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react/dist/ssr";
import { Logo } from "./Logo";
import { LangSwitch } from "./LangSwitch";
import { t, type Lang } from "../lib/i18n";

export function Nav({ lang = "en" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();
  const c = t(lang).nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,backdrop-filter,border-color] duration-300 ease-[var(--ease-apple)] ${
        scrolled
          ? "border-border bg-[#0a0a0a]/80 backdrop-blur-md"
          : "border-transparent bg-[#0a0a0a]/0 backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 md:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="type-title text-ink">
            Chariot <span className="text-brand">Motors</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {c.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-body transition-colors duration-150 ease-[var(--ease-apple)] hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LangSwitch lang={lang} />
          <a
            href="#configure"
            className="inline-flex h-11 items-center bg-brand px-6 text-sm font-semibold text-white transition-[background-color,transform] duration-150 ease-[var(--ease-apple)] hover:bg-brand-active active:scale-[0.97]"
          >
            {c.configure}
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LangSwitch lang={lang} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? c.closeMenu : c.openMenu}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center text-ink transition-transform duration-100 ease-[var(--ease-apple)] active:scale-90"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-border bg-[#0a0a0a]/95 backdrop-blur-md lg:hidden"
          >
            <nav className="flex flex-col gap-5 px-4 py-6">
              {c.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-body transition-colors duration-150 ease-[var(--ease-apple)] hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#configure"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex h-12 items-center justify-center bg-brand px-6 text-sm font-semibold text-white transition-transform duration-150 ease-[var(--ease-apple)] active:scale-[0.97]"
              >
                {c.configure}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
