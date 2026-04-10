import { type InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "../../lib/cn";
import type { AddOnInfoType, ApplicationData } from "../../types/types";

type AddOnProps = InputHTMLAttributes<HTMLInputElement> & {
  addon: AddOnInfoType;
};

export const AddOn = ({ addon, ...inputProps }: AddOnProps) => {
  const { watch, setValue } = useFormContext<ApplicationData>();
  const selectedAddOns = watch("addOns") || [];

  const handleToggle = () => {
    const isSelected = selectedAddOns.includes(addon.id);
    if (isSelected) {
      setValue(
        "addOns",
        selectedAddOns.filter((id) => id !== addon.id),
      );
    } else {
      setValue("addOns", [...selectedAddOns, addon.id]);
    }
  };

  return (
    <label
      className={cn(
        "grid grid-cols-[20px_200px_50px] items-center justify-start gap-4 border border-Grey-500 rounded-md px-2 py-3 hover:border-2 hover:border-Blue-950 cursor-pointer",
        selectedAddOns.includes(addon.id) && "border-Blue-950 border-2",
      )}
      onClick={(e) => {
        e.preventDefault();
        handleToggle();
      }}
    >
      <input
        type="checkbox"
        id={addon.id}
        value={addon.id}
        {...inputProps}
        className="hidden"
      />

      <div
        className={cn(
          "flex items-center justify-center rounded-md w-7 h-7 border bg-none border-Grey-500",
          selectedAddOns.includes(addon.id) && "bg-blue-600",
        )}
      >
        <img src="/assets/images/icon-checkmark.svg" alt={addon.id} />
      </div>

      <div className="flex flex-col items-start">
        <h3 className="font-bold text-lg">{addon.name}</h3>
        <span className="text-Grey-500 font-semibold text-start text-xs">{addon.description}</span>
      </div>

      <span className="text-blue-600 font-semibold">
        {`+$${addon.price}/${addon.billingCycle === "Yearly" ? "yr" : "mo"}`}
      </span>
    </label>
  );
};
