import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing page",
  keywords: ["pricing", "pricing page"],
};
export default function PricingPage() {
  return (
    <>
      <span className="text-7xl">Pricing.</span>
    </>
  );
}
