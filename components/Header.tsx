import Link from "next/link"
import SmallLink from "./SmallLink";

import { GlobalContext } from "./utils/GlobalContext";
import { useContext } from "react";

function Header() {
  const { color } = useContext(GlobalContext);
  return (
    <div className="z-10 w-full max-w-5xl text-sm">
      <div className="text-right fixed left-0 top-0 flex w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-3 pt-4 lg:pb-4 lg:pt-5 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
        <div className="max-w-7xl mx-auto flex items-center grow">
          <Link href="/" className="ml-12 text-lg font-bold text-rainbow-animation hidden sm:block">Ted Programming Language</Link>
          <p className="ml-12 text-lg font-bold text-rainbow-animation sm:hidden">Ted Lang</p>
          <div className="grow"></div>
          <span className="mr-3"><SmallLink title="Docs" link="https://docs.ted-lang.org"/></span>
          <span className="mr-12"><SmallLink title="GitHub" link="https://github.com/ted-lang" out/></span>
          {/* <span className="mr-12"><a href="https://github.com/ted-lang" className="hover:text-blue-600 hover:dark:text-blue-600">GitHub{" "}<span className="inline-block"><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></span></a></span> */}
        </div>
      </div>
    </div>
  );
}
  
export default Header;
  