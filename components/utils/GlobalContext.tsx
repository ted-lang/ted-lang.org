import React, { createContext, memo, useState, useMemo } from "react";

interface Global {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setTypeNumber: React.Dispatch<React.SetStateAction<number>>;
  typeNumber: number;
}

export const useMemoObject = <T extends Readonly<Record<string | number, any>>>(
  obj: T
): Readonly<T> => useMemo(() => obj, Object.values(obj));

export const GlobalContext = createContext<Readonly<Global>>({} as Global);

export const GlobalProvider = memo(({ children }: any) => {
  const [color, setColor] = useState("#000000");
  const [typeNumber, setTypeNumber] = useState(0);

  const globalValue = useMemoObject<Global>({
    setColor,
    color,
    setTypeNumber,
    typeNumber,
  });

  return (
    <GlobalContext.Provider value={globalValue}>
      {children}
    </GlobalContext.Provider>
  );
});

export default GlobalProvider;
GlobalProvider.displayName = "GlobalProvider";
