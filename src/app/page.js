import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <main>
        {/* Navbar */}
        <Navbar />
        {/* Sidebar + other pages with tool if needed */}
        <Sidebar />
        {/* Heresection */}
        <Hero/>
      </main>
    </>
  );
}
