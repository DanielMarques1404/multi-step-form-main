import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { monthlyPlans, yearlyPlans } from "../../lib/plans";
import type { ApplicationData, PlanInfoType } from "../../types/types";
import { BillingPlan } from "../ui/BillingPlan";
import { Toggle } from "../ui/Toggle";

export const BillingPlanInfo = () => {
  const [plans, setPlans] = useState<PlanInfoType[]>(monthlyPlans);
  const [selectedPlan, setSelectedPlan] = useState(monthlyPlans[0].id);

  const { register, setValue } = useFormContext<ApplicationData>();

  const togglePlans = (value: string) => {
    if (value === "Yearly") {
      setPlans(yearlyPlans);
      setSelectedPlan(yearlyPlans[0].id);
      setValue("planId", yearlyPlans[0].id);
    } else {
      setPlans(monthlyPlans);
      setSelectedPlan(monthlyPlans[0].id);
      setValue("planId", monthlyPlans[0].id);
    }
  };

  return (
    <section className="flex flex-col gap-3 items-start bg-White p-6 rounded-lg w-full">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="flex flex-col gap-2 w-full">
        <ul className="flex flex-col gap-2">
          {plans.map((plan, idx) => (
            <li key={`plan-${idx}`} value={plan.id}>
              <BillingPlan
                onCheck={setSelectedPlan}
                plan={plan}
                selected={plan.id === selectedPlan}
                {...register("planId")}
              />
            </li>
          ))}
        </ul>
        <Toggle
          selected={plans === monthlyPlans ? "Monthly" : "Yearly"}
          onToggle={togglePlans}
        />
      </div>
    </section>
  );
};
