import Image from "next/image";
import { Reveal } from "./Reveal";
import { t, type Lang } from "../lib/i18n";

export function BrandFeature({ lang = "en" }: { lang?: Lang }) {
  const c = t(lang).brand;

  return (
    <section id="heritage" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="type-display-md text-ink">{c.h2}</h2>
          <p className="mt-5 max-w-md text-body leading-relaxed">{c.p}</p>
          <a
            href="#contact"
            className="mt-8 inline-flex h-12 items-center border border-border-strong px-7 text-sm font-semibold text-ink transition-[border-color,color,transform] duration-150 ease-[var(--ease-apple)] hover:border-brand hover:text-brand active:scale-[0.97]"
          >
            {c.cta}
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          {/* TODO: dealer-specific — generic Unsplash stock photo for the demo, replace with real dealership photography */}
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-blueprint lg:aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1591527292000-95f01a0d1496?auto=format&fit=crop&w=1000&q=70"
              alt={c.imgAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
