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
  name: string;
  price: number;
};

export type ApplicationData = {
  personalInfoType: PersonalInfoType;
  planId: string;
  addOns: AddOnInfoType[];
};
