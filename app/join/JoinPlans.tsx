import Container from "@/components/ui/Container";
import { useState } from "react";
import type { MembershipPlan } from "./membershipPlans";

type JoinPlansProps = {
  plans: MembershipPlan[];
  selectedPlanId: MembershipPlan["id"];
  onSelectPlan: (planId: MembershipPlan["id"]) => void;
};

type PlanCardProps = {
  plan: MembershipPlan;
  selected: boolean;
  onSelect: () => void;
  compact?: boolean;
};

const PlanCard = ({ plan, selected, onSelect, compact = false }: PlanCardProps) => {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onSelect}
      className={[
        "relative w-full cursor-pointer rounded-lg border bg-zinc-950 p-6 text-left transition duration-200",
        "hover:scale-[1.02] hover:border-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
        selected ? "border-white" : "border-white/10",
        compact ? "min-h-full" : "",
      ].join(" ")}
    >
      {plan.eyebrow ? (
        <div className="absolute -top-3 left-5 rounded-full bg-white px-4 py-1 text-[10px] font-black uppercase tracking-widest text-black">
          {plan.eyebrow}
        </div>
      ) : null}

      {selected ? (
        <div className="absolute right-5 top-5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-black text-black">
          ✓
        </div>
      ) : null}

      <h3 className="font-heading pr-10 text-xl font-black uppercase tracking-widest md:text-2xl">
        {plan.name}
      </h3>
      <p className="mt-1 text-sm italic text-white/50">{plan.subtitle}</p>

      <div className="mt-6 rounded-md bg-black/60">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/45">
            Due Today
          </span>
          <strong className="text-sm">{plan.dueToday}</strong>
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/45">
            Monthly
          </span>
          <strong className="text-sm">{plan.monthly}</strong>
        </div>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-white/55">{plan.note}</p>
      {plan.requirement ? (
        <p className="mt-4 border-t border-dashed border-white/10 pt-4 text-[10px] font-black uppercase leading-relaxed tracking-wide text-(--primary)">
          {plan.requirement}
        </p>
      ) : null}
    </button>
  );
};

const JoinPlans = ({ plans, selectedPlanId, onSelectPlan }: JoinPlansProps) => {
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const mainPlan = plans[0];
  const alternatePlans = plans.slice(1);

  return (
    <section className="bg-black pb-48">
      <Container>
        <div className="mx-auto max-w-3xl space-y-5">
          <div className="rounded-lg border border-white/10 bg-zinc-900 p-6">
            <h2 className="font-heading text-sm font-black uppercase tracking-[0.35em]">
              Choose Your Plan
            </h2>
            <div className="my-6 h-px bg-white/10" />

            <PlanCard
              plan={mainPlan}
              selected={selectedPlanId === mainPlan.id}
              onSelect={() => onSelectPlan(mainPlan.id)}
            />
          </div>

          <div className="rounded-lg border border-white/10 bg-zinc-900 p-5">
            <button
              type="button"
              onClick={() => setShowMoreOptions((isOpen) => !isOpen)}
              className="flex w-full cursor-pointer items-center justify-between rounded-md text-left transition duration-200 hover:scale-[1.01]"
              aria-expanded={showMoreOptions}
            >
              <span className="font-heading text-xs font-black uppercase tracking-[0.3em]">
                Looking For More Options?
              </span>
              <span className="text-xl leading-none">
                {showMoreOptions ? "×" : "+"}
              </span>
            </button>

            {showMoreOptions ? (
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {alternatePlans.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    selected={selectedPlanId === plan.id}
                    onSelect={() => onSelectPlan(plan.id)}
                    compact
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default JoinPlans;
