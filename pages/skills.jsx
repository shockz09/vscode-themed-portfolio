import Head from "next/head";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import SkillContent from "../components/Content/Skills";
import Navbar from "../components/Navbar/Navbar";

export default function Skills() {
  return (
    <>
      <Head>
        <title>👨‍💻 Skills</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Footer />
      <SkillContent />
    </>
  );
}
