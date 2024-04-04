import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 25%;
    height: 70%;
    margin: 0 auto;
    background-color: #F8FBFE;
    border-radius: 8px;
    z-index: 1;

`

const Tools = styled.div`
  display: flex;
  align-items: center;
  padding: 9px;
`;

const Circle = styled.div`
  padding: 0 4px;
`;

const Box = styled.div`
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
  ${({ color }) => color && `background-color: ${color};`}
`;

const RedBox = styled(Box)`
  background-color: #ff605c;
`;

const YellowBox = styled(Box)`
  background-color: #ffbd44;
`;

const GreenBox = styled(Box)`
  background-color: #00ca4e;
`;

const CardSafari = () => {
  return (
    <Card>
      <Tools>
        <Circle>
          <RedBox />
        </Circle>
        <Circle>
          <YellowBox />
        </Circle>
        <Circle>
          <GreenBox />
        </Circle>
      </Tools>
      {/* Otro contenido dentro del componente Card */}
    </Card>
  )
}

export default CardSafari