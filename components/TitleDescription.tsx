import Typewriter from "typewriter-effect";
import GraphemeSplitter from "grapheme-splitter";
import { useCallback, useContext } from "react";
import { GlobalContext } from "./utils/GlobalContext";

function TitleDescription() {
  const stringSplitter = (str: string): any => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(str);
  };
  const { typeNumber, setTypeNumber } = useContext(GlobalContext);
  const enterTed = useCallback(
    (index: number) => () => {
      setTypeNumber(index);
    },
    [setTypeNumber]
  );

  return (
    <div className="relative place-items-center">
      <div className="text-2xl xs:text-1xl lg:text-4xl text-center font-mono mt-20 opacity-90">
        {typeNumber === 0 ? (
          <Typewriter
            options={{
              loop: true,
              stringSplitter,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('🧸->say("Hello World!")')
                .pauseFor(1000)
                .deleteChars(19)
                .pauseFor(200)
                .typeString('yell("Error!")')
                .pauseFor(1000)
                .deleteAll()
                .typeString('🧸<-skills(math)')
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
          />
        ) : null}
        {typeNumber === 1 ? (
          <Typewriter
            options={{
              loop: false,
              delay: 120,
              stringSplitter,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Teddy Bear Themed")
                .start();
            }}
          />
        ) : null}
        {typeNumber === 2 ? (
          <Typewriter
            options={{
              loop: false,
              delay: 120,
              stringSplitter,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Excellent Performance")
                .start();
            }}
          />
        ) : null}
        {typeNumber === 3 ? (
          <Typewriter
            options={{
              loop: false,
              delay: 120,
              stringSplitter,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString('Designed for Simplicity')
                .pauseFor(1000)
                .start();
            }}
          />
        ) : null}
      </div>
      <h1
        className={`text-4xl xs:text-1xl lg:text-6xl font-semibold text-center my-6`}
      >
        <span
          className={typeNumber==1?"font-bold text-rainbow-animation-slow":"font-bold "}
          onMouseEnter={enterTed(1)}
        >
          T
        </span>
        <span
          className={typeNumber==2?"font-bold text-rainbow-animation-slow":"font-bold "}
          onMouseEnter={enterTed(2)}
        >
          E
        </span>
        <span
          className={typeNumber==3?"font-bold text-rainbow-animation-slow":"font-bold "}
          onMouseEnter={enterTed(3)}
        >
          D
        </span>{" "}
        <span className="opacity-70 font-normal">Programming Language</span>
      </h1>
      <p className="text-center lg:text-lg opacity-50">
        <strong>Ted</strong> is a general purpose programming language with
        simple syntax but rich features about <strong>teddy bears</strong>.
      </p>
    </div>
  );
}

export default TitleDescription;
