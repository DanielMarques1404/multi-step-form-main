import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import { ApplicationForm } from "./components/Form/ApplicationForm";
import { StepInfoBar } from "./components/ui/StepInfoBar";
import { StepNavigationBar } from "./components/ui/StepNavigationBar";
import {
  CONFIRMATION_STEP,
  PERSONAL_INFO_STEP,
  THANK_YOU_STEP,
} from "./lib/utils";
import type { ApplicationData } from "./types/types";

function App() {
  const [step, setStep] = useState(PERSONAL_INFO_STEP);

  const form = useForm<ApplicationData>({
    defaultValues: {
      personalInfoType: {
        name: "",
        email: "",
        phone: "",
      },
      planId: "arcade-monthly",
      addOns: [],
    },
  });

  const validateStep = async (currentStep: number): Promise<boolean> => {
    const fieldsToValidate: Record<number, (keyof ApplicationData)[]> = {
      1: ["personalInfoType"],
      2: ["planId"],
      3: ["addOns"],
      4: [], // Confirmação não precisa validar
    };

    const fields = fieldsToValidate[currentStep] || [];
    const isValid = await form.trigger(fields);
    return isValid;
  };

  const handleChangeStep = async (action: "Back" | "Next") => {
    if (action === "Back") {
      setStep((prev) => Math.max(prev - 1, PERSONAL_INFO_STEP));
    } else {
      const isValid = await validateStep(step);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, CONFIRMATION_STEP));
      }
    }
  };

  const onSubmit = (data: ApplicationData) => {
    console.log(data);
    setStep(THANK_YOU_STEP);
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 items-center justify-between w-full h-full"
      >
        <div className="relative flex items-center justify-center min-h-screen w-2/3 m-auto">
          <div className="flex flex-col w-full h-screen items-center justify-between">
            <div className="flex bg-[url(./assets/images/bg-sidebar-mobile.svg)] w-full h-3/12 pt-8 bg-no-repeat bg-cover bg-center">
              <StepInfoBar step={step} />
            </div>
            <div className="absolute items-center justify-center top-30 z-99 w-3/5">
              <ApplicationForm
                step={step}
                changeStep={(newStep) => setStep(newStep)}
              />
            </div>
            {step !== THANK_YOU_STEP && (
              <div className="bg-Blue-50 w-full h-1/12">
                <StepNavigationBar changeStep={handleChangeStep} step={step} />
              </div>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default App;
