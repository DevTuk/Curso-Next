import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Page",
  description: "SEO Title",
};

export default function AboutPage() {
  return (
    <>
      <span className="flex flex-col items-center p-14 text-6xl">
        About Page
      </span>
    </>
  );
}
