import { useFormContext } from "react-hook-form";
import { allBillingPlans } from "../../lib/plans";
import type { ApplicationData, PlanInfoType } from "../../types/types";
import { BillingPlan } from "../ui/BillingPlan";
import { Toggle } from "../ui/Toggle";

type BillingPlanInfoProps = {
  billingCycle: "Monthly" | "Yearly";
  changeBillingCycle: (cycle: "Monthly" | "Yearly") => void;
};

export const BillingPlanInfo = ({
  billingCycle,
  changeBillingCycle,
}: BillingPlanInfoProps) => {
  const { register } = useFormContext<ApplicationData>();
  const plansList: PlanInfoType[] = allBillingPlans.filter(
    (plan) => plan.billingCycle === billingCycle,
  );

  return (
    <section className="grid grid-rows-[auto_auto_1fr] items-start bg-White p-6 rounded-lg w-full">
      <div className="flex flex-col items-start mb-8">
        <h1>Select your plan</h1>
        <p className="text-start">You have the option of monthly or yearly billing.</p>
      </div>
      <div className="grid grid-rows-[1fr_auto] gap-2 w-full">
        <ul className="flex flex-col md:flex-row gap-2 md:justify-around">
          {plansList.map((plan, idx) => (
            <li key={`plan-${idx}`} value={plan.id}>
              <BillingPlan {...register("planId")} plan={plan} />
            </li>
          ))}
        </ul>
        <Toggle defaultValue={billingCycle} onToggle={changeBillingCycle} />
      </div>
    </section>
  );
};
