import React, { useState } from 'react';
import styled from 'styled-components';

const HamburgerIcon = styled.div`
  cursor: pointer;
`;

const MenuContainer = styled.div`
  position: fixed;
  top: ${props => (props.isOpen ? '100vh' : '0')}; /* Controla la posición desde arriba */
  right: 0;
  height: auto;
  width: 50vw;
  background-color: #ffffff;
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.1); /* Opcional: Agrega sombra */
  transition: top 0.3s ease-in-out; /* Aplica transición en la propiedad 'top' */
`;

const MenuList = styled.ul`
  list-style-type: none;
  padding: 20px;
`;

const MenuItem = styled.li`
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerIcon onClick={toggleMenu}>
      <span class="material-symbols-outlined">menu</span>
      </HamburgerIcon>
      <MenuContainer isOpen={isOpen}>
        <MenuList>
          <MenuItem>Item 1</MenuItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
        </MenuList>
      </MenuContainer>
    </>
  );
};

export default HamburgerMenu;
