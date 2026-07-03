import type { MembershipPlan } from "./membershipPlans";

type CheckoutBarProps = {
  selectedPlan: MembershipPlan | null;
};

const CheckoutBar = ({ selectedPlan }: CheckoutBarProps) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/95 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
        <div>
          <p className="text-xs uppercase text-white/50">Iron Palace Member</p>
          <p className="font-bold uppercase">Your Name</p>
          <p className="text-xs text-white/60">
            {selectedPlan ? selectedPlan.name : "Choose a plan"} &middot; All
            Access
          </p>
        </div>

        <div className="hidden gap-8 md:flex">
          <div>
            <p className="text-xs uppercase text-white/50">Due Today</p>
            <p className="font-bold">{selectedPlan?.dueToday ?? "$..."}</p>
          </div>
          <div>
            <p className="text-xs uppercase text-white/50">Monthly</p>
            <p className="font-bold">{selectedPlan?.monthly ?? "$..."}</p>
          </div>
        </div>

        <button
          type="button"
          disabled={!selectedPlan}
          className="cursor-pointer rounded-md bg-white px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition duration-200 hover:scale-[1.03] hover:bg-white/90 disabled:cursor-not-allowed disabled:bg-white/30 disabled:text-white/40 disabled:hover:scale-100"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CheckoutBar;
