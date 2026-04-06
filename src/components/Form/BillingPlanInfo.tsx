import { useFormContext } from "react-hook-form";
import type { ApplicationData, PlanInfoType } from "../../types/types";
import { BillingPlan } from "../ui/BillingPlan";
import { Toggle } from "../ui/Toggle";
import { allBillingPlans } from "../../lib/plans";

type BillingPlanInfoProps = {
  billingCycle: "Monthly" | "Yearly";
  changeBillingCycle: (cycle: "Monthly" | "Yearly") => void;
};

export const BillingPlanInfo = ({
  billingCycle,
  changeBillingCycle,
}: BillingPlanInfoProps) => {
  const { register } = useFormContext<ApplicationData>();
  const plansList: PlanInfoType[] = allBillingPlans.filter(plan => plan.billingCycle === billingCycle)

  return (
    <section className="grid grid-rows-[auto_auto_1fr] gap-3 items-start bg-White p-6 rounded-lg w-full">
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="grid grid-rows-[1fr_auto] gap-2 w-full">
        <ul className="flex flex-col gap-2">
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
