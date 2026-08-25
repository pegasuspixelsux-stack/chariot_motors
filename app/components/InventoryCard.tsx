import { ArrowRight, Gauge, Lightning, Car } from "@phosphor-icons/react/dist/ssr";
import type { InventoryItem } from "../data/inventory";

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function InventoryCard({ item }: { item: InventoryItem }) {
  return (
    <article className="group flex h-full flex-col border border-border bg-surface transition-colors hover:border-border-strong">
      {/* TODO: replace with real inventory photography for this VIN */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-blueprint">
        <Car
          size={56}
          weight="thin"
          className="text-white/15 transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 bg-canvas/80 px-2.5 py-1 type-label text-muted backdrop-blur-sm">
          {item.tag}
        </span>
      </div>

      <div className="flex h-full flex-1 flex-col gap-4 p-5">
        <div className="min-h-[3rem]">
          <h3 className="type-title text-ink">
            {item.year} {item.name}
          </h3>
        </div>

        <dl className="grid grid-cols-3 gap-2 border-y border-border py-3 text-center">
          <div className="flex flex-col items-center gap-1">
            <Gauge size={16} className="text-muted" />
            <dd className="type-mono-figure text-xs text-ink">{item.hp} hp</dd>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Lightning size={16} className="text-muted" />
            <dd className="type-mono-figure w-full truncate text-[11px] text-ink">
              {item.turbo}
            </dd>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Car size={16} className="text-muted" />
            <dd className="type-mono-figure text-xs text-ink">{item.drivetrain}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-center justify-between pt-1">
          <span className="type-mono-figure text-lg text-ink">
            {priceFormatter.format(item.price)}
          </span>
          <a
            href={`#vehicle-${item.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-white"
          >
            View details
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
