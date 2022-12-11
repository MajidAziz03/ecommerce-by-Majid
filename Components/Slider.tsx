import { ArrowLeftOutlined, ArrowRightOutlined, Directions } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props. slideNumber * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;


const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;


const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0)

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideNumber(slideNumber > 0 ? slideNumber - 1 : 2)
    }
    else {
      setSlideNumber(slideNumber < 2 ? slideNumber + 1 : 0)
    }
  }



  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined onClick={() => handleClick("left")} />
      </Arrow>
      <Wrapper slideNumber={slideNumber}>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src='/img/ad1.png' />
          </ImgContainer>
          <InfoContainer>
            <Title> Summer Sale </Title>
            <Desc> DON'T COMPROMISE ON QUALITY FLAT 30% OFF ON ALL PRODUCTS </Desc>
            <Button variant='contained' color='primary' size='sm' > Shop Now!</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fcf1ed">
          <ImgContainer>
            <Image src='/img/ad2.png' />
          </ImgContainer>
          <InfoContainer>
            <Title> Winter Sale </Title>
            <Desc> DON'T COMPROMISE ON QUALITY FLAT 30% OFF ON ALL PRODUCTS </Desc>
            <Button variant='contained' color='primary' size='sm' > Shop Now!</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="f5fafd">
          <ImgContainer>
            <Image src='/img/ad3.png' />
          </ImgContainer>
          <InfoContainer>
            <Title> Popular Sale </Title>
            <Desc> DON'T COMPROMISE ON QUALITY FLAT 30% OFF ON ALL PRODUCTS </Desc>
            <Button> Shop Now!</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined onClick={() => handleClick("right")} />
      </Arrow>
    </Container>
  )
}

export default Slider