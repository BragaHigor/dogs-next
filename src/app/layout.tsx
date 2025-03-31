import type { Metadata } from "next";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/Header/header";
import FooterPage from "@/components/Footer/footer";
import { UserContextProvider } from "@/context/user-context";
import userGet from "@/actions/user-get";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
   title: "DOGS NEXT",
   description: "Rede social para cachorros",
};

export default async function RootLayout({
   children,
   modal,
}: Readonly<{
   children: React.ReactNode;
   modal: React.ReactNode;
}>) {
   const { data } = await userGet();

   return (
      <html lang="pt-BR">
         <body className={type_second.variable}>
            <UserContextProvider user={data}>
               <div className="App">
                  <Header />
                  <main className="AppBody">{children}</main>
                  <div>{modal}</div>
                  <FooterPage />
               </div>
            </UserContextProvider>
            <SpeedInsights />
         </body>
      </html>
   );
}
