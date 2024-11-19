import {useContext}  from 'react';
import {CounterContext} from "../context/CounterContext";

export const useContextCounter = () =>{
      // Acessando o contexto
  const context = useContext(CounterContext);

  if (!context) {
   throw new Error("Contexto não encontrado");
 }

 return context;
}