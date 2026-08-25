import type { ComponentType } from "react";
import {
  ShieldCheck,
  Sparkle,
  Tag,
  ArrowsClockwise,
  CreditCard,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";
import { t, type Lang } from "../lib/i18n";

const ICONS: [ComponentType<{ size?: number; className?: string }>, 1 | 2, boolean?][] = [
  [ShieldCheck, 2, true],
  [Sparkle, 1],
  [Tag, 1],
  [ArrowsClockwise, 1],
  [CreditCard, 1],
];

function BentoCell({
  icon: Icon,
  span,
  accent,
  title,
  body,
}: {
  icon: ComponentType<{ size?: number; className?: string }>;
  span: 1 | 2;
  accent?: boolean;
  title: string;
  body: string;
}) {
  return (
    <div
      className={`relative flex min-h-[240px] flex-col justify-end overflow-hidden border border-border p-6 transition-[border-color,transform] duration-200 ease-[var(--ease-apple)] hover:-translate-y-1 hover:border-border-strong ${
        span === 2 ? "md:col-span-2" : ""
      } ${accent ? "bg-blueprint" : "bg-surface-elevated"}`}
    >
      <Icon size={44} className="relative text-brand" />
      <h3 className="relative mt-4 type-title text-ink">{title}</h3>
      <p className="relative mt-2 max-w-md text-sm leading-relaxed text-muted">
        {body}
      </p>
    </div>
  );
}

export function BentoSection({ lang = "en" }: { lang?: Lang }) {
  const c = t(lang).bento;
  // TODO: dealer-specific — confirm which value props apply before the
  // client demo. A "Local Service Department" tile was intentionally left
  // out until it's confirmed true for this dealer.
  const cards = c.cards.map((card, i) => ({
    ...card,
    icon: ICONS[i][0],
    span: ICONS[i][1],
    accent: ICONS[i][2],
  }));
  const rows = [cards.slice(0, 2), cards.slice(2)];

  return (
    <section id="engineering" className="bg-surface-soft py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal className="max-w-xl">
          <h2 className="type-display-md text-ink">{c.title}</h2>
          <p className="mt-3 text-body">{c.subcopy}</p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {rows.map((row, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {row.map((cell) => (
                  <BentoCell key={cell.title} {...cell} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
