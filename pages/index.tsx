import { GetStaticProps } from "next";
import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: Partial<PageInfo>;
};

export default function Home({ pageInfo }: Props) {
  return (
    <div
      className="bg-[rgb(36,36,36)] h-screen text-white p-1 overflow-y-scroll overflow-x-hidden
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 snap-y snap-mandatory z-0"
    >
      <Head>
        <title>Abdullah Mansoor - Full Stack Developer</title>
      </Head>

      {/* hEADER */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = () => {
  const pageInfo: Partial<PageInfo> = fetchPageInfoLocal();

  return {
    props: {
      pageInfo,
    },
    revalidate: 10,
  };
};

function fetchPageInfoLocal(): Partial<PageInfo> {
  return {
    _type: "pageInfo",
    name: "Abdullah Mansoor",
    role: "Full Stack Developer",
    address: "403/C, Kandawala Mawatha, Ratmalana",
    backgroundInformation: `I'm Abdullah. You might also know me as Abu! I'll be your coach & mentor through my medium 
      profile, here's a little bit more about me... I've been coding for 5+ years now. As a 
      Full Stack Developer I've worked both with startups and large corporate companies to help 
      build & scale their applications. Along the journey I realised my passion existed in 
      helping others excel and pursue their dreams as upcoming developers. Through live coaching 
      sessions on YouTube and writing articled on Medium, I have accumulated several THOUSAND 
      views demostrating how to apply developer skills in a range of cool builds and challanges. 
      I deliver REAL VALUE by working for my company and teaching REAL WORLD projects to help 
      students enter the world of web development. You will get a classic, super exiting product 
      with well architectured code base from me. And you'll get hands-on experience and learn 
      the skills that are required to succeed in the real-world, if you travel with me. And if 
      that's not enough I have cloned most of the applications you have used in your life!`,
    email: "abdullahse001@gmail.com",
    heroImage:
      "https://cdn.sanity.io/images/1z9bey8t/production/9419d217cfb636158c059b24ee4b2f25e22797ad-960x946.jpg",
    phoneNumber: "+9471 999 4818",
    profilePic:
      "https://cdn.sanity.io/images/1z9bey8t/production/d328af411e5ee383693823b61868ecfa287c7806-420x420.jpg",
  };
}
