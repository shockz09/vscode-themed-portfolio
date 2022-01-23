import Head from "next/head";

import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>👨‍💻 Kira&apos;s Portfolio</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Footer />
      <Hero />
    </>
  );
}
