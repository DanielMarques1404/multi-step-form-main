import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BillingPlanInfo } from "./BillingPlanInfo";
import { PersonalInfo } from "./PersonalInfo";
import { AddOnsInfo } from "./AddOnsInfo";
import { allBillingPlans, monthlyPlans } from "../../lib/plans";
import { allAddOns, monthlyAddOns } from "../../lib/addons";
import type { PlanInfoType, AddOnInfoType, ApplicationData } from "../../types/types";

export const ApplicationForm = () => {
  const [step, setStep] = useState(1);
  const [billingPlans, setBillingPlans] = useState<PlanInfoType[]>(monthlyPlans);
  const [addonsList, setAddonsList] = useState<AddOnInfoType[]>(monthlyAddOns);

  const changeBillingCycle = (cycle: "Monthly" | "Yearly") => {
    setBillingPlans(allBillingPlans.filter((plan) => plan.billingCycle === cycle));
    setAddonsList(allAddOns.filter((addon) => addon.billingCycle === cycle));
  }

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
          <BillingPlanInfo plansList={billingPlans} changeBillingCycle={changeBillingCycle} />
          <AddOnsInfo addonsList={addonsList} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </FormProvider>
  );
};
