import Section from "@/components/ui/Section";
import Hero from "@/components/home/Hero";
import PictureTiles from "@/components/home/PictureTiles";

export default function Home() {
  return (
    <>
      <Section>
        <Hero></Hero>
      </Section>
      <Section>
        <PictureTiles />
      </Section>
    </>
  );
}
