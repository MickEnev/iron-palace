import Section from "@/components/ui/Section";
import Image from "next/image";
import eventCalendar from "@/public/EventCalendar.png";

const events = [
  {
    type: "Event",
    title: "Open House & DJ Night",
    date: "July 4th, 2026",
    time: "6PM - 10PM",
    location: "Iron Palace",
    members: "Free",
    nonMembers: "Free",
    cta: "RSVP",
  },
  {
    type: "Event",
    title: "Powerlifting Competition",
    date: "July 11th, 2026",
    time: "9AM - 4PM",
    location: "Main Lifting Floor",
    members: "Free",
    nonMembers: "Day Pass Required",
    cta: "RSVP",
  },
  {
    type: "Event",
    title: "Iron For A Cause",
    date: "July 18th, 2026",
    time: "10AM - 1PM",
    location: "Iron Palace",
    members: "Free",
    nonMembers: "Donation Encouraged",
    cta: "RSVP",
  },
  {
    type: "Event",
    title: "Hybrid Athlete Clinic",
    date: "July 25th, 2026",
    time: "9AM - 12PM",
    location: "Turf Training Zone",
    members: "Free",
    nonMembers: "Day Pass Required",
    cta: "RSVP",
  },
  {
    type: "Event",
    title: "Month End Push",
    date: "July 31st, 2026",
    time: "5PM - 8PM",
    location: "Main Lifting Floor",
    members: "Free",
    nonMembers: "Day Pass Required",
    cta: "RSVP",
  },
  {
    type: "Class",
    title: "Barbell Basics",
    date: "July 8th, 2026",
    time: "6PM - 7PM",
    location: "Strength Studio",
    members: "Free",
    nonMembers: "$15 Class Pass",
    cta: "RSVP",
  },
  {
    type: "Class",
    title: "Mobility Reset",
    date: "July 16th, 2026",
    time: "7AM - 8AM",
    location: "Recovery Studio",
    members: "Free",
    nonMembers: "$15 Class Pass",
    cta: "RSVP",
  },
  {
    type: "Class",
    title: "Conditioning Circuit",
    date: "July 23rd, 2026",
    time: "6AM - 7AM",
    location: "Turf Training Zone",
    members: "Free",
    nonMembers: "$15 Class Pass",
    cta: "RSVP",
  },
];

const page = () => {
  return (
    <Section>
      <div className="mx-auto flex w-full max-w-7xl flex-col">
        <div className="group relative aspect-[1672/941] overflow-hidden rounded-2xl border border-white/20 transition-transform duration-500 ease-out hover:scale-[1.02]">
          <Image
            src={eventCalendar}
            alt="Event Calendar"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
            className="object-contain"
          />
        </div>

        <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-8 p-2">
          {events.map((event) => (
            <article
              key={event.title}
              className="flex min-h-[32rem] flex-col rounded-2xl border border-[#9c8560] bg-[#0d0d0d] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-transform duration-500 ease-out [container-type:inline-size] hover:scale-[1.02] sm:p-6"
            >
              <p className="text-[clamp(1rem,5cqw,1.125rem)] font-black leading-none text-white">
                {event.type}
              </p>

              <h2 className="mt-8 font-heading text-[clamp(2rem,11cqw,2.75rem)] font-black uppercase leading-[0.9] text-white [text-wrap:balance]">
                {event.title}
              </h2>

              <dl className="mt-8 space-y-1 text-[clamp(1rem,4.5cqw,1.15rem)] font-medium leading-snug text-white">
                <div>
                  <dt className="inline font-black">Date: </dt>
                  <dd className="inline text-white/90">{event.date}</dd>
                </div>
                <div>
                  <dt className="inline font-black">Time: </dt>
                  <dd className="inline text-white/90">{event.time}</dd>
                </div>
                <div>
                  <dt className="inline font-black">Location: </dt>
                  <dd className="inline text-white/90">{event.location}</dd>
                </div>
                <div>
                  <dt className="inline font-black">Members: </dt>
                  <dd className="inline text-white/90">{event.members}</dd>
                </div>
                <div>
                  <dt className="inline font-black">Non Members: </dt>
                  <dd className="inline text-white/90">{event.nonMembers}</dd>
                </div>
              </dl>

              <button className="mt-auto w-fit rounded-full bg-[#9b9b9b] px-5 py-2 font-heading text-[clamp(1rem,4.5cqw,1.25rem)] font-black uppercase leading-none text-white transition-colors duration-300 hover:bg-white hover:text-black">
                {event.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default page;
