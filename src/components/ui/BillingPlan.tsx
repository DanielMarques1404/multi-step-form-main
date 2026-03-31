import { useEffect, useState, type InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import type { PlanInfoType } from "../../types/types";

type BillingPlanProps = InputHTMLAttributes<HTMLInputElement> & {
  plan: PlanInfoType;
  selected: boolean;
  onCheck: (planId: string) => void;
};

export const BillingPlan = (props: BillingPlanProps) => {
  const [isSelected, setIsSelected] = useState(props.selected);
  useEffect(() => {
    setIsSelected(props.selected);
  }, [props.selected]);

  return (
    <label
      className={cn(
        "flex items-center justify-start gap-4 border border-Grey-500 rounded-md p-4",
        isSelected && "border-Blue-950 border-2",
      )}
      onClick={() => props.onCheck(props.plan.id)}
    >
      <input
        {...props}
        type="radio"
        id={props.plan.id}
        value={props.plan.id}
        className="hidden"
        checked={isSelected}
      />
      <img src={props.plan.icon} alt={props.plan.kind} />
      <div className="flex flex-col items-start">
        <h3 className="font-bold text-lg">{props.plan.kind}</h3>
        <p className="text-Grey-500">
          ${props.plan.price}/
          {props.plan.billingCycle === "Yearly" ? "yr" : "mo"}
        </p>
        {props.plan.trialPeriod && (
          <p className="text-green-500 font-semibold">
            {props.plan.trialPeriod}
          </p>
        )}
      </div>
    </label>
  );
};
