// app/tech/page.js
import Footer from "../components/Footer";
import Tech from "../components/Tech";

export default function TechPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <Tech />
      </main>
      <Footer />
    </>
  );
}
