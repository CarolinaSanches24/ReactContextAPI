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
            <Text style={{ color: color }}>Home</Text>
            <Text>Valor do contador:{count}</Text>
            <Text>Alterar o contexto</Text>
            {/* // 3 - Alterando o contexto */}
            <Stack spacing={4}>
                <Button onClick={() => setCounter(count + 1)}>Adicionar valor ao contador</Button>
                {/* 4 - Alterando contexto complexo  */}
                <Button onClick={() => setTitleColor("RED")}>Alterar a cor para Vermelho</Button>
                <Button onClick={() => setTitleColor("BLUE")}>Alterar a cor para Azul</Button>
            </Stack>
        </Box>
    );
};

export default Home;