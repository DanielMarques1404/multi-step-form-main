import { type InputHTMLAttributes } from "react";
import { cn } from "../../lib/cn";
import type { AddOnInfoType } from "../../types/types";

type AddOnProps = InputHTMLAttributes<HTMLInputElement> & {
  addon: AddOnInfoType;
  isSelected: boolean;
};

export const AddOn = ({ addon, isSelected, ...inputProps }: AddOnProps) => {
  return (
    <label
      className={cn(
        "flex items-center justify-start gap-4 border border-Grey-500 rounded-md p-4 cursor-pointer",
        isSelected && "border-Blue-950 border-2",
      )}
    >
      <input
        {...inputProps}
        type="checkbox"
        id={addon.id}
        value={addon.id}
        className="hidden"
        checked={isSelected}
      />
      <div
        className={cn(
          "flex items-center justify-center rounded-md w-9 h-7 border bg-none border-Grey-500",
          isSelected && "bg-blue-600",
        )}
      >
        <img src="/assets/images/icon-checkmark.svg" alt={addon.id} />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="font-bold text-lg">{addon.name}</h3>
        <span className="text-Grey-500 font-semibold">{addon.description}</span>
      </div>
      <p className="text-Blue-300">
        {`+$${addon.price}/${addon.billingCycle === "Yearly" ? "yr" : "mo"}`}
      </p>
    </label>
  );
};
