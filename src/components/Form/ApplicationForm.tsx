import { useForm, FormProvider } from "react-hook-form";
import type { ApplicationData } from "../../types/types";
import { PersonalInfo } from "./PersonalInfo";

export const ApplicationForm = () => {
  const form = useForm<ApplicationData>({
    defaultValues: {
      personalInfoType: {
        name: "",
        email: "",
        phone: "",
      },
      planInfoType: {
        kind: "Arcade",
        price: 0,
        billingCycle: "Monthly",
      },
      addOns: [],
    },
  });

  const onSubmit = (data: ApplicationData) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <PersonalInfo />
        <button type="submit">Enviar</button>
      </form>
    </FormProvider>
  );
}