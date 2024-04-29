import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-14">
      <span className="text-3xl">Hola Mundo</span>
      <Link href={"/about"}> Main About</Link>
    </main>
  );
}
