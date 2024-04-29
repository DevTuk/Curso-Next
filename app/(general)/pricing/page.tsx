import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing Page",
  description: "SEO Title",
};

export default function PricingPage() {
  return (
    <>
      <span className="flex flex-col items-center p-14 text-6xl">
        Pricing Page
      </span>
    </>
  );
}
