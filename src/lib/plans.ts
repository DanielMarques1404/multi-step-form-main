import type { PlanInfoType } from "../types/types";

const monthlyArcade: PlanInfoType = {
    id: "arcade-monthly",
    kind: "Arcade",
    price: 9,
    billingCycle: "Monthly",
    icon: "/assets/images/icon-arcade.svg",
}

const monthlyAdvanced: PlanInfoType = {
    id: "advanced-monthly",
    kind: "Advanced",
    price: 12,
    billingCycle: "Monthly",
    icon: "/assets/images/icon-advanced.svg",
}

const monthlyPro: PlanInfoType = {
    id: "pro-monthly",
    kind: "Pro",
    price: 15,
    billingCycle: "Monthly",
    icon: "/assets/images/icon-pro.svg",
}

const yearlyArcade: PlanInfoType = {
    id: "arcade-yearly",
    kind: "Arcade",
    price: 90,
    billingCycle: "Yearly",
    icon: "/assets/images/icon-arcade.svg",
    trialPeriod: "2 months free",
}

const yearlyAdvanced: PlanInfoType = {
    id: "advanced-yearly",
    kind: "Advanced",
    price: 120,
    billingCycle: "Yearly",
    icon: "/assets/images/icon-advanced.svg",
    trialPeriod: "2 months free",
}

const yearlyPro: PlanInfoType = {
    id: "pro-yearly",
    kind: "Pro",
    price: 150,
    billingCycle: "Yearly",
    icon: "/assets/images/icon-pro.svg",
    trialPeriod: "2 months free",
}

export const monthlyPlans = [monthlyArcade, monthlyAdvanced, monthlyPro];
export const yearlyPlans = [yearlyArcade, yearlyAdvanced, yearlyPro];
export const allBillingPlans = [...monthlyPlans, ...yearlyPlans];