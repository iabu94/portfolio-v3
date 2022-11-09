import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div
      className="bg-[rgb(36,36,36)] h-screen text-white p-1 overflow-y-scroll overflow-x-hidden
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Abdullah Mansoor - Full Stack Developer</title>
      </Head>

      {/* hEADER */}
      <Header />
    </div>
  );
}
