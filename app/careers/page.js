// app/careers/page.js
import Footer from "../components/Footer";
import Careers from "../components/Careers";

export default function CareersPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <Careers />
      </main>
      <Footer />
    </>
  );
}
