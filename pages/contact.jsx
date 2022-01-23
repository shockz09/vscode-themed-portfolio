import Head from "next/head";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ContactContent from "../components/Content/Contact";
import Navbar from "../components/Navbar/Navbar";

export default function Contact() {
  return (
    <>
      <Head>
        <title>👨‍💻 Contact Me</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Footer />
      <ContactContent />
    </>
  );
}
