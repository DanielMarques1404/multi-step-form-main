import { useState } from "react";

type ToggleProps = {
  defaultValue: "Monthly" | "Yearly";
  onToggle: (cycle: "Monthly" | "Yearly") => void;
};

export const Toggle = ({ defaultValue, onToggle }: ToggleProps) => {
  const [cycle, setCycle] = useState<"Monthly" | "Yearly">(defaultValue);

  const toggle = () => {
    const newCycle = cycle === "Monthly" ? "Yearly" : "Monthly";
    setCycle(newCycle);
    onToggle(newCycle);
  };

  return (
    <div
      className="flex gap-2 items-center justify-center bg-Blue-100 w-full rounded-md py-4 cursor-pointer"
      onClick={() => toggle()}
    >
      <span
        className={
          cycle === "Monthly"
            ? "text-Blue-950 font-semibold font-ubuntu"
            : "text-Grey-500 font-ubuntu"
        }
      >
        Monthly
      </span>
      <div className="relative w-10 rounded-full border bg-Blue-950 h-5">
        <div
          className={`absolute top-px w-4 h-4 rounded-full bg-white cursor-pointer transition-transform ${cycle === "Monthly" ? "translate-x-0.5" : "translate-x-5"}`}
        />
      </div>
      <span
        className={
          cycle === "Yearly"
            ? "text-Blue-950 font-semibold font-ubuntu"
            : "text-Grey-500 font-ubuntu"
        }
      >
        Yearly
      </span>
    </div>
  );
};
