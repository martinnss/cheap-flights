import React from 'react';
import styled from 'styled-components';

// Define the styled button outside the component function
const StyledButton = styled.button`
  width: 15rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: 600;
  
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.203),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;

  &.primary-button {
    background-color: var(--blue);
    background-image: linear-gradient(315deg, var(--blue)0%, var(--blue) 74%);
    border: none;
    z-index: 1;
  }
  &.primary-button:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #958fe2;
    background-image: linear-gradient(315deg, #958fe2 0%, #4c41e4 74%);
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    top: 0;
    height: 100%;
  }
  &:active {
    top: 2px;
  }
`;

const PrimaryButton = () => {
  return (
    <StyledButton className="custom-btn primary-button">Pruébalo Gratis</StyledButton>
  );
};

export default PrimaryButton;