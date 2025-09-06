// app/services/page.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <Services />
      </main>
      <Footer />
    </>
  );
}
