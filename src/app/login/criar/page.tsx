import LoginCriarForm from "@/components/Login-Form/login-criar-form";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Criar sua conta",
   description: "Crie sua conta no site Dogs.",
};

export default async function CriarPage() {
   return (
      <div className="animeLeft">
         <h1 className="title">Cadastre-se</h1>
         <LoginCriarForm />
      </div>
   );
}
