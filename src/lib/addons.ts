import type { AddOnInfoType } from "../types/types";

const monthlyOnlineService: AddOnInfoType = {
    id: "online-service-monthly",
    name: "Online service",
    description: "Access to multiplayer games",
    price: "+$1/mo",
    billingCycle: "Monthly"
}

const monthlyLargerStorage: AddOnInfoType = {
    id: "larger-storage-monthly",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "+$2/mo",
    billingCycle: "Monthly"
}

const monthlyCustomizableProfile: AddOnInfoType = {
    id: "customizable-profile-monthly",
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+$2/mo",
    billingCycle: "Monthly"
}

const yearlyOnlineService: AddOnInfoType = {
    id: "online-service-yearly",
    name: "Online service",
    description: "Access to multiplayer games",
    price: "+$10/yr",
    billingCycle: "Yearly"
}

const yearlyLargerStorage: AddOnInfoType = {
    id: "larger-storage-yearly",
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: "+$20/yr",
    billingCycle: "Yearly"
}

const yearlyCustomizableProfile: AddOnInfoType = {
    id: "customizable-profile-yearly",
    name: "Customizable profile",
    description: "Custom theme on your profile",
    price: "+$20/yr",
    billingCycle: "Yearly"
}

export const monthlyAddOns = [monthlyOnlineService, monthlyLargerStorage, monthlyCustomizableProfile];
export const yearlyAddOns = [yearlyOnlineService, yearlyLargerStorage, yearlyCustomizableProfile];
export const allAddOns = [...monthlyAddOns, ...yearlyAddOns];