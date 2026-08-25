"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SearchCard } from "./SearchCard";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <>
      <section
        id="top"
        className="relative bg-canvas pt-[calc(159px+5vh)] pb-[calc(12rem+10vh)] md:pb-[229px] md:pt-[194px]"
      >
        <div className="absolute inset-0 overflow-hidden bg-blueprint">
          <Image
            src="/images/hero/bmw_m4.png"
            alt="A hand-selected performance vehicle from the Chariot Motors showroom floor"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-canvas/40 via-canvas/10 to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-4 md:px-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="type-display-xl text-ink">
              Every car, without compromise.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-body md:text-lg">
              Hand-selected luxury and performance vehicles, inspected and
              documented before they ever reach our floor.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#inventory"
                className="inline-flex h-12 items-center bg-brand px-7 text-sm font-semibold text-white transition-colors hover:bg-brand-active active:scale-[0.98]"
              >
                Explore Inventory
              </a>
              <a
                href="#engineering"
                className="inline-flex h-12 items-center border border-border-strong px-7 text-sm font-semibold text-ink transition-colors hover:border-ink active:scale-[0.98]"
              >
                How We Curate
              </a>
            </div>
          </motion.div>
        </div>

        {/* Desktop: card overlaps the bottom edge of the hero image */}
        <div className="hidden md:absolute md:inset-x-0 md:bottom-0 md:z-10 md:block md:translate-y-1/2 md:px-8">
          <div className="mx-auto max-w-5xl">
            <SearchCard />
          </div>
        </div>
      </section>

      {/* Mobile: card straddles the seam — half over the hero, half over the next
          section — via a zero-height anchor + -translate-y-1/2, so the split stays
          exactly 50/50 regardless of the card's actual rendered height. */}
      <div className="relative md:hidden">
        <div className="absolute inset-x-0 top-0 z-10 -translate-y-1/2 px-4">
          <SearchCard />
        </div>
      </div>
    </>
  );
}
