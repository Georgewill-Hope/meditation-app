import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface globalContextType {
  duration: number;
  setDuration: Dispatch<SetStateAction<number>>;
}

const globalContext = createContext<globalContextType>({
  duration: 10,
  setDuration: () => {},
});

export const useGlobalContext = () => useContext(globalContext);

const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [duration, setDuration] = useState(10);
  return (
    <globalContext.Provider value={{ duration, setDuration }}>
      {children}
    </globalContext.Provider>
  );
};

export default GlobalContextProvider;
