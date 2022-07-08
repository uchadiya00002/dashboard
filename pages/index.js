import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/UI/Navbar";
import SideSection from "../components/UI/SideSection";
import signup from "./signup";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Erp Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SideSection />
      </main>
    </div>
  );
}
