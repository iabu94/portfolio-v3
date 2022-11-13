import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: Partial<PageInfo>;
};

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      `Guy-who-loves-coffee.ts`,
      `<ButLovesToCodeMore />`,
    ],
    loop: true,
    delaySpeed: 1500,
    deleteSpeed: 20,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <img
        className="relative rounded-full h-32 w-32 mx-auto"
        src={pageInfo.profilePic}
        alt={pageInfo?.name}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="">
          <Link href="#about">
            <button className="hero-button">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero-button">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero-button">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
