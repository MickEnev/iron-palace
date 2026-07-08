import DayPassSection from "@/components/home/DayPassSection";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import PictureTiles from "@/components/home/PictureTiles";
import VisitSection from "@/components/home/VisitSection";
import Section from "@/components/ui/Section";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <>
      <Hero />
      <PictureTiles />
      <Section>
        <VisitSection />
      </Section>
      <Section id="day-passes">
        <DayPassSection />
      </Section>
      <Section id="faq">
        <FAQ />
      </Section>
      <Analytics />
    </>
  );
}
