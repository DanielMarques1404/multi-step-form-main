export type PersonalInfoType = {
    name: string;
    email: string;
    phone: string;
}

export type PlanInfoType = {
    kind: "Arcade" | "Advanced" | "Pro";
    price: number;
    billingCycle: "Monthly" | "Yearly";
}

export type AddOnInfoType = {
    name: string;
    price: number;
}

export type ApplicationData = {
    personalInfoType: PersonalInfoType;
    planInfoType: PlanInfoType;
    addOns: AddOnInfoType[];
}