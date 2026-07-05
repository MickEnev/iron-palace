import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/ui/Section";
import { coaches } from "../coaches";

export const dynamicParams = false;

export const generateStaticParams = () => {
  return coaches.map((coach) => ({
    slug: coach.slug,
  }));
};

const CoachProfilePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const coach = coaches.find((item) => item.slug === slug);

  if (!coach) {
    notFound();
  }

  return (
    <Section>
      <div className="mx-auto grid w-full max-w-6xl gap-8 pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(22rem,0.9fr)] lg:items-center">
        <div className="relative aspect-4/5 overflow-hidden rounded-lg border border-(--primary)/65 bg-(--surface) shadow-(--shadow-lg)">
          <Image
            src={coach.image}
            alt={`${coach.name}, Iron Palace coach`}
            fill
            priority
            sizes="(min-width: 1024px) 560px, 100vw"
            className="object-cover object-top grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/5 via-transparent to-[#b99a6a]/45" />
          <div className="absolute left-10 top-0 h-4/5 w-5 bg-white/70 blur-[1px]" />
        </div>

        <article className="text-white">
          <Link
            href="/coaches"
            className="text-sm font-black uppercase text-(--primary) transition hover:text-white"
          >
            Back to coaches
          </Link>

          <h1 className="mt-8 font-heading text-5xl font-black uppercase leading-none sm:text-6xl">
            {coach.name}
          </h1>

          <p className="mt-4 text-sm font-bold text-white/75">
            {coach.hometown}
          </p>
          <p className="mt-4 text-lg font-black text-(--primary)">
            {coach.yearsOfExperience} years of experience
          </p>

          <div className="mt-6 rounded-md border border-(--primary)/55 bg-white/7 p-5">
            <h2 className="font-heading text-lg font-black uppercase">
              Certifications
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {coach.certifications.map((certification) => (
                <span
                  key={certification}
                  className="rounded-md bg-(--primary)/25 px-3 py-2 text-xs font-black text-white"
                >
                  {certification}
                </span>
              ))}
            </div>

            <div className="my-5 h-px bg-white/15" />

            <h2 className="font-heading text-lg font-black uppercase">
              Contact Info
            </h2>
            <dl className="mt-3 space-y-2 text-sm font-bold text-white/80">
              <div>
                <dt className="inline text-white">Email: </dt>
                <dd className="inline">{coach.contact.email}</dd>
              </div>
              <div>
                <dt className="inline text-white">Phone: </dt>
                <dd className="inline">{coach.contact.phone}</dd>
              </div>
              <div>
                <dt className="inline text-white">Instagram: </dt>
                <dd className="inline">{coach.contact.instagram}</dd>
              </div>
            </dl>

            <p className="mt-5 text-sm font-black leading-relaxed text-white">
              {coach.funFact}
            </p>
          </div>

          <div className="mt-6 h-px bg-white/20" />

          <p className="mt-6 max-w-2xl text-base font-bold leading-relaxed text-white/85">
            {coach.bio}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {coach.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/25 px-3 py-2 text-xs font-black uppercase text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
};

export default CoachProfilePage;
