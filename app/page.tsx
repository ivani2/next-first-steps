import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center p-24 min-h-screen">
      <span className="text-5xl">MUERT.</span>
      <a href="/about">
        <span>{1 + 1 + 1} </span>
      </a>
    </main>
  );
}
