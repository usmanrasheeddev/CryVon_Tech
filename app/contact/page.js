// app/contact/page.js
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
