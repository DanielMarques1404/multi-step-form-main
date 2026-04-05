import { useFormContext } from "react-hook-form";
import { getAddOnsById } from "../../lib/addons";
import { getPlanById } from "../../lib/plans";
import type { ApplicationData } from "../../types/types";

export const Confirmation = () => {

  const { getValues } = useFormContext<ApplicationData>();
  const plan = getPlanById(getValues("planId"));
  const addons = getAddOnsById(getValues("addOns"));

  return (
    <section className="flex flex-col gap-3 items-start bg-White p-6 rounded-lg w-full">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="flex flex-col w-full font-ubuntu text-sm">
        <div className="flex items-center justify-between bg-Blue-50 p-2 rounded-md w-full">
          <div className="flex flex-col">
            <span className="text-start font-bold text-Blue-950 ">{`${plan!.kind} (${plan!.billingCycle})`}</span>
            <span className="text-start underline text-Grey-500 cursor-pointer">Change</span>
          </div>
          <span className="font-bold text-Blue-950">{`$${plan!.price}/${plan!.billingCycle === "Yearly" ? "yr" : "mo"}`}</span>
        </div>

        <div className="w-full border border-gray-200"></div>
        
        <ul className="flex flex-col gap-1 p-2 bg-Blue-50">
          {addons.map((addon, idx) => (
            <li
              key={`addon-${idx}`}
              className="flex items-center justify-between text-Grey-500"
            >
              <span>{addon.name}</span>
              <span className="font-semibold">{`+$${addon.price}/${addon.billingCycle === "Yearly" ? "yr" : "mo"}`}</span>
            </li>
          ))}
        </ul>

        <div className="w-full border border-gray-200"></div>
        
        <div className="flex items-center justify-between p-2 mt-6 text-Grey-500">
          <span>Total (per {plan!.billingCycle === "Yearly" ? "year" : "month"})</span>
          <span className="text-blue-600 font-bold">{`$${plan!.price + addons.reduce((acc, addon) => acc + addon.price, 0)}/${plan!.billingCycle === "Yearly" ? "yr" : "mo"}`}</span>
        </div>
      </div>
    </section>
  );
};
