import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PrimaryButton from '../Components/PrimaryButton';


const HeaderDiv = styled.div`
  position: fixed;
  height: 8rem;
  width: 100vw;
  z-index: 10000; 
`;


const Header = styled.div`
  border-bottom: 1px solid rgb(223, 221, 221);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.35);
  left: 50%; /* Posiciona el div en el centro horizontal */
  transform: translate(-50%, -50%); /* Centra el div exactamente */
  position: fixed;
  top: 4rem; 
  margin-left: 2rem;
  margin-right: 2rem;
  width: 65vw; 
  height: 5.5rem;
  z-index: 10000; 
  border-radius: 5rem;
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(15px);
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 145px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0px;
`;

const LogoImg = styled.img`
  max-width: 100%;
  height: 5rem;
`;

const LogoText = styled.h1`
  color: var(--blue);
  margin-bottom: 0px;
`;

const LoginContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

const LoginText = styled.p`
  width: 75%;
  margin-right: 1rem;
`;



const HeaderBar = () => {
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate('/signup');
  };
  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <HeaderDiv >
          <Header>
      <HeaderContainer>
        <LogoContainer>
          <LogoImg src="https://firebasestorage.googleapis.com/v0/b/saving-expenses-tracker.appspot.com/o/logos%2Foutput-onlinepngtools%20(1).png?alt=media&token=3cc14b4a-0b1f-4fd8-8bd1-b54a2861b3ef" alt="walleton logo, a pig" />
          <LogoText>Saul AI</LogoText>
        </LogoContainer>
        <LoginContainer>
          <LoginText onClick={navigateToLogin}>Iniciar sesión</LoginText>
          <PrimaryButton onClick={navigateToSignup} text="Empezar"/>
        </LoginContainer>
      </HeaderContainer>
    </Header>
    </HeaderDiv>
  );
};

export default HeaderBar;
