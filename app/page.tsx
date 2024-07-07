import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <p>MAIN PAGE</p>
        <p>
          <Link href="/subpage">GO TO SUB PAGE</Link>
        </p>
      </div>
    </main>
  );
}
