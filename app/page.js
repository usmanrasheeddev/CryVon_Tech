// app/page.js
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-slate-900 text-white">
        <Hero />
      </main>
      <Footer />
    </>
  );
}
