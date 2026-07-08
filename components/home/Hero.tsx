"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";
import backgroundImage from "@/public/Generated image 1.png";
import useLeadModal from "../layout/useLeadModal";
import LeadModal from "../layout/LeadModal";

const Hero = () => {
  const {
    activeModal,
    closeModal,
    handleFormSubmit,
    hasSubmitted,
    isSubmitting,
    openModal,
    submitError,
  } = useLeadModal();

  return (
    <section className="relative min-h-svh overflow-hidden">
      <Container>
        <div className="relative z-10 flex min-h-svh translate-y-[-6vh] flex-col items-center justify-center pb-16 pt-28 text-center md:translate-y-[-8vh]">
          <div className="mb-4 flex flex-col items-center gap-4 md:mb-5">
            <Image
              src="/icon.png"
              alt="Iron Palace logo"
              width={160}
              height={160}
              priority
              className="h-24 w-24 object-contain md:h-32 md:w-32"
            />
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.55em] text-(--primary) md:text-base">
              Iron Palace
            </p>
          </div>

          <h1 className="font-heading max-w-5xl text-5xl font-black uppercase tracking-tight md:text-7xl lg:text-8xl">
            The Midwest Mecca
          </h1>

          <p className="font-sans mt-6 max-w-2xl text-lg text-(--muted) md:text-xl">
            Unleash your inner king.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/join">Sign Up Now</Button>
            <Button variant="secondary" onClick={() => openModal("tour")}>
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
      {activeModal && (
        <LeadModal
          activeModal={activeModal}
          hasSubmitted={hasSubmitted}
          isSubmitting={isSubmitting}
          onClose={closeModal}
          onSubmit={handleFormSubmit}
          submitError={submitError}
        />
      )}
    </section>
  );
};

export default Hero;
