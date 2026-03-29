import { useFormContext } from "react-hook-form";
import type { ApplicationData } from "../../types/types";

export const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<ApplicationData>();

  return (
  <div>
    <input {...register("personalInfoType.name", { required: "Name is required" })} />
    {errors.personalInfoType?.name && <p>{errors.personalInfoType.name.message}</p>}

    <input {...register("personalInfoType.email", { required: "Email is required" })} />
    {errors.personalInfoType?.email && <p>{errors.personalInfoType.email.message}</p>}

    <input {...register("personalInfoType.phone", { required: "Phone is required" })} />
    {errors.personalInfoType?.phone && <p>{errors.personalInfoType.phone.message}</p>}
  </div>
  );
};
