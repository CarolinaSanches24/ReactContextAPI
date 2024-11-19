import {useContext}  from 'react';
import {CounterContext} from "../context/CounterContext";
import { Box, Button, Text } from '@chakra-ui/react';

const Home = () =>{

    // Acessando o contexto
  const context = useContext(CounterContext);

   // Verificando se o contexto existe (não é undefined)
   if (!context) {
    throw new Error("CounterContext deve ser usado dentro de um CounterContextProvider");
  }
   // Desestruturando as propriedades do contexto
   const {count, setCounter} = context;

    return (
        <Box>
            <Text>Home</Text>
            <Text>Valor do contador:{count}</Text>
            <Text>Alterar o contexto</Text>
            {/* // 3 - Alterando o contexto */}
            <Button onClick={()=> setCounter(count +1)}>Adicionar valor ao contador</Button>
        </Box>
    );
};

export default Home;