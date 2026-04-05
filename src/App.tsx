import { useState } from "react";
import "./App.css";
import { ApplicationForm } from "./components/Form/ApplicationForm";
import { StepInfoBar } from "./components/ui/StepInfoBar";
import { StepNavigationBar } from "./components/ui/StepNavigationBar";

function App() {
  const [step, setStep] = useState(1);

  const handleChangeStep = (action: "Back" | "Next") => {
    if (action === "Back") {
      setStep((prev) => Math.max(prev - 1, 1));
    } else {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen w-2/3 m-auto">
      {/* <ApplicationForm /> */}
      <div className="flex flex-col w-full h-screen items-center justify-between">
        <div className="flex bg-[url(./assets/images/bg-sidebar-mobile.svg)] w-full h-3/12 pt-8 bg-no-repeat bg-cover bg-center">
          <StepInfoBar step={step} />
        </div>
        <div className="absolute items-center justify-center top-30 z-99 w-3/5">
          <ApplicationForm step={step} changeStep={(newStep) => setStep(newStep)}/>
        </div>
        <div className="bg-Blue-50 w-full h-1/12">
          <StepNavigationBar changeStep={handleChangeStep} />
        </div>
      </div>
    </div>
  );
}

export default App;
