import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import { coaches } from "./coaches";

const Page = () => {
  return (
    <Section>
      <div className="mx-auto w-full max-w-5xl pt-10">
        <p className="text-sm font-black uppercase text-(--primary)">
          {coaches.length} Personal Trainers
        </p>
        <h1 className="mt-2 max-w-3xl font-heading text-5xl font-black uppercase leading-none text-white sm:text-6xl">
          Iron Palace Coaches
        </h1>

        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),20rem))] gap-8">
          {coaches.map((coach) => (
            <Link
              key={coach.slug}
              href={`/coaches/${coach.slug}`}
              className="group relative aspect-4/5 overflow-hidden rounded-lg border border-(--primary)/65 bg-(--surface) shadow-(--shadow-lg) outline-none transition duration-300 hover:-translate-y-1 hover:border-(--primary) focus-visible:ring-2 focus-visible:ring-(--primary)"
            >
              <Image
                src={coach.image}
                alt={`${coach.name}, Iron Palace coach`}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-[#b99a6a]/80" />
              <div className="absolute left-0 top-0 h-2/3 w-3 bg-white/70 blur-[1px]" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h2 className="font-heading text-2xl font-black uppercase leading-none text-white">
                  {coach.name}
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {coach.certifications.slice(0, 2).map((certification) => (
                    <span
                      key={certification}
                      className="rounded-md bg-white/20 px-2 py-1 text-[0.68rem] font-black leading-none text-white backdrop-blur"
                    >
                      {certification}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {coach.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/25 px-2 py-1 text-[0.68rem] font-black leading-none text-white/85"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Page;
