import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";
import backgroundImage from "@/public/Generated image 1.png";

const Hero = () => {
  return (
    <section className="min-h-screen">
      <Container>
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
          <p className="font-sans mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-(--primary)">
            Iron Palace
          </p>

          <h1 className="font-heading max-w-5xl text-5xl font-black uppercase tracking-tight md:text-7xl lg:text-8xl">
            The Midwest Mecca
          </h1>

          <p className="font-sans mt-6 max-w-2xl text-lg text-(--muted) md:text-xl">
            Unleash your inner king.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/join">Sign Up Now</Button>
            <Button href="/tours" variant="secondary">
              Schedule a Tour
            </Button>
          </div>
        </div>
      </Container>
      <Image
        src={backgroundImage}
        alt="Background"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute bottom-0 left-0 h-64 w-full bg-linear-to-b from-transparent to-black" />
    </section>
  );
};

export default Hero;
