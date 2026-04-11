import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import { ApplicationForm } from "./components/Form/ApplicationForm";
import { StepInfoBar } from "./components/ui/StepInfoBar";
import { StepNavigationBar } from "./components/ui/StepNavigationBar";
import { cn } from "./lib/cn";
import {
  CONFIRMATION_STEP,
  PERSONAL_INFO_STEP,
  THANK_YOU_STEP,
} from "./lib/utils";
import type { ApplicationData } from "./types/types";

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
        <div className="flex md:items-center justify-center min-h-screen">
          <div className="grid grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] bg-White w-93.75 md:w-250 p-0 md:p-2">
            <nav className="h-43 md:w-60 md:h-121.25 bg-[url(./assets/images/bg-sidebar-mobile.svg)] md:bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-contain bg-center bg-no-repeat">
              <StepInfoBar step={step} />
            </nav>
            <section className="grid grid-rows-[30rem_4rem] md:grid-rows-[26rem_4rem] h-full">
              <main className="relative md:static flex items-center justify-center md:mx-24 bg-Blue-100 md:bg-White">
                <div className="absolute -top-18 md:static w-[90%] md:w-full">
                  <ApplicationForm
                    step={step}
                    changeStep={(newStep) => setStep(newStep)}
                  />
                </div>
              </main>
              <footer
                className={cn(
                  "bg-Blue-50",
                  step === THANK_YOU_STEP.id && "hidden",
                )}
              >
                <StepNavigationBar changeStep={handleChangeStep} step={step} />
              </footer>
            </section>
          </div>
        </div>
      </form>
    </FormProvider>

    // <FormProvider {...form}>
    //   <form onSubmit={form.handleSubmit(onSubmit)}>
    //     <section className="flex items-center justify-center min-h-screen">
    //       <div className="grid grid-rows-[auto_1fr] md:grid-cols-[auto_1fr] w-93.75 h-screen md:w-250 md:h-125 bg-White md:p-2 rounded-md">
    //         <div className="h-43 md:w-60 md:h-121.25 bg-[url(./assets/images/bg-sidebar-mobile.svg)] md:bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-contain bg-center bg-no-repeat">
    //           <StepInfoBar step={step} />
    //         </div>

    //         <div className="grid grid-rows-[1fr_auto] md:mx-24">
    //           <ApplicationForm
    //             step={step}
    //             changeStep={(newStep) => setStep(newStep)}
    //           />
    //           {step !== THANK_YOU_STEP.id && (
    //             <div className="bg-Blue-50 w-full h-1/12">
    //               <StepNavigationBar
    //                 changeStep={handleChangeStep}
    //                 step={step}
    //               />
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     </section>
    //   </form>
    // </FormProvider>
  );
}

export default App;
