import AppDownload from "@/components/app-download/AppDownload";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/home/Hero";
import SafetyCTA from "@/components/home/SafetyCTA";
import Services from "@/components/home/Services";
import Navbar from "@/components/navbar/Navbar";
import ServiceSearch from "@/components/service-search/ServiceSearch";

export default function Home() {
  return (
    <main>
      {/* 
        Website structure will be added step by step:
        - Navbar
        - Hero
        - Services
        - Process
        - CTA
        - Footer
      */}

      <Navbar />
      <Hero />
      <ServiceSearch />
      <Services />
      <SafetyCTA />
      <AppDownload />
      <Footer />
    </main>
  );
}
