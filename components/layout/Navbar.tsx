"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { FormEvent } from "react";

type ModalType = "tour" | "contact";

type NavItem =
  | {
      name: string;
      href: string;
    }
  | {
      name: string;
      modal: ModalType;
    };

const modalContent = {
  tour: {
    eyebrow: "Gym tour",
    title: "Schedule a tour",
    submitLabel: "Request tour",
    successTitle: "Thanks, we got your request.",
    successMessage: "Someone from Iron Palace will follow up to confirm your tour.",
  },
  contact: {
    eyebrow: "Contact us",
    title: "Send a message",
    submitLabel: "Send message",
    successTitle: "Thanks, your message is in.",
    successMessage: "Someone from Iron Palace will get back to you soon.",
  },
};

const Navbar = () => {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);
  const [submittedModal, setSubmittedModal] = useState<ModalType | null>(null);

  const navItems: NavItem[] = [
    { name: "Events", href: "/events" },
    { name: "Coaches", href: "/coaches" },
    { name: "FAQ", href: "/#faq" },
    { name: "Tours", modal: "tour" },
    { name: "Contact Us", modal: "contact" },
    { name: "Day Passes", href: "/#day-passes" },
  ];

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveModal(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  const openModal = (modal: ModalType) => {
    setSubmittedModal(null);
    setActiveModal(modal);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmittedModal(activeModal);
  };

  const closeModal = () => setActiveModal(null);
  const activeContent = activeModal ? modalContent[activeModal] : null;
  const hasSubmitted = activeModal !== null && submittedModal === activeModal;

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
            "href" in item ? (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-white/72 transition hover:text-(--primary)"
              >
                {item.name}
              </Link>
            ) : (
              <button
                key={item.name}
                type="button"
                onClick={() => openModal(item.modal)}
                className="cursor-pointer font-medium text-white/72 transition hover:text-(--primary)"
              >
                {item.name}
              </button>
            )
          ))}
        </div>

        <Link
          href="/join"
          className="rounded-full bg-(--primary) px-4 py-2 font-semibold text-black transition hover:bg-(--primary-hover)"
        >
          Join now
        </Link>
      </nav>

      {activeModal && activeContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
          role="presentation"
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${activeModal}-form-title`}
            className="w-full max-w-xl rounded-lg border border-white/10 bg-(--surface) p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.5)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-(--primary)">
                  {activeContent.eyebrow}
                </p>
                <h2
                  id={`${activeModal}-form-title`}
                  className="font-heading text-3xl font-black uppercase"
                >
                  {activeContent.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="flex size-9 items-center justify-center rounded-full border border-white/10 text-xl leading-none text-white/70 transition hover:border-(--primary) hover:text-(--primary)"
                aria-label={`Close ${activeContent.title.toLowerCase()} form`}
              >
                x
              </button>
            </div>

            {hasSubmitted ? (
              <div className="rounded-md border border-(--primary)/40 bg-(--primary)/10 p-4">
                <p className="font-semibold text-(--primary)">
                  {activeContent.successTitle}
                </p>
                <p className="mt-2 text-sm text-white/70">
                  {activeContent.successMessage}
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-white/80">
                    Name
                    <input
                      required
                      name="name"
                      className="mt-2 w-full rounded-md border border-white/10 bg-black/35 px-3 py-2 text-white outline-none transition placeholder:text-white/35 focus:border-(--primary)"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-white/80">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="mt-2 w-full rounded-md border border-white/10 bg-black/35 px-3 py-2 text-white outline-none transition placeholder:text-white/35 focus:border-(--primary)"
                      placeholder="you@example.com"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm font-semibold text-white/80">
                    Phone
                    <input
                      name="phone"
                      type="tel"
                      className="mt-2 w-full rounded-md border border-white/10 bg-black/35 px-3 py-2 text-white outline-none transition placeholder:text-white/35 focus:border-(--primary)"
                      placeholder="(555) 555-5555"
                    />
                  </label>
                  {activeModal === "tour" ? (
                    <label className="block text-sm font-semibold text-white/80">
                      Preferred day
                      <input
                        name="preferred-day"
                        type="date"
                        className="mt-2 w-full rounded-md border border-white/10 bg-black/35 px-3 py-2 text-white outline-none transition focus:border-(--primary)"
                      />
                    </label>
                  ) : (
                    <label className="block text-sm font-semibold text-white/80">
                      Topic
                      <select
                        name="topic"
                        className="mt-2 w-full rounded-md border border-white/10 bg-black/35 px-3 py-2 text-white outline-none transition focus:border-(--primary)"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Choose a topic
                        </option>
                        <option value="membership">Membership</option>
                        <option value="events">Events</option>
                        <option value="coaching">Coaching</option>
                        <option value="other">Other</option>
                      </select>
                    </label>
                  )}
                </div>

                <label className="block text-sm font-semibold text-white/80">
                  {activeModal === "tour"
                    ? "Anything we should know?"
                    : "Message"}
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-2 w-full resize-none rounded-md border border-white/10 bg-black/35 px-3 py-2 text-white outline-none transition placeholder:text-white/35 focus:border-(--primary)"
                    placeholder={
                      activeModal === "tour"
                        ? "Tell us what you want to see or ask about."
                        : "How can we help?"
                    }
                  />
                </label>

                <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="rounded-md border border-white/10 px-5 py-2.5 font-semibold text-white/80 transition hover:bg-white/10"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-(--primary) px-5 py-2.5 font-semibold text-black transition hover:bg-(--primary-hover)"
                  >
                    {activeContent.submitLabel}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
