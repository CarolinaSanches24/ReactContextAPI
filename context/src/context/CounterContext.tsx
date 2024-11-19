// 1 - Criar contexto
import {createContext , useState} from 'react';

interface CounterContextType {
    count: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
  }
 const CounterContext = createContext<CounterContextType | undefined>(undefined);

 export default CounterContext;

// 2 - Criar provider

interface CounterProviderProps{
    children: React.ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps>= ({children}) => {
    const [count, setCounter] =  useState<number>(0);

    return(
        <CounterContext.Provider value={{count, setCounter}}>
            {children}
        </CounterContext.Provider>
    );
};

