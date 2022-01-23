import Head from "next/head";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AboutContent from "../components/Content/About";
import Navbar from "../components/Navbar/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>👨‍💻 About Me</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Footer />
      <AboutContent />
    </>
  );
}
