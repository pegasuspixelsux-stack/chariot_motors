import type { ComponentType } from "react";
import {
  ShieldCheck,
  FileText,
  Tag,
  ArrowsClockwise,
  CreditCard,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

type Cell = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
  span: 1 | 2;
  accent?: boolean;
};

// TODO: dealer-specific — confirm which of these apply before the client demo.
// A "Local Service Department" tile was intentionally left out until it's
// confirmed true for this dealer.
const ROWS: Cell[][] = [
  [
    {
      icon: ShieldCheck,
      title: "150-Point Inspection",
      body: "Every vehicle is inspected bumper to bumper before it's listed, so what you see is what you get.",
      span: 2,
      accent: true,
    },
    {
      icon: FileText,
      title: "Free Vehicle History Report",
      body: "Every listing includes a full CARFAX or AutoCheck report, no charge.",
      span: 1,
    },
  ],
  [
    {
      icon: Tag,
      title: "Transparent Pricing",
      body: "No-haggle pricing, clearly listed up front. The price you see is the price you pay.",
      span: 1,
    },
    {
      icon: ArrowsClockwise,
      title: "Trade-In Welcome",
      body: "Get an instant estimate on your current vehicle, whether or not you buy one of ours.",
      span: 1,
    },
    {
      icon: CreditCard,
      title: "Flexible Financing",
      body: "Options for all credit situations, so you can walk in already knowing where you stand.",
      span: 1,
    },
  ],
];

function BentoCell({ cell }: { cell: Cell }) {
  const Icon = cell.icon;
  return (
    <div
      className={`relative flex min-h-[240px] flex-col justify-end overflow-hidden border border-border p-6 transition-[border-color,transform] duration-200 ease-[var(--ease-apple)] hover:-translate-y-1 hover:border-border-strong ${
        cell.span === 2 ? "md:col-span-2" : ""
      } ${cell.accent ? "bg-blueprint" : "bg-surface-elevated"}`}
    >
      <Icon size={22} className="relative text-brand" />
      <h3 className="relative mt-4 type-title text-ink">{cell.title}</h3>
      <p className="relative mt-2 max-w-md text-sm leading-relaxed text-muted">
        {cell.body}
      </p>
    </div>
  );
}

export function BentoSection() {
  return (
    <section id="engineering" className="bg-surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal className="max-w-xl">
          <h2 className="type-display-md text-ink">Why Buy From Us</h2>
          <p className="mt-3 text-body">
            No games, no pressure. Just a straightforward way to buy a car
            you can trust.
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {ROWS.map((row, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {row.map((cell) => (
                  <BentoCell key={cell.title} cell={cell} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
