import { useFormContext } from "react-hook-form";
import type { ApplicationData } from "../../types/types";
import { Input } from "../ui/Input";

export const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ApplicationData>();

  return (
    <section className="flex flex-col gap-3 items-start bg-White p-6 rounded-lg w-full">
      <h1>Personal info</h1>
      <p>Please provide your name, email address and phone number.</p>
      <div className="flex flex-col gap-2 w-full">
        <Input
          label={"Name"}
          placeholder="e.g. Stephen King"
          {...register("personalInfoType.name", {
            required: "This field is required",
          })}
          errors={errors.personalInfoType?.name}
        />
        <Input
          label={"Email Address"}
          placeholder="e.g. stephenking@lorem.com"
          {...register("personalInfoType.email", {
            required: "This field is required",
          })}
          errors={errors.personalInfoType?.email}
        />
        <Input
          label={"Phone"}
          placeholder="e.g. +1 234 567 890"
          {...register("personalInfoType.phone", {
            required: "This field is required",
          })}
          errors={errors.personalInfoType?.phone}
        />
      </div>
    </section>
  );
};
