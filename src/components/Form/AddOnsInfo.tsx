import { allAddOns } from "../../lib/addons";
import type { AddOnInfoType } from "../../types/types";
import { AddOn } from "../ui/AddOn";

type AddOnsInfoProps = {
  cycle: "Monthly" | "Yearly";
};

export const AddOnsInfo = ({ cycle }: AddOnsInfoProps) => {
  const addons: AddOnInfoType[] = allAddOns.filter(
    (addon) => addon.billingCycle === cycle,
  );

  return (
    <section className="flex flex-col items-start bg-White p-6 rounded-lg w-full">
      <div className="flex flex-col items-start mb-8">
        <h1>Pick add-ons</h1>
        <p className="text-start">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <ul className="flex flex-col gap-2">
          {addons.map((addon, idx) => (
            <li key={`addon-${idx}`} value={addon.id}>
              <AddOn addon={addon} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
