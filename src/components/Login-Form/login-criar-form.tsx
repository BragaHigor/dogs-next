"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../Forms/button";
import Input from "../Forms/input";
import ErrorMessage from "../Helper/error-message";
import styles from "./login-form.module.css";
import userPost from "@/actions/user-post";

function FormButton() {
   const { pending } = useFormStatus();

   return (
      <>
         {pending ? (
            <Button disabled={pending}>Cadastrando...</Button>
         ) : (
            <Button>Cadastrar</Button>
         )}
      </>
   );
}

export default function LoginCriarForm() {
   const [state, action] = useFormState(userPost, {
      ok: false,
      error: "",
      data: null,
   });

   React.useEffect(() => {
      if (state.ok) window.location.href = "/conta";
   }, [state.ok]);

   return (
      <form action={action} className={styles.form}>
         <Input label="Usuário" name="username" type="text" />
         <Input label="Email" name="email" type="email" />
         <Input label="Senha" name="password" type="password" />
         <ErrorMessage error={state.error} />
         <FormButton />
      </form>
   );
}
