import { useFormContext } from "react-hook-form";
import type { ApplicationData } from "../../types/types";
import { Input } from "../ui/Input";

export const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ApplicationData>();

  return (
    <section className="flex flex-col items-start bg-White p-6 rounded-lg w-full">
      <div className="flex flex-col items-start mb-8">
        <h1>Personal info</h1>
        <p className="text-start">Please provide your name, email address and phone number.</p>
      </div>
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
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter a valid email address",
            },
          })}
          errors={errors.personalInfoType?.email}
        />
        <Input
          label={"Phone"}
          placeholder="e.g. +1 234 567 890"
          {...register("personalInfoType.phone", {
            required: "This field is required",
            pattern: {
              value: /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}$/,
              message:
                "Please enter a valid phone number (e.g. +1 234 567 890)",
            },
          })}
          errors={errors.personalInfoType?.phone}
        />
      </div>
    </section>
  );
};
