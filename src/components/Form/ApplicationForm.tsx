import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { ApplicationData } from "../../types/types";
import { PersonalInfo } from "./PersonalInfo";
import { SelectPlan } from "./SelectPlan";

export const ApplicationForm = () => {
  const [step, setStep] = useState(1);
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

  const onSubmit = (data: ApplicationData) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <div className="w-full">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex gap-2 items-center justify-center"
        >
          {step === 1 && <PersonalInfo />}
          {/* {step === 2 && <SelectPlan />} */}
          <SelectPlan />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </FormProvider>
  );
};
