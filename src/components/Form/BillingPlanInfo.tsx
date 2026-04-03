import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import type { ApplicationData, PlanInfoType } from "../../types/types";
import { BillingPlan } from "../ui/BillingPlan";
import { Toggle } from "../ui/Toggle";

type BillingPlanInfoProps = {
  plansList: PlanInfoType[];
  changeBillingCycle: (cycle: "Monthly" | "Yearly") => void;
};

export const BillingPlanInfo = ({
  plansList,
  changeBillingCycle,
}: BillingPlanInfoProps) => {
  const [selectedPlan, setSelectedPlan] = useState(plansList[0].id);

  const { register, setValue } = useFormContext<ApplicationData>();

  useEffect(() => {
    setSelectedPlan(plansList[0].id);
    setValue("planId", plansList[0].id);
  }, [plansList]);

  return (
    <section className="flex flex-col gap-3 items-start bg-White p-6 rounded-lg w-full">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="flex flex-col gap-2 w-full">
        <ul className="flex flex-col gap-2">
          {plansList.map((plan, idx) => (
            <li key={`plan-${idx}`} value={plan.id}>
              <BillingPlan
                {...register("planId")}
                plan={plan}
                selected={plan.id === selectedPlan}
                onselect={setSelectedPlan}
              />
            </li>
          ))}
        </ul>
        <Toggle
          cycleDefault={plansList[0].billingCycle}
          onToggle={changeBillingCycle}
        />
      </div>
    </section>
  );
};
