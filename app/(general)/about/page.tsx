import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "This is the description of the main page.",
  keywords: ["nextjs", "about", "about muerto company"],
};
export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About.</span>
    </>
  );
}
