import { inventory } from "../data/inventory";
import { InventoryCard } from "./InventoryCard";
import { Reveal } from "./Reveal";
import { t, type Lang } from "../lib/i18n";

export function InventoryGrid({ lang = "en" }: { lang?: Lang }) {
  const c = t(lang).inventory;

  return (
    <section id="inventory" className="bg-canvas pt-[calc(12rem+10vh)] pb-[calc(6rem+5vh)] md:pt-32 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal className="max-w-xl">
          <h2 className="type-display-md text-ink">{c.title}</h2>
          <p className="mt-3 text-body">{c.subcopy}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 items-stretch gap-3 sm:gap-6 lg:grid-cols-4">
          {inventory.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 0.06} className="h-full">
              <InventoryCard item={item} lang={lang} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
