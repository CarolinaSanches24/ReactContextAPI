import { Box, Button, Flex, Stack } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <Box as="nav" bg="teal.500" p={4}>
      <Flex justify="space-between" align="center">
        <Stack direction="row" spacing={8}>
          <Button
            variant="link"
            as={NavLink}
            to="/"
            color="white"
            _hover={{ textDecoration: 'underline' }}
            _active={{ color: 'teal.200' }}
          >
            Home
          </Button>
          <Button
            variant="link"
            as={NavLink}
            to="/about"
            color="white"
            _hover={{ textDecoration: 'underline' }}
            _active={{ color: 'teal.200' }}
          >
            Sobre
          </Button>
          <Button
            variant="link"
            as={NavLink}
            to="/products"
            color="white"
            _hover={{ textDecoration: 'underline' }}
            _active={{ color: 'teal.200' }}
          >
            Produtos
          </Button>
        </Stack>
      </Flex>

    </Box>
  );
};

export default NavBar;