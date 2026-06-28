import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <section className="py-24">
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
