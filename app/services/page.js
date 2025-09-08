// app/services/page.js
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <Services />
      </main>
      <Footer />
    </>
  );
}
