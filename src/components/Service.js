import React from "react";
import styled from "styled-components";
import { service } from "../data/data";
import Img from "../assets/img/service-bg.png";
const Service = () => {
  return (
    <ServiceSec id="service">
      <Image src={Img} />
      <Container>
        <Header>КАК МЫ РАБОТАЕМ</Header>
        <Content>
          <Item>
            {service.map((item) => {
              const { id, number, text } = item;
              return (
                <SingleItem key={id}>
                  <Number>{number}</Number>
                  <Text>{text}</Text>
                </SingleItem>
              );
            })}
          </Item>
        </Content>
      </Container>
    </ServiceSec>
  );
};

export default Service;
const ServiceSec = styled.section`
  background: #0a0a0a;
  padding: 60px 0;
  position: relative;
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
    height: 100%;
    z-index: 3;
  }
`;
const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
const Header = styled.div`
  margin-bottom: 55px;
  white-space: nowrap;
  z-index: 4;
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  position: relative;
  :before {
    content: "";
    position: absolute;
    width: 203px;
    height: 3px;
    background: #ff7a00;
    top: 50%;
    left: 0;
    @media screen and (max-width: 747px) {
      display: none;
    }
  }
  :after {
    content: "";
    position: absolute;
    width: 203px;
    height: 3px;
    background: #ff7a00;
    top: 50%;
    right: 0;
    @media screen and (max-width: 747px) {
      display: none;
    }
  }
`;
const Content = styled.div`
  z-index: 10;
  text-align: center;
`;
const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  margin: 0 auto;
  z-index: 10;
  color: #fff;
  @media screen and (max-width: 440px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
const SingleItem = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  text-align: left;
  margin: 45px 0;
  @media screen and (max-width: 440px) {
    display: block;
    text-align: center;
    padding: 0 15px;
  }
`;
const Number = styled.div`
  font-size: 60px;
  line-height: 73px;
  letter-spacing: 0.05em;
  color: rgba(255, 122, 0, 0.5);
  margin-right: 20px;
  @media screen and (max-width: 440px) {
    margin-right: 0px;
  }
`;
const Text = styled.div`
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-align: left;
  @media screen and (max-width: 440px) {
    text-align: center;
    word-wrap: wrap;
    white-space: wrap;
  }
`;
