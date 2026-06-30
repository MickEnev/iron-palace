import Link from "next/link";

const Navbar = () => {
  const navItems = [
    { name: "Training", href: "/training" },
    { name: "Events", href: "/events" },
    { name: "Coaches", href: "/coaches" },
    { name: "Pricing", href: "/pricing" },
    { name: "Tours", href: "/tours" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 flex w-full justify-center px-4 pt-5">
      <nav className="flex w-full max-w-4xl items-center justify-between gap-6 rounded-full border border-white/10 bg-black/55 px-5 py-3 text-sm shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-7">
        <Link
          href="/"
          className="font-heading text-lg font-black uppercase tracking-wide text-white"
        >
          Iron Palace
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-white/72 transition hover:text-(--primary)"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href="/join"
          className="rounded-full bg-(--primary) px-4 py-2 font-semibold text-black transition hover:bg-(--primary-hover)"
        >
          Join now
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
