import { useEffect, useState, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import type { PlanInfoType } from "../../types/types";

type BillingPlanProps = InputHTMLAttributes<HTMLInputElement> & {
  plan: PlanInfoType;
  selected: boolean;
  onselect: (planId: string) => void;
};

export const BillingPlan = ({
  plan,
  selected,
  onselect,
  ...inputProps
}: BillingPlanProps) => {
  const [isSelected, setIsSelected] = useState(selected);
  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <label
      className={cn(
        "flex items-center justify-start gap-4 border border-Grey-500 rounded-md p-4",
        isSelected && "border-Blue-950 border-2",
      )}
      onClick={() => onselect(plan.id)}
    >
      <input
        {...inputProps}
        type="radio"
        id={plan.id}
        value={plan.id}
        className="hidden"
        checked={isSelected}
      />
      <img src={plan.icon} alt={plan.kind} />
      <div className="flex flex-col items-start">
        <h3 className="font-bold text-lg">{plan.kind}</h3>
        <p className="text-Grey-500">
          ${plan.price}/
          {plan.billingCycle === "Yearly" ? "yr" : "mo"}
        </p>
        {plan.trialPeriod && (
          <p className="text-green-500 font-semibold">
            {plan.trialPeriod}
          </p>
        )}
      </div>
    </label>
  );
};
