import ContaPhotoPost from "@/components/Conta/conta-photo-post";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Postar | Minha Conta",
};

export default async function PostarPage() {
   return (
      <div>
         <ContaPhotoPost />
      </div>
   );
}
