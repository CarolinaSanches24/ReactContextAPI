import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { useContextCounter } from "../hooks/useContextCounter";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {

    // Chamada ao hook
    const { count, setCounter } = useContextCounter();

    //Contexto complexo
    const { color, dispatch } = useTitleColorContext();
    console.log(color);

    //Alterando contexto complexo
    const setTitleColor = (color: 'RED' | 'GREEN' | 'BLUE') => {
        dispatch({ type: color });
    };

    return (
        <Box>
            <Text style={{ color: color }} marginTop={4} marginBottom={4}>Home</Text>
            <Text marginBottom={4}>Valor do contador:{count}</Text>
            <Text marginBottom={4}>Alterar o contexto</Text>
            {/* // 3 - Alterando o contexto */}
            <Stack spacing={4} align="center">
                <Button width="20%" onClick={() => setCounter(count + 1)}>Adicionar valor ao contador</Button>
                {/* 4 - Alterando contexto complexo  */}
                <Button width="20%" onClick={() => setTitleColor("RED")}>Alterar a cor para Vermelho</Button>
                <Button width="20%" onClick={() => setTitleColor("BLUE")}>Alterar a cor para Azul</Button>
            </Stack>
        </Box>
    );
};

export default Home;