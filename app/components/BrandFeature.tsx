import { Reveal } from "./Reveal";
import { Logo } from "./Logo";

export function BrandFeature() {
  return (
    <section id="heritage" className="bg-canvas py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h2 className="type-display-md text-ink">
            Designed for those who command the road.
          </h2>
          <p className="mt-5 max-w-md text-body leading-relaxed">
            Four decades of chassis engineering distilled into one showroom.
            Each Chariot is inspected, road-tuned, and documented before it
            ever meets a customer, then delivered by appointment so you can
            experience it without an audience.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex h-12 items-center border border-border-strong px-7 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand active:scale-[0.98]"
          >
            Request a private viewing
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          {/* TODO: replace with real private showroom photography */}
          <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-border bg-blueprint lg:aspect-[3/4]">
            <Logo className="h-24 w-24 opacity-20" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
