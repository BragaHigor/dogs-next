import LoginPerdeuForm from "@/components/Login-Form/login-perdeu-form";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Perdeu a senha",
   description: "Recupere a sua senha.",
};

export default async function PerdeuPage() {
   return (
      <div className="animeLeft">
         <h1 className="title">Perdeu a senha?</h1>
         <LoginPerdeuForm />
      </div>
   );
}
