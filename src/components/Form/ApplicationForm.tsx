import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { monthlyPlans, yearlyPlans } from "../../lib/plans";
import {
  ADD_ONS_STEP,
  BILLING_PLAN_STEP,
  CONFIRMATION_STEP,
  PERSONAL_INFO_STEP,
  THANK_YOU_STEP,
} from "../../lib/utils";
import type { ApplicationData } from "../../types/types";
import { AddOnsInfo } from "./AddOnsInfo";
import { BillingPlanInfo } from "./BillingPlanInfo";
import { Confirmation } from "./Confirmation";
import { PersonalInfo } from "./PersonalInfo";
import { ThankYou } from "./ThankYouForm";

type ApplicationFormProps = {
  step: number;
  changeStep: (step: number) => void;
};

export const ApplicationForm = ({ step, changeStep }: ApplicationFormProps) => {
  const [cycle, setCycle] = useState<"Monthly" | "Yearly">("Monthly");
  const { setValue } = useFormContext<ApplicationData>();
  
  useEffect(() => {
    setValue("addOns", []);
    setValue(
      "planId",
      cycle === "Monthly" ? monthlyPlans[0].id : yearlyPlans[0].id,
    );
  }, [cycle]);

  const toggleBillingCycle = (newCycle: "Monthly" | "Yearly") => {
    setCycle(newCycle);
  };

  const handleChangePlan = () => {
    changeStep(BILLING_PLAN_STEP.id);
  };

  return (
    <section>
      {step === PERSONAL_INFO_STEP.id && <PersonalInfo />}
      {step === BILLING_PLAN_STEP.id && (
        <BillingPlanInfo
          changeBillingCycle={toggleBillingCycle}
          billingCycle={cycle}
        />
      )}
      {step === ADD_ONS_STEP.id && <AddOnsInfo cycle={cycle} />}
      {step === CONFIRMATION_STEP.id && (
        <Confirmation onChangePlan={handleChangePlan} />
      )}
      {step === THANK_YOU_STEP.id && <ThankYou />}
    </section>
  );
};
