// app/projects/page.js
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectsClient from "../components/ProjectsClient";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-900 text-white p-8">
        <ProjectsClient />
      </main>
      <Footer />
    </>
  );
}
