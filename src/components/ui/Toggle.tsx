import { useState } from "react";

type ToggleProps = {
  cycleDefault: "Monthly" | "Yearly";
  onToggle: (cycle: "Monthly" | "Yearly") => void;
};

export const Toggle = (props: ToggleProps) => {
  const [cycle, setCycle] = useState<"Monthly" | "Yearly">(props.cycleDefault);

  const toggle = () => {
    const newCycle = cycle === "Monthly" ? "Yearly" : "Monthly";
    setCycle(newCycle);
    props.onToggle(newCycle);
  };

  return (
    <div className="flex gap-2 items-center justify-center bg-Blue-100 w-full rounded-md h-24">
      <span
        className={
          cycle === "Monthly"
            ? "text-Blue-950 font-semibold font-ubuntu"
            : "text-Grey-500 font-ubuntu"
        }
      >
        Monthly
      </span>
      <div
        className="relative w-10 rounded-full border bg-Blue-950 h-5"
        onClick={() => toggle()}
      >
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
