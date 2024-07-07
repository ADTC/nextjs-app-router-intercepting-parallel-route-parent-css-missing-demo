import Link from "next/link";

export default function Page() {
  return (
    <>
      <p>LOGIN PAGE - This is the normal route.</p>
      <p>
        <Link href="/subpage">GO TO SUBPAGE</Link>
      </p>
    </>
  );
}
