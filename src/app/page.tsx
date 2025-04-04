import photosGet from "@/actions/photos-get";
import Feed from "@/components/Feed/feed";
import Link from "next/link";

export default async function Home() {
   const { data } = await photosGet();
   return (
      <section className="container mainContainer">
         {data?.length ? (
            <Feed photos={data} />
         ) : (
            <div>
               <p
                  style={{
                     color: "#444",
                     fontSize: "1.25rem",
                     marginBottom: "1rem",
                  }}
               >
                  Nem uma foto encontrada.
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
      </section>
   );
}
