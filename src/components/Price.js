import React, { useState } from "react";
import styled from "styled-components";
import { price } from "../data/data";
import PriceBg from "../assets/img/price-bg.png";
const Price = () => {
  const [index, setIndex] = useState(0);
  const [objects, setObjects] = useState(price);

  const { id, title, btn, text } = objects[index];
  return (
    <PriceSec>
      <Container>
        <Header> НАШИ УСЛУГИ</Header>
        <Content>
          <AllBtn>
            {objects.map((item, index) => {
              return (
                <>
                  <BtnContainer key={item.id} onClick={() => setIndex(index)}>
                    <ImgDiv>
                      <Img src={item.img} />
                    </ImgDiv>
                    <Icon src={item.icon} />
                    <Btn>{item.btn}</Btn>
                  </BtnContainer>
                </>
              );
            })}
          </AllBtn>
          <Info>
            <Image src={PriceBg} />
            <Title>{title}</Title>
            {text.map((item, index) => {
              return <Text key={index}>{item}</Text>;
            })}
          </Info>
        </Content>
        <TextDiv>
          Для многих ремонт — это что-то вроде стихийного бедствия, но чем
          тщательнее вы его спланируете, тем проще будет его пережить. А уютная,
          привлекательная и чистая квартира – это мечта любого человека.
        </TextDiv>
      </Container>
    </PriceSec>
  );
};

export default Price;
const PriceSec = styled.section`
  background: #0a0a0a;
  min-height: 100vh;
  padding: 50px 0;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
const Header = styled.div`
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;
  position: relative;
  margin-bottom: 83px;
  :before {
    position: absolute;
    content: "";
    width: 300px;
    height: 3px;
    background: #ff7a00;
    bottom: -5px;
    left: 38%;
  }
`;
const Content = styled.div`
  /* display: grid;
  grid-template-columns: 386px 690px; */
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  grid-gap: 20px;
  margin-bottom: 75px;
  @media screen and (max-width: 1050px) {
    display: block;
  }
`;
const Btn = styled.button`
  font-size: 22px;
  line-height: 27px;
  color: #ffffff;
  letter-spacing: 0.05em;
  width: 155px;
  background: transparent;
  outline: none;
  border: none;
  transition: all 0.3s ease-in-out;
  z-index: 100;
`;
const ImgDiv = styled.div`
  /* position: relative; */
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background:rgba(0,0,0,0.7); */
    transition: all 0.4s ease-in-out;
  }
  :hover :before {
    background: rgba(0, 0, 0, 0.7);
  }
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;
const BtnContainer = styled.div`
  padding: 70px 115px;
  position: relative;
  cursor: pointer;
  text-align: center;
  margin-bottom: 20px;
  border: 2px solid #f17d11;

  transition: all 0.4s ease-in-out;
  &:last-child {
    margin-bottom: 0px;
    @media screen and (max-width: 1050px) {
      margin-bottom: 20px;
    }
  }
  :hover ${Btn} {
    color: #f17d11;
  }
  :hover ${Img} {
    background: rgba(0, 0, 0, 0.6);
  }
  @media screen and (max-width: 1050px) {
    padding: 30px 50px;
  }
`;

const AllBtn = styled.div`
  position: relative;
  @media screen and (max-width: 1050px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-bottom: 1rem;
  }
`;
const Info = styled.div`
  padding: 43px 33px 96px 143px;
  border: 2px solid #f17d11;
  position: relative;
  @media screen and (max-width: 630px) {
    padding: 23px 13px 66px 20px;
  }
`;
const Title = styled.div`
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: #f17d11;
  text-align: center;
  margin-bottom: 50px;
`;
const Text = styled.li`
  font-size: 18px;
  line-height: 40px;
  letter-spacing: 0.05em;
  /* margin-bottom: 16px; */
  color: #ffffff;
  white-space: nowrap;
  list-style-type: none;
  @media screen and (max-width: 490px) {
    white-space: pre-line;
    list-style-type: square;
  }
`;

const Icon = styled.img`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
const TextDiv = styled.div`
  font-size: 22px;
  line-height: 27px;
  text-align: justify;
  letter-spacing: 0.05em;
  color: #ffffff;
`;
