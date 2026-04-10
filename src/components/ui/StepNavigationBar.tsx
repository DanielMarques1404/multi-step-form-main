import { CONFIRMATION_STEP, PERSONAL_INFO_STEP } from "../../lib/utils";

type StepNavigationBarProps = {
  step: number;
  changeStep: (step: "Back" | "Next") => void;
};

export const StepNavigationBar = ({
  step,
  changeStep,
}: StepNavigationBarProps) => {
  return (
    <section className="flex w-full items-center justify-between px-6 py-2 h-full">
      {step !== PERSONAL_INFO_STEP.id ? (
        <span
          className="cursor-pointer text-Grey-500 hover:text-Blue-950 font-bold"
          onClick={() => changeStep("Back")}
        >
          Go Back
        </span>
      ) : (
        <span></span>
      )}
      {step < CONFIRMATION_STEP.id ? (
        <div
          className="bg-blue-950 text-White hover:bg-blue-900 cursor-pointer px-4 py-2 rounded-md"
          onClick={() => changeStep("Next")}
        >
          Next Step
        </div>
      ) : (
        <label className="bg-blue-500 text-White hover:bg-blue-400 cursor-pointer px-4 py-2 rounded-md">
          <input className="hidden" type="submit" />
          <span>Confirm</span>
        </label>
      )}
    </section>
  );
};
