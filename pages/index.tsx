import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import RaiseLink from "@component/components/raise-link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const stringSplitter = (str: string): any => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(str);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center px-12 pb-12 ${inter.className} max-w-7xl mx-auto`}
    >
      <Head>
        <title>Ted Programming Language</title>
        <meta name="description" content="Ted is a general purpose programming language with simple syntax but rich features about teddy bears." />
        <meta property="og:title" content="Ted Programming Language" />
        <meta property="og:description" content="General purpose programming language about teddy bears." />
      </Head>
      <div className="z-10 w-full max-w-5xl text-sm">
        <div className="text-right fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-4 lg:pb-4 lg:pt-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          <div className="max-w-7xl mx-auto flex items-center grow">
            <p className="ml-12 text-lg font-bold text-rainbow-animation hidden sm:block">Ted Programming Language</p>
            <p className="ml-12 text-lg font-bold text-rainbow-animation sm:hidden">Ted Lang</p>
            <div className="grow"></div>
            <span className="mr-3"><a href="https://docs.ted-lang.org" className="hover:text-blue-600 hover:dark:text-blue-600">Docs</a></span>
            <span className="mr-12"><a href="https://github.com/ted-lang" className="hover:text-blue-600 hover:dark:text-blue-600">GitHub{" "}<span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span></a></span>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen items-center justify-between flex-col">
        <p></p>
        <div className="relative place-items-center">
          <div className="text-2xl xs:text-1xl lg:text-4xl text-center font-mono mt-20 opacity-90">
            <Typewriter
              options={{
                loop: true,
                stringSplitter
              }}
              onInit={(typewriter)=> {
              typewriter
                .typeString("Featuring Teddy Bears")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Super Simple Syntax")
                .pauseFor(1000)
                .deleteAll()
                .typeString("🧸->say(\"Hello World!\")")
                .pauseFor(1000)
                .start();
              }}
            />
          </div>
          <h1
            className={`text-4xl xs:text-1xl lg:text-6xl font-semibold text-center my-6`}
          >
            <span className="font-bold text-rainbow-animation">Ted</span>{" "}
            <span className="opacity-70">Programming Language</span>
          </h1>
          <p className="text-center lg:text-lg opacity-50">
            <strong>Ted</strong> is a general purpose programming language with simple syntax but rich features about <strong>teddy bears</strong>.
          </p>
        </div>

        <div className="mb-32 grid text-center lg:mb-0 md:grid-cols-2 lg:grid-cols-4 lg:text-left">
          <a
            href="https://docs.ted-lang.org"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Ted language features.
            </p>
          </a>

          <a
            href="https://github.com/ted-lang"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Download{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Download Ted compiler and other tools for your desktop.
            </p>
          </a>

          <a
            href="https://github.com/ted-lang"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contribute{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Contribute to Ted Programming Language on GitHub!
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Discuss{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Share your valuable ideas about Ted on GitHub Discussions.
            </p>
          </a>
        </div>

        <div className="text-center">
        <div ><RaiseLink title="Discover More" link="#more" style="text-2xl font-semibold pb-10 pt-10 px-5"/></div>
          <div className="flex justify-center mb-20" style={{zIndex: -1, position: 'relative'}}>
            <div className="arrowSliding">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      </div>

      <div id="more">
        <h2 className="text-center text-4xl mt-12 mb-5 font-semibold">Why Ted?</h2>
        <div className="text-center">
          More contents to be added ...
        </div>
      </div>

    </main>
  );
}
