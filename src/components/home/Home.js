import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
const Home = () => {
  return (
    <HomeSec>
      <Container>
        <Content>
          <Info>
            <Title>
              Строительство <br /> и ремонт в Гомеле
            </Title>
            <Text>
              Надежное будущее строим <br /> вместе{" "}
            </Text>
            <Button>Получить консультацию </Button>
          </Info>
          <SwiperDiv>
            <Slider />
          </SwiperDiv>
        </Content>
      </Container>
    </HomeSec>
  );
};

export default Home;
const HomeSec = styled.div`
  background: #0a0a0a;
  min-height: 100vh;
  color: #fff;
  padding: 50px 0;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    display: block;
    text-align: center;
  }
`;
const Info = styled.div`
  margin-bottom: 1rem;
`;
const Title = styled.div`
  font-size: 60px;
  font-size: clamp(2rem, 6vw, 4rem);
  margin: 72px 0;
  white-space: nowrap;
  line-height: 70px;
  color: #ffffff;
`;
const Text = styled.div`
  font-size: 22px;
  line-height: 27px;
  color: #ffffff;
  margin-bottom: 85px;
  white-space: nowrap;
`;
const Button = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
  transform: matrix(1, 0, 0, 1, 0, 0);
  background: #1c1d1e;
  border: 3px solid #ff7a00;
  box-sizing: border-box;
  border-radius: 10px;
  white-space: nowrap;
  padding: 7px 35px;
  cursor: pointer;
`;
const SwiperDiv = styled.div`
  margin-left: 90px;
  margin-right: 30px;
  @media screen and (max-width: 900px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;
