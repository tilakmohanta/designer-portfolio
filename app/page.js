import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperCection";
import FossilExtraction from "@/components/FossilExtraction";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import Exhibition from "@/components/Exhibition";
import Recognition from "@/components/Recognition";
import Media from "@/components/Media";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <CompanySection /> */}
      <AboutComponent />
      {/* <CatalogueSection /> */}
      <CatalogSwiperSection />
      <FossilExtraction/>
      <Exhibition />
      <Recognition />
      <Media />
      <ContactSection />
    </>
  );
}
