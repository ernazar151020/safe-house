import React from "react";
import styled from "styled-components";
import { galery } from "../data/data";
const Galery = () => {
  return (
    <GallerySec id="galery">
      <Container>
        <Header>ГАЛЕРЕЯ РАБОТ</Header>
        <Content>
          {galery.map((item) => {
            const { id, title, img } = item;
            return (
              <SingleEl key={id}>
                <Img src={img} />
                <TitleWrap>
                  <Title>{title}</Title>
                </TitleWrap>
              </SingleEl>
            );
          })}
        </Content>
      </Container>
    </GallerySec>
  );
};

export default Galery;
const GallerySec = styled.section`
  min-height: 100vh;
  background: #0a0a0a;
  padding: 183px 0;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;
const Header = styled.div`
  margin-bottom: 35px;
  white-space: nowrap;
  z-index: 4;
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  position: relative;
  margin-bottom: 93px;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 40px;
  @media screen and (max-width: 810px) {
    text-align: center;
    display: block;
  }
`;
const SingleEl = styled.div`
  position: relative;
  z-index: 10;
  cursor: pointer;
  @media screen and (max-width: 810px) {
    /* width: 100%; */
    margin-bottom: 2rem;
  }
  :before {
    content: "";
    position: absolute;
    width: 90%;
    height: 100%;
    bottom: -24px;
    right: 2%;
    z-index: -10;
    border: 3px solid #ff7a00;
    box-sizing: border-box;
    border-radius: 10px;
  }
`;
const TitleWrap = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  color: red;
`;
const Title = styled.div`
  position: absolute;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.05em;
  /* left: 30%; */
  text-align: center;
  padding: 20px 0;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  color: #ffffff;
`;
const Img = styled.img`
  width: 90%;
  height: 100%;
`;
