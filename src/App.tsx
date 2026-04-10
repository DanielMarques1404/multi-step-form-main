import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import { ApplicationForm } from "./components/Form/ApplicationForm";
import { StepInfoBar } from "./components/ui/StepInfoBar";
import {
  CONFIRMATION_STEP,
  PERSONAL_INFO_STEP,
  THANK_YOU_STEP,
} from "./lib/utils";
import type { ApplicationData } from "./types/types";
import { StepNavigationBar } from "./components/ui/StepNavigationBar";

function App() {
  const [step, setStep] = useState(PERSONAL_INFO_STEP.id);

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
      setStep((prev) => Math.max(prev - 1, PERSONAL_INFO_STEP.id));
    } else {
      const isValid = await validateStep(step);
      if (isValid) {
        setStep((prev) => Math.min(prev + 1, CONFIRMATION_STEP.id));
      }
    }
  };

  const onSubmit = (data: ApplicationData) => {
    console.log(data);
    setStep(THANK_YOU_STEP.id);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section className="flex items-center justify-center min-h-screen">
          <div className="grid grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] w-93.75 h-screen md:w-250 md:h-125 bg-White md:p-2 rounded-md">
            <div className="h-43 md:w-60 md:h-121.25 bg-[url(./assets/images/bg-sidebar-mobile.svg)] md:bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-contain bg-center bg-no-repeat">
              <StepInfoBar step={step} />
            </div>

            <div className="grid grid-rows-[1fr_auto] md:mx-24">
              <ApplicationForm
                step={step}
                changeStep={(newStep) => setStep(newStep)}
              />
              {step !== THANK_YOU_STEP.id && (
                <div className="bg-Blue-50 w-full h-1/12">
                  <StepNavigationBar
                    changeStep={handleChangeStep}
                    step={step}
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </form>
    </FormProvider>
    // <FormProvider {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onSubmit)}
    //     className="grid grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] gap-2 items-center justify-center"
    //   >
    //     <StepInfoBar
    //       classname="bg-[url(./assets/images/bg-sidebar-mobile.svg)] md:bg-[url(./assets/images/bg-sidebar-desktop.svg)] w-auto h-64 md:h-150 bg-contain bg-no-repeat bg-center"
    //       step={step}
    //     />
    //     <div className="bg-red-400 w-full h-full">B</div>
    //   </form>
    // </FormProvider>
  );
}

export default App;
