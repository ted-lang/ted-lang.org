import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@component/components/Header";
import TitleDescription from "@component/components/TitleDescription";
import BlockLinks from "@component/components/BlockLinks";
import DiscoverMore from "@component/components/DiscoverMore";
import Footer from "@component/components/Footer";
import { GlobalProvider } from "@component/components/utils/GlobalContext";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  return <GlobalProvider>
    <main>
      <Head>
        <title>Ted Programming Language </title>
        <meta
          name="description"
          content="Ted is a general purpose programming language with simple syntax but rich features about teddy bears."
        />
        <meta property="og:title" content="Ted Programming Language" />
        <meta
          property="og:description"
          content="General purpose programming language about teddy bears."
        />
      </Head>
      <div
        className={`flex min-h-screen flex-col items-center ${inter.className} px-12 max-w-7xl mx-auto`}
      >
        <Header />
        <div className="flex min-h-screen items-center justify-between flex-col">
          <p></p>
          <TitleDescription />
          <BlockLinks />
          <DiscoverMore />
        </div>

        <div id="more">
          <h2 className="text-center text-4xl mt-12 mb-5 font-semibold">
            Why Ted?
          </h2>
          <div className="text-center">More contents to be added ...</div>
        </div>
      </div>

      <Footer />
    </main>
  </GlobalProvider>;
}
