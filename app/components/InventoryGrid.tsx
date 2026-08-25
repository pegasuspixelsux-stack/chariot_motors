import { inventory } from "../data/inventory";
import { InventoryCard } from "./InventoryCard";
import { Reveal } from "./Reveal";

export function InventoryGrid() {
  return (
    <section id="inventory" className="bg-canvas pt-32 pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal className="max-w-xl">
          <h2 className="type-display-md text-ink">Curated inventory</h2>
          <p className="mt-3 text-body">
            Twelve vehicles, hand-selected and inspected before they reach
            the floor. Every unit ships with a full technical history.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {inventory.map((item, i) => (
            <Reveal key={item.id} delay={(i % 4) * 0.06} className="h-full">
              <InventoryCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
