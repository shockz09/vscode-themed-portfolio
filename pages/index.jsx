import Head from "next/head";

import Sidebar from "../components/sidebar/Sidebar.component";
import Footer from "../components/footer/Footer.component";
import Hero from "../components/hero/Hero.component";
import Navbar from "../components/navbar/Navbar.component";

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
