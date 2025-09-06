// app/tech/page.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tech from "../components/Tech";

export default function TechPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <Tech />
      </main>
      <Footer />
    </>
  );
}
