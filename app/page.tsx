import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { InventoryGrid } from "./components/InventoryGrid";
import { BentoSection } from "./components/BentoSection";
import { BrandFeature } from "./components/BrandFeature";
import { FinancingSection } from "./components/FinancingSection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav lang="en" />
      <main>
        <Hero lang="en" />
        <InventoryGrid lang="en" />
        <BentoSection lang="en" />
        <BrandFeature lang="en" />
        <FinancingSection lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
