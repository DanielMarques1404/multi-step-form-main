import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import type { AddOnInfoType, ApplicationData } from "../../types/types";
import { AddOn } from "../ui/AddOn";

type AddOnsInfoProps = {
  addonsList: AddOnInfoType[];
};

export const AddOnsInfo = ({ addonsList }: AddOnsInfoProps) => {
  const [addons, setAddons] = useState<AddOnInfoType[]>(addonsList);

  const { register, watch, setValue } = useFormContext<ApplicationData>();
  const selectedAddOns = watch("addOns") || [];

  useEffect(() => {
    setAddons(addonsList);
    setValue("addOns", []);
  }, [addonsList]);

  return (
    <section className="flex flex-col gap-3 items-start bg-White p-6 rounded-lg w-full">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="flex flex-col gap-2 w-full">
        <ul className="flex flex-col gap-2">
          {addons.map((addon, idx) => (
            <li key={`addon-${idx}`} value={addon.id}>
              <AddOn
                {...register("addOns")}
                addon={addon}
                isSelected={selectedAddOns.includes(addon.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
