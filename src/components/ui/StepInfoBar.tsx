import { useEffect, useState } from "react";
import { cn } from "../../lib/cn";
import { STEPS } from "../../lib/utils";

type NavBarProps = {
  step: number;
  classname?: string;
};

export const StepInfoBar = ({ step, classname }: NavBarProps) => {
  const [currentStep, setCurrentStep] = useState(step);

  const steps = [1, 2, 3, 4];

  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  return (
    <nav
      className={cn(
        "flex items-center justify-center md:justify-start mt-8 md:ml-8",
        classname,
      )}
    >
      <ul className="flex flex-row md:hidden gap-4 items-center justify-center md:items-start mb-32">
        {steps.map((s) => (
          <li
            key={`step-${s}`}
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
              Math.min(currentStep, 4) === s
                ? "bg-Blue-200 text-Blue-950"
                : "border-2 border-Blue-300 text-Blue-300 bg-transparent"
            }`}
          >
            {s}
          </li>
        ))}
      </ul>

      <ul className="hidden md:flex md:flex-col gap-8 items-start justify-center">
        {steps.map((s) => (
          <li key={`step-${s}`}>
            <div className="flex gap-4 items-center justify-center">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                  Math.min(currentStep, 4) === s
                    ? "bg-Blue-200 text-Blue-950"
                    : "border-2 border-Blue-300 text-Blue-300 bg-transparent"
                }`}
              >
                {s}
              </span>
              <div className="flex flex-col items-start">
                <span className="text-xs uppercase text-Blue-300">
                  Step {s}
                </span>
                <span className="text-sm font-bold uppercase text-White">
                  {STEPS.find((step) => step.id === s)?.title}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};
