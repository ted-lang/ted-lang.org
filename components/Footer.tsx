import Link from "next/link"
import SmallLink from "./SmallLink";

function Footer() {
  return (
    <div className="z-10 w-full text-sm items-center text-center pt-12">
      <div className="bottom-0 left-0 right-0 flex w-hull pt-6 pb-12 bg-gray-300 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto items-center">
          <p className="text-lg font-bold">Ted Programming Language</p>
          <p className="mt-3">&copy; 2023 <SmallLink title="Wuqiong Zhao" link="https://wqzhao.org" underline/> (<SmallLink title="Teddy van Jerry" link="https://github.com/Teddy-van-Jerry" underline/>)</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
