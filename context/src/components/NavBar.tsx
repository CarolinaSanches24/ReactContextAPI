import { Box } from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';
const NavBar = () => {
  return (
    <Box as="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>
      <NavLink to="/products">Produtos</NavLink>
    </Box>
  );
};

export default NavBar;