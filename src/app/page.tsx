import ContactUs from "@/components/Contact";
import Glimpses from "@/components/Glimpses";
import HostInvitation from "@/components/HostInvitation";
import About from "@/components/About";
// import Prizes from "@/components/prizes/PrizesComponent";
import Org from "@/components/organizers/Org";
// import Speakers from "@/components/Speakers";
import FAQ from "@/components/FAQ";
import Hero from "@/components/hero/Hero";
import Sponsors from "@/components/sponsors/Sponsors";
import Prizes from "@/components/prizes/PrizesComponent";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      
      <Prizes />

      {/* <Speakers /> */}
      <FAQ />
      <Glimpses />
      <ContactUs />
    </>
  );
}
