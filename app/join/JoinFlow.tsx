"use client";

import { useState } from "react";
import CheckoutBar from "./CheckoutBar";
import JoinPlans from "./JoinPlans";
import { membershipPlans } from "./membershipPlans";

const JoinFlow = () => {
  const [selectedPlanId, setSelectedPlanId] = useState(membershipPlans[0].id);

  const selectedPlan =
    membershipPlans.find((plan) => plan.id === selectedPlanId) ?? null;

  return (
    <>
      <JoinPlans
        plans={membershipPlans}
        selectedPlanId={selectedPlanId}
        onSelectPlan={setSelectedPlanId}
      />
      <CheckoutBar selectedPlan={selectedPlan} />
    </>
  );
};

export default JoinFlow;
