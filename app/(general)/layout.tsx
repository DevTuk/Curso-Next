import { NavBar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <main>
        <span className="flex flex-col items-center p-12 text-4xl">Hello</span>
        {children}
      </main>
    </>
  );
}
