import { GetStaticProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { PageInfo } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";

type Props = {
  pageInfo: PageInfo;
};

export default function Home({ pageInfo }: Props) {
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

      {/* Hero */}
      <section id="hero">
        <Hero pageInfo={pageInfo} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo,
    },
    revalidate: 10,
  };
};
