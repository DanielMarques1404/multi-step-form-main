import { useEffect, useState } from "react";

type NavBarProps = {
  step: number;
};

export const StepInfoBar = ({ step }: NavBarProps) => {
  const [currentStep, setCurrentStep] = useState(step);

  const steps = [1, 2, 3, 4];

  useEffect(() => {
    setCurrentStep(step);
  }, [step]);

  return (
    <nav className=" w-full mx-auto">
      <ul className="flex flex-row gap-4 items-center justify-center">
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
    </nav>
  );
};
