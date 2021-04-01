import React from "react";
import styled from "styled-components";
import Phone from "../assets/img/phone-icon.png";
import Document from "../assets/img/document-icon.png";
const Footer = () => {
  return (
    <FooterSec>
      <Container>
        <Content>
          <Item>
            <Tel>
              <Img src={Phone} />+ 375-29-123-45-67
            </Tel>
            <Tel>
              <Img src={Document} />
              stroyka@gmail.com
            </Tel>
          </Item>
          <Item>
            <Div>ИП Костин А.Н.</Div>
            <Div>УНП 11111111111</Div>
            <Div>Юридический адрес</Div>
          </Item>
        </Content>
        <Copy> © Safehouse 2021</Copy>
      </Container>
    </FooterSec>
  );
};

export default Footer;
const FooterSec = styled.footer`
  padding: 49px 0 16px;
  background: #0a0a0a;
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
  @media screen and (max-width: 496px) {
    display: block;
    text-align: center;
  }
`;
const Item = styled.div`
  padding-bottom: 1rem;
`;
const Tel = styled.div`
  padding-bottom: 20px;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;

  color: #ffffff;
`;
const Img = styled.img`
  margin-right: 20px;
`;
const Div = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding-bottom: 20px;
`;
const Copy = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;
