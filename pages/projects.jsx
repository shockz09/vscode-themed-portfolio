import Head from "next/head";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ProjectsContent from "../components/Content/Projects";
import Navbar from "../components/Navbar/Navbar";

export default function Projects() {
  return (
    <>
      <Head>
        <title>👨‍💻 Projects</title>
      </Head>
      <Navbar />
      <ProjectsContent />
      <Sidebar />
      <Footer />
    </>
  );
}
