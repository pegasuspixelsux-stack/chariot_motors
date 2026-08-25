import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import type { InventoryItem } from "../data/inventory";
import { t, LOCALE, type Lang } from "../lib/i18n";

const kmFormatters: Record<Lang, Intl.NumberFormat> = {
  en: new Intl.NumberFormat(LOCALE.en),
  es: new Intl.NumberFormat(LOCALE.es),
};

const priceFormatters: Record<Lang, Intl.NumberFormat> = {
  en: new Intl.NumberFormat(LOCALE.en, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }),
  es: new Intl.NumberFormat(LOCALE.es, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }),
};

// TODO: dealer-specific — generic Unsplash stock photos per body style, for
// the demo only. Replace with real inventory photography for each VIN.
const BODY_STYLE_PHOTOS: Record<string, string> = {
  Sedan: "1746985082174-71e0acfe8aa4",
  SUV: "1770350004868-c3ae6a014db4",
  Truck: "1776911949604-80e2a23344ab",
  Coupe: "1605822102629-918beea85679",
  Hatchback: "1752237271289-cebb77f76c40",
  Minivan: "1766631350068-f45b21b20740",
  Wagon: "1649928253320-c1f7ff4e08a5",
};

function photoUrl(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`;
}

export function InventoryCard({
  item,
  lang = "en",
}: {
  item: InventoryItem;
  lang?: Lang;
}) {
  const c = t(lang).inventory;
  const photoId = BODY_STYLE_PHOTOS[item.tag];
  const tagLabel = c.bodyStyles[item.tag] ?? item.tag;

  return (
    <article className="surface-glass group flex h-full flex-col transition-[border-color,transform] duration-200 ease-[var(--ease-apple)] hover:-translate-y-1 hover:border-white/20">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-blueprint">
        {photoId && (
          <Image
            src={photoUrl(photoId)}
            alt={`${tagLabel} — representative photo, not the actual vehicle`}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-300 ease-[var(--ease-apple)] group-hover:scale-110"
          />
        )}
        <span className="surface-glass absolute left-3 top-3 px-2.5 py-1 type-label text-muted">
          {tagLabel}
        </span>
      </div>

      <div className="flex h-full flex-1 flex-col gap-1.5 p-4 sm:p-5">
        <h3 className="type-title text-ink">
          {item.make} {item.model}
        </h3>
        {item.trim && <p className="text-sm text-muted">{item.trim}</p>}
        <p className="type-mono-figure text-xs text-muted-soft">
          {item.year} · {kmFormatters[lang].format(item.km)} km ·{" "}
          {item.doors} {c.doors}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="type-mono-figure text-lg text-ink">
            {priceFormatters[lang].format(item.price)}
          </span>
          <a
            href={`#vehicle-${item.id}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors duration-150 ease-[var(--ease-apple)] hover:text-white"
          >
            <span className="hidden sm:inline">{c.viewDetails}</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
