import { FormProvider, useForm } from "react-hook-form";
import { monthlyAddOns } from "../../lib/addons";
import { monthlyPlans } from "../../lib/plans";
import type { ApplicationData } from "../../types/types";
import { AddOnsInfo } from "./AddOnsInfo";
import { BillingPlanInfo } from "./BillingPlanInfo";
import { PersonalInfo } from "./PersonalInfo";
import { Confirmation } from "./Confirmation";

type ApplicationFormProps = {
  step: number;
};

export const ApplicationForm = ({ step }: ApplicationFormProps) => {
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 items-center justify-between w-full h-full"
      >
        {step === 1 && <PersonalInfo />}
        {step === 2 && (
          <BillingPlanInfo
            plansList={monthlyPlans}
            changeBillingCycle={() => console.log()}
          />
        )}
        {step === 3 && <AddOnsInfo addonsList={monthlyAddOns} />}
        {step === 4 && <Confirmation />}
        {/* <ThakYou /> */}
      </form>
    </FormProvider>
  );
};
