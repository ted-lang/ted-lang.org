import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";

function TitleDescription() {
  const stringSplitter = (str: string): any => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(str);
  };
  return (
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
  );
}
  
export default TitleDescription;
  