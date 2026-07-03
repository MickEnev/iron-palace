import Image from "next/image";
import backgroundImage from "@/public/Interior.png";

const JoinHero = () => {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <div className="relative z-10 flex min-h-[60vh] translate-y-[-6vh] flex-col items-center justify-center pb-16 pt-80 text-center md:translate-y-[-8vh]">
        <Image
          src="/icon.png"
          alt="Iron Palace logo"
          width={160}
          height={160}
          priority
          className="h-24 w-24 object-contain md:h-32 md:w-32"
        />
        <h1 className="font-heading max-w-5xl text-5xl font-black uppercase tracking-tight md:text-7xl lg:text-8xl">
          Your Coronation Awaits...
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground md:text-xl text-(--primary)">
          Strength. Discipline. Community.
        </p>
      </div>

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
      <div className="absolute inset-0 bg-black/65"></div>
      <div className="absolute bottom-0 left-0 h-64 w-full bg-linear-to-b from-transparent to-black" />
    </section>
  );
};

export default JoinHero;
