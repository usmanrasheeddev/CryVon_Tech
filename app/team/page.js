// app/team/page.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import Team from "../components/Team";

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <Team />
      </main>
      <Footer />
    </>
  );
}
