import { useEffect, useState } from "react";

type ToggleProps = {
  selected: string;
  onToggle: (value: string) => void;
};

export const Toggle = (props: ToggleProps) => {
  const [period, setPeriod] = useState(props.selected);

  useEffect(() => {
    setPeriod(props.selected);
  }, [props.selected]);

  const togglePeriod = () => {
    const newPeriod = period === "Monthly" ? "Yearly" : "Monthly";
    setPeriod(newPeriod);
    props.onToggle(newPeriod);
  }

  return (
    <div className="flex gap-2 items-center justify-center bg-Blue-100 w-full rounded-md h-24">
      <span
        className={
          period === "Monthly"
            ? "text-Blue-950 font-semibold font-ubuntu"
            : "text-Grey-500 font-ubuntu"
        }
      >
        Monthly
      </span>
      <div className="relative w-10 rounded-full border bg-Blue-950 h-5">
        <div
          className={`absolute top-0.5 w-4 h-4 rounded-full bg-white cursor-pointer transition-transform ${period === "Monthly" ? "translate-x-0" : "translate-x-5"}`}
          onClick={() => togglePeriod()}
        />
      </div>
      <span
        className={
          period === "Yearly"
            ? "text-Blue-950 font-semibold font-ubuntu"
            : "text-Grey-500 font-ubuntu"
        }
      >
        Yearly
      </span>
    </div>
  );
};
