import React from "react";
import styled from "styled-components";
import Image from "../assets/img/About-bg.png";
const About = () => {
  return (
    <AboutSec>
      <Img src={Image} />
      <Container>
        <Content>
          <Info>
            <Header>О НАС</Header>
            <Lists>
              <List>Качественное проведение работ</List>
              <List>Обсуждение работы на каждом этапе</List>
              <List>Профессиональный инструмент</List>
              <List>Начинаем работу без аванса</List>
              <List>Доступные цены</List>
            </Lists>
          </Info>
          <Info2>
            <InfoContent>
              <Title>более</Title>
              <Number>15</Number>
              <Text>лет успешной работы</Text>
            </InfoContent>
          </Info2>
        </Content>
      </Container>
    </AboutSec>
  );
};

export default About;
const AboutSec = styled.section`
  /* min-height: 100vh; */
  position: relative;
  background: #0a0a0a;
  min-height: 100vh;
  padding: 60px 0 60px;
  :before {
    content: "";
    position: absolute;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 120%;
    z-index: 3;
  }
`;
const Img = styled.img`
  object-fit: cover;
  position: absolute;
  top: 15%;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
const Content = styled.div`
  z-index: 100;
  display: flex;
  justify-content: space-around;
  margin-top: 3rem;
  align-items: center;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    /* text-align: center; */
  }
`;
const Info = styled.div`
  z-index: 100;
`;
const Info2 = styled.div`
  z-index: 100;
  margin-top: 2rem;
`;
const InfoContent = styled.div`
  width: 320px;
  position: relative;
  height: 320px;
  border: 3px solid #ff7a00;
  border-radius: 50%;
  @media screen and (max-width: 400px) {
    width: 300px;
    height: 300px;
  }
`;
const Header = styled.div`
  z-index: 10;
  font-size: 70px;
  line-height: 85px;
  letter-spacing: 0.05em;
  color: #ff7a00;
  margin-bottom: 3rem;
`;

const Lists = styled.div``;
const List = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding-bottom: 13px;
  border-bottom: 2px solid #ff7d05;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: #ffffff;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 10%;
`;
const Number = styled.div`
  font-weight: bold;
  font-size: 100px;
  line-height: 122px;
  letter-spacing: 0.05em;
  color: #ff7a00;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;
const Text = styled.div`
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: #ffffff;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 10%;
  white-space: nowrap;
`;
