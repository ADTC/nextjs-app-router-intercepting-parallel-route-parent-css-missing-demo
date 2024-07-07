import Link from "next/link";

// The only known fix for the CSS issue is to import the styles in the normal route,
// and put a dummy element to force load the styles.
// (The dummy class doesn't need to have any style declaration in the SCSS file.)
// This is okay for one style file, but if the page has many components with many
// style files, this can be a lot of imports.
import subpageStyles from "../subpage.module.scss";

export default function Page() {
  return (
    <>
      <span className={subpageStyles.dummy}>Dummy</span>
      <p>LOGIN PAGE (FIXED) - This is the normal route.</p>
      <p>
        <Link href="/subpage">GO TO SUBPAGE</Link>
      </p>
    </>
  );
}
