import LoginResetForm from "@/components/Login-Form/login-reset-form";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Resetar a senha",
   description: "Recupere a sua senha no site Dogs.",
};

type ResetSearchParamsProps = {
   searchParams: {
      key: string;
      login: string;
   };
};

export default async function ResetarPage({
   searchParams,
}: ResetSearchParamsProps) {
   return (
      <div className="animeLeft">
         <h1 className="title">Resete a senha</h1>
         <LoginResetForm
            keyToken={searchParams.key}
            login={searchParams.login}
         />
      </div>
   );
}
