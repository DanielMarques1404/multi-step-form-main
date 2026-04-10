import type { StepType } from "../types/types";

export const PERSONAL_INFO_STEP: StepType = { id: 1, title: "Your Info" };
export const BILLING_PLAN_STEP: StepType = { id: 2, title: "Select Plan" };
export const ADD_ONS_STEP: StepType = { id: 3, title: "Add-ons" };
export const CONFIRMATION_STEP: StepType = { id: 4, title: "Summary" };
export const THANK_YOU_STEP: StepType = { id: 5, title: "Thank You" };

export const STEPS: StepType[] = [
  PERSONAL_INFO_STEP,
  BILLING_PLAN_STEP,
  ADD_ONS_STEP,
  CONFIRMATION_STEP,
  THANK_YOU_STEP,
];
