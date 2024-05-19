import { Navbar } from "@/components";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="p-24 min-h-screen flex flex-col items-center">
        <span className="text-lg">Hola mundo en secciones públicas.</span>
        {children}
      </main>
    </>
  );
}
