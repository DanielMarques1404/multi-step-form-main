import { FormProvider, useForm } from "react-hook-form";
import type { ApplicationData } from "../../types/types";
import { PersonalInfo } from "./PersonalInfo";
import { useState } from "react";

export const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const form = useForm<ApplicationData>({
    defaultValues: {
      personalInfoType: {
        name: "",
        email: "",
        phone: "",
      },
      planInfoType: {
        kind: "Arcade",
        price: 0,
        billingCycle: "Monthly",
      },
      addOns: [],
    },
  });

  const onSubmit = (data: ApplicationData) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <div className="w-1/3">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {step === 1 && <PersonalInfo />}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </FormProvider>
  );
};
