import {useContext}  from 'react';
import {CounterContext} from "../context/CounterContext";
import { Box, Text } from '@chakra-ui/react';

const Home = () =>{
    
    // Acessando o contexto
  const context = useContext(CounterContext);

   // Verificando se o contexto existe (não é undefined)
   if (!context) {
    throw new Error("CounterContext deve ser usado dentro de um CounterContextProvider");
  }
   // Desestruturando as propriedades do contexto
   const {count} = context;

    return (
        <Box>
            <Text>Home</Text>
            <Text>Valor do contador:{count}</Text>
        </Box>
    );
};

export default Home;