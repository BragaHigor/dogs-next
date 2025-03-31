"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../Forms/button";
import Input from "../Forms/input";
import ErrorMessage from "../Helper/error-message";
import styles from "./login-form.module.css";
import passwordReset from "@/actions/password-reset";

function FormButton() {
   const { pending } = useFormStatus();

   return (
      <>
         {pending ? (
            <Button disabled={pending}>Resetando...</Button>
         ) : (
            <Button>Resetar senha</Button>
         )}
      </>
   );
}

export default function LoginResetForm({
   keyToken,
   login,
}: {
   keyToken: string;
   login: string;
}) {
   const [state, action] = useFormState(passwordReset, {
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
         <Input label="Nova senha" name="password" type="password" />
         <input type="hidden" name="login" value={login} />
         <input type="hidden" name="key" value={keyToken} />
         <ErrorMessage error={state.error} />
         <FormButton />
      </form>
   );
}
