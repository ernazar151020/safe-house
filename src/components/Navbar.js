import React from "react";
import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";
import Logotip from "../assets/img/logo.png";
import { FaBars } from "react-icons/fa";
const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Container>
        <Content>
          <LogoDiv>
            <Logo src={Logotip} />
          </LogoDiv>
          <Bars onClick={toggle} />
          <Menu>
            <List
              to="galery"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              Портфолио
            </List>
            <List
              to="service"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              Услуги
            </List>
            <List
              to="priceList"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              Цены
            </List>
            <List
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact={true}
            >
              Контакты
            </List>
          </Menu>
          <BtnContainer>
            <Phone>+375 (25) 123-45-67</Phone>
            <Btn href="tel:+375251234567">Заказать звонок</Btn>
          </BtnContainer>
        </Content>
      </Container>
    </Nav>
  );
};

export default Navbar;
const Nav = styled.nav`
  background: #0a0a0a;
  color: #fff;
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
`;
const LogoDiv = styled(Link)`
  cursor: pointer;
`;
const Logo = styled.img`
  width: 130px;
  height: 90px;
`;
const Menu = styled.div`
  color: #fff;
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
const List = styled(LinkS)`
  padding-right: 70px;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid #01bf71;
  }
  @media screen and (max-width: 820px) {
    padding-right: 30px;
    color: #fff;
  } ;
`;
const BtnContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
const Phone = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
  white-space: nowrap;
`;
const Btn = styled.a`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;
  letter-spacing: 0.05em;
  display: block;
  color: #ff7a00;
  border: 1px solid #ff7a00;
  margin-top: 6px;
  text-align: center;
  cursor: pointer;
`;
const Bars = styled(FaBars)`
  font-size: 2rem;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-right: 1rem;
    cursor: pointer;
  } ;
`;
