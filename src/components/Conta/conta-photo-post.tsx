"use client";

import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../Forms/button";
import Input from "../Forms/input";
import ErrorMessage from "../Helper/error-message";
import styles from "./conta-photo-post.module.css";
import photoPost from "@/actions/photo-post";

function FormButton() {
   const { pending } = useFormStatus();

   return (
      <>
         {pending ? (
            <Button disabled={pending}>Enviando...</Button>
         ) : (
            <Button>Enviar</Button>
         )}
      </>
   );
}

export default function ContaPhotoPost() {
   const [state, action] = useFormState(photoPost, {
      ok: false,
      error: "",
      data: null,
   });

   const [img, setImg] = React.useState("");

   function handleImaChange({ target }: React.ChangeEvent<HTMLInputElement>) {
      if (target.files) {
         setImg(URL.createObjectURL(target.files[0]));
      }
      console.log("TARGET", target.files);
   }

   return (
      <section className={`${styles.photoPost} animeLeft`}>
         <form action={action} className={styles.form}>
            <Input label="Nome" name="nome" type="text" />
            <Input label="Peso" name="peso" type="number" />
            <Input label="Idade" name="idade" type="number" />
            <input
               onChange={handleImaChange}
               type="file"
               name="img"
               id="img"
               className={styles.file}
            />
            <ErrorMessage error={state.error} />
            <FormButton />
         </form>
         <div>
            <div
               className={styles.preview}
               style={{ backgroundImage: `url(${img})` }}
            ></div>
         </div>
      </section>
   );
}
