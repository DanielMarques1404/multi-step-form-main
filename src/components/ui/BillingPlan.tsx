import { type InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "../../lib/cn";
import type { PlanInfoType } from "../../types/types";

type BillingPlanProps = InputHTMLAttributes<HTMLInputElement> & {
  plan: PlanInfoType;
};

export const BillingPlan = ({ plan, ...inputProps }: BillingPlanProps) => {
  const { watch } = useFormContext();

  return (
    <label
      className={cn(
        "flex md:flex-col items-center justify-start md:items-start md:justify-around md:w-40 md:h-42 gap-4 border border-Grey-500 rounded-md px-4 py-2 md:p-4 hover:border-2 hover:border-Blue-950 cursor-pointer",
        watch("planId") === plan.id && "border-Blue-950 border-2",
      )}
    >
      <input
        type="radio"
        id={plan.id}
        value={plan.id}
        {...inputProps}
        className="hidden"
      />
      <img src={plan.icon} alt={plan.kind} />
      <div className="flex flex-col items-start">
        <h3 className="font-bold text-lg">{plan.kind}</h3>
        <p className="text-Grey-500">
          ${plan.price}/{plan.billingCycle === "Yearly" ? "yr" : "mo"}
        </p>
        {plan.trialPeriod && (
          <span className="text-Blue-950 font-bold">{plan.trialPeriod}</span>
        )}
      </div>
    </label>
  );
};
