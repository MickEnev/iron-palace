export type Coach = {
  slug: string;
  name: string;
  image: string;
  hometown: string;
  yearsOfExperience: number;
  certifications: string[];
  contact: {
    email: string;
    phone: string;
    instagram: string;
  };
  tags: string[];
  funFact: string;
  bio: string;
};

export const coaches: Coach[] = [
  {
    slug: "marcus-steele",
    name: "Marcus Steele",
    image: "/Coach3.jpg",
    hometown: "Pittsburgh, PA",
    yearsOfExperience: 12,
    certifications: [
      "NASM Certified Personal Trainer",
      "USAW Level 1 Coach",
      "Precision Nutrition Level 1",
    ],
    contact: {
      email: "marcus@ironpalacegym.com",
      phone: "(555) 214-0188",
      instagram: "@marcussteelefit",
    },
    tags: ["Strength", "Powerlifting", "Nutrition"],
    funFact:
      "Marcus keeps a handwritten logbook for every training block he has run since 2014.",
    bio: "Marcus helps lifters build strong fundamentals, clean technique, and confident training habits. His coaching style is direct, detailed, and built around steady progress that holds up outside the gym.",
  },
  {
    slug: "alina-cross",
    name: "Alina Cross",
    image: "/Coach1.jpg",
    hometown: "Austin, TX",
    yearsOfExperience: 8,
    certifications: [
      "ACE Certified Personal Trainer",
      "FRC Mobility Specialist",
      "TRX Suspension Training Coach",
    ],
    contact: {
      email: "alina@ironpalacegym.com",
      phone: "(555) 389-4412",
      instagram: "@alinacrosscoach",
    },
    tags: ["Mobility", "Functional Fitness", "Conditioning"],
    funFact:
      "Alina started training clients after using strength work to rebuild from a running injury.",
    bio: "Alina coaches members who want to move better, feel athletic, and train with purpose. She blends mobility, strength, and conditioning into sessions that challenge you without losing sight of form.",
  },
  {
    slug: "dante-rivera",
    name: "Dante Rivera",
    image: "/Coach2.jpg",
    hometown: "Chicago, IL",
    yearsOfExperience: 10,
    certifications: [
      "NSCA Certified Strength and Conditioning Specialist",
      "CrossFit Level 2 Trainer",
      "CPR/AED Certified",
    ],
    contact: {
      email: "dante@ironpalacegym.com",
      phone: "(555) 672-9035",
      instagram: "@dantestrength",
    },
    tags: ["Athletic Performance", "HIIT", "Strength"],
    funFact:
      "Dante can turn almost any workout into a team challenge before the warmup is over.",
    bio: "Dante works with athletes and everyday members who want more power, speed, and grit. His programming is energetic, measurable, and focused on building capacity one hard session at a time.",
  },
];
