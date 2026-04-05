import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type { ApplicationData } from "../../types/types";
import { AddOnsInfo } from "./AddOnsInfo";
import { BillingPlanInfo } from "./BillingPlanInfo";
import { Confirmation } from "./Confirmation";
import { PersonalInfo } from "./PersonalInfo";
import { monthlyPlans, yearlyPlans } from "../../lib/plans";

type ApplicationFormProps = {
  step: number;
  changeStep: (step: number) => void;
};

export const ApplicationForm = ({ step, changeStep }: ApplicationFormProps) => {
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

  const [cycle, setCycle] = useState<"Monthly" | "Yearly">("Monthly");

  useEffect(() => {
    form.setValue("addOns", []);
    form.setValue("planId", cycle === "Monthly" ? monthlyPlans[0].id : yearlyPlans[0].id);
  }, [cycle]);

  const onSubmit = (data: ApplicationData) => {
    console.log(data);
  };

  const toggleBillingCycle = (newCycle: "Monthly" | "Yearly") => {
    setCycle(newCycle);
  };

  const handleChangePlan = () => {
    changeStep(2);
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 items-center justify-between w-full h-full"
      >
        {step === 1 && <PersonalInfo />}
        {step === 2 && (
          <BillingPlanInfo
            changeBillingCycle={toggleBillingCycle}
            billingCycle={cycle}
          />
        )}
        {step === 3 && <AddOnsInfo cycle={cycle} />}
        {step === 4 && <Confirmation onChangePlan={handleChangePlan} />}
        {/* <ThakYou /> */}
      </form>
    </FormProvider>
  );
};
