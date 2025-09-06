// app/contact/page.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
