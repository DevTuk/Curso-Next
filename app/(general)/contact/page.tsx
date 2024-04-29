import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Page",
  description: "SEO Title",
};

export default function ContactPage() {
  return (
    <>
      <span className="flex flex-col items-center p-14 text-6xl">
        Contact Page
      </span>
    </>
  );
}
