export type PersonalInfoType = {
  name: string;
  email: string;
  phone: string;
};

export type PlanInfoType = {
  id: string;
  kind: "Arcade" | "Advanced" | "Pro";
  price: number;
  billingCycle: "Monthly" | "Yearly";
  icon: string;
  trialPeriod?: string;
};

export type AddOnInfoType = {
  id: string;
  name: string;
  description: string;
  price: number;
  billingCycle: "Monthly" | "Yearly";
};

export type ApplicationData = {
  personalInfoType: PersonalInfoType;
  planId: string;
  addOns: string[];
};

export type StepType = {
  id: number;
  title: string;
}