// app/page.js
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="bg-slate-900 text-white">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
