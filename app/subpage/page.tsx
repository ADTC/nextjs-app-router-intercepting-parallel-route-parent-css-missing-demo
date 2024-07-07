import Link from "next/link";
import styles from "./subpage.module.scss";

export default function SubPage() {
  return (
    <main>
      <div>
        <p className={styles.subcss}>
          SUB PAGE - If the CSS loaded, this text will be red.
        </p>
      </div>
      <nav>
        <Link href="/subpage/login">GO TO LOGIN</Link> --- OR ---{" "}
        <Link href="/subpage/login-fixed">GO TO LOGIN (FIXED)</Link>
      </nav>
    </main>
  );
}
