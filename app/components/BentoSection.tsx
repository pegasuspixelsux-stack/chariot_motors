import type { ComponentType } from "react";
import {
  Wind,
  Lightning,
  Gauge,
  Cpu,
  ShieldCheck,
  Leaf,
  Broadcast,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Reveal";

type Cell = {
  icon: ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
  span: 1 | 2;
  accent?: boolean;
};

const ROWS: Cell[][] = [
  [
    {
      icon: Wind,
      title: "Aero Mechanics",
      body: "Active front splitters and a deployable rear wing manage downforce in real time, cutting drag at cruise and adding grip under load.",
      span: 2,
      accent: true,
    },
    {
      icon: Lightning,
      title: "TwinForce Turbo V8",
      body: "Twin low-inertia turbines spool from idle, delivering peak torque well before redline.",
      span: 1,
    },
  ],
  [
    {
      icon: Gauge,
      title: "Adaptive Vantage Suspension",
      body: "Electronically controlled dampers read the road 500 times a second and adjust independently at each corner.",
      span: 1,
    },
    {
      icon: Cpu,
      title: "Curved Display & ChariotDrive Intelligence",
      body: "A single curved glass panel unifies instrumentation and infotainment, running on-device predictive routing and voice control.",
      span: 2,
      accent: true,
    },
  ],
  [
    {
      icon: ShieldCheck,
      title: "Compound Vantage Brakes",
      body: "Carbon-ceramic rotors shed heat faster than steel, holding stopping power lap after lap.",
      span: 1,
    },
    {
      icon: Leaf,
      title: "Hybrid Integration",
      body: "A compact eMotor fills torque gaps below 2,000 rpm without adding meaningful curb weight.",
      span: 1,
    },
    {
      icon: Broadcast,
      title: "Telemetry & Tracking",
      body: "Live lap timing, tire temperature, and G-force logging stream to the companion app after every drive.",
      span: 1,
    },
  ],
];

function BentoCell({ cell }: { cell: Cell }) {
  const Icon = cell.icon;
  return (
    <div
      className={`relative flex min-h-[240px] flex-col justify-end overflow-hidden border border-border p-6 ${
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
          <h2 className="type-display-md text-ink">
            Architectural excellence.
          </h2>
          <p className="mt-3 text-body">
            Every system in a Chariot is designed as one connected machine,
            not a parts list.
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
