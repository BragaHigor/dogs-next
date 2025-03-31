"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../Forms/button";
import Input from "../Forms/input";
import ErrorMessage from "../Helper/error-message";
import styles from "./login-form.module.css";
import passwordLost from "@/actions/password-lost";

function FormButton() {
   const { pending } = useFormStatus();

   return (
      <>
         {pending ? (
            <Button disabled={pending}>Enviando...</Button>
         ) : (
            <Button>Enviar email</Button>
         )}
      </>
   );
}

export default function LoginPerdeuForm() {
   const [state, action] = useFormState(passwordLost, {
      ok: false,
      error: "",
      data: null,
   });

   const [url, setUrl] = React.useState("");

   React.useEffect(() => {
      setUrl(window.location.href.replace("perdeu", "resetar"));
   }, []);

   return (
      <form action={action} className={styles.form}>
         <Input label="Email / Usuário" name="login" type="text" />
         <input type="hidden" name="url" value={url} />
         <ErrorMessage error={state.error} />
         {state.ok ? (
            <p style={{ color: "#4c1" }}>Email enviado.</p>
         ) : (
            <FormButton />
         )}
      </form>
   );
}
