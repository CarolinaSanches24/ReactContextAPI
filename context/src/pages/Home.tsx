import { Box, Button, Text } from '@chakra-ui/react';
import {useContextCounter} from "../hooks/useContextCounter";

const Home = () =>{

   // Chamada ao hook
   const {count, setCounter} = useContextCounter();

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