type StepNavigationBarProps = {
    changeStep: (step: "Back" | "Next") => void;
}

export const StepNavigationBar = ({ changeStep }: StepNavigationBarProps) => {
    return (
        <section className="flex w-full items-center justify-between px-6 py-2 h-full">
          <span className="cursor-pointer text-Grey-500 hover:text-Blue-950 font-bold" onClick={() => changeStep("Back")}>
            Go Back
          </span>
          <div className="bg-blue-950 text-White hover:bg-blue-900 cursor-pointer px-4 py-2 rounded-md" onClick={() => changeStep("Next")}>
            Next Step
          </div>
        </section>
    )
}