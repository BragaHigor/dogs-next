import React from "react";

import { Metadata } from "next";
import Feed from "@/components/Feed/feed";
import photosGet from "@/actions/photos-get";
import userGet from "@/actions/user-get";
import Link from "next/link";

export const metadata: Metadata = {
   title: "Minha Conta",
};

export default async function ContaPage() {
   const { data: user } = await userGet();
   const { data } = await photosGet({ user: user?.username });
   return (
      <main>
         {data?.length ? (
            <Feed photos={data} user={user?.username} />
         ) : (
            <div>
               <p
                  style={{
                     color: "#444",
                     fontSize: "1.25rem",
                     marginBottom: "1rem",
                  }}
               >
                  Nenhuma foto encontrada.
               </p>
               <Link
                  href={"/conta/postar"}
                  className="button"
                  style={{ display: "inline-block" }}
               >
                  Postar Foto
               </Link>
            </div>
         )}
      </main>
   );
}
