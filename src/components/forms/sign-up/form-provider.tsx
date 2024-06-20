import { AuthContextProvider } from "@/context/use-auth-context";
import React from "react";
import { FormProvider } from "react-hook-form";

type Props = {
  children: React.ReactNode;
};

function SignUpFormProvider({ children }: Props) {
  // return (
  // <AuthContextProvider>
  //   <FormProvider></FormProvider>
  // </AuthContextProvider>
  // )
}

export default SignUpFormProvider;
