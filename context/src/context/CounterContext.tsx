// 1 - Criar contexto
import {createContext , useState} from 'react';

interface CounterContextType {
    count: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
  }
 export const CounterContext = createContext<CounterContextType | undefined>(undefined);



// 2 - Criar provider

interface CounterProviderProps{
    children: React.ReactNode;
}

export const CounterContextProvider: React.FC<CounterProviderProps>= ({children}) => {
    const [count, setCounter] =  useState<number>(0);

    return(
        <CounterContext.Provider value={{count, setCounter}}>
            {children}
        </CounterContext.Provider>
    );
};

