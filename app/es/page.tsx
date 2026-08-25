import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Hero } from "../components/Hero";
import { InventoryGrid } from "../components/InventoryGrid";
import { BentoSection } from "../components/BentoSection";
import { BrandFeature } from "../components/BrandFeature";
import { FinancingSection } from "../components/FinancingSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { SetHtmlLang } from "../components/SetHtmlLang";

export const metadata: Metadata = {
  title: "Chariot Motors",
  description:
    "Chariot Motors — una forma simple y transparente de comprar un auto usado. Cada vehículo inspeccionado, con precio claro y respaldado por un informe de historial completo.",
};

export default function HomeEs() {
  return (
    <>
      <SetHtmlLang lang="es" />
      <Nav lang="es" />
      <main>
        <Hero lang="es" />
        <InventoryGrid lang="es" />
        <BentoSection lang="es" />
        <BrandFeature lang="es" />
        <FinancingSection lang="es" />
        <ContactSection lang="es" />
      </main>
      <Footer lang="es" />
    </>
  );
}
