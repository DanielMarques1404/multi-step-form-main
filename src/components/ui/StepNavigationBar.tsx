type StepNavigationBarProps = {
    step: number;
    changeStep: (step: "Back" | "Next") => void;
    confirmation: () => void;
}

export const StepNavigationBar = ({ step, changeStep, confirmation }: StepNavigationBarProps) => {
    return (
        <section className="flex w-full items-center justify-between px-6 py-2 h-full">
          <span className="cursor-pointer text-Grey-500 hover:text-Blue-950 font-bold" onClick={() => changeStep("Back")}>
            Go Back
          </span>
          {step < 4 ? (<div className="bg-blue-950 text-White hover:bg-blue-900 cursor-pointer px-4 py-2 rounded-md" onClick={() => changeStep("Next")}>
            Next Step
          </div>) : (<div className="bg-blue-500 text-White hover:bg-blue-400 cursor-pointer px-4 py-2 rounded-md" onClick={() => confirmation()}>
            Confirm
          </div>)}
        </section>
    )
}