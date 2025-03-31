import Image from "next/image";
import styles from "./footer.module.css";

export default function FooterPage() {
   return (
      <footer className={styles.footer}>
         <Image
            src={"/assets/dogs-footer.svg"}
            alt="Footer Dogs"
            width={28}
            height={22}
         />
         <p>Dogs. Alguns direitos reservados.</p>
      </footer>
   );
}
