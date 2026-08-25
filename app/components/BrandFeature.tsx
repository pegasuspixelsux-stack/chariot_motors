import Image from "next/image";
import { Reveal } from "./Reveal";

export function BrandFeature() {
  return (
    <section id="heritage" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="type-display-md text-ink">
            Buying a used car shouldn&apos;t feel like a gamble.
          </h2>
          <p className="mt-5 max-w-md text-body leading-relaxed">
            Every vehicle we sell comes with its full history, so you know
            exactly what you&apos;re getting — and every test drive is by
            appointment, so you get our full attention.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex h-12 items-center border border-border-strong px-7 text-sm font-semibold text-ink transition-[border-color,color,transform] duration-150 ease-[var(--ease-apple)] hover:border-brand hover:text-brand active:scale-[0.97]"
          >
            Schedule a Test Drive
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          {/* TODO: dealer-specific — generic Unsplash stock photo for the demo, replace with real dealership photography */}
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-blueprint lg:aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1591527292000-95f01a0d1496?auto=format&fit=crop&w=1000&q=70"
              alt="A driver on a test drive, representative photo"
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
