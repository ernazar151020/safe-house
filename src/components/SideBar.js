import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
const Sidebar = ({ open, toggle }) => {
  return (
    <>
      <SidebarContainer open={open} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="galery" onClick={toggle}>
              Портфолио
            </SidebarLink>
            <SidebarLink to="service" onClick={toggle}>
              Услуги
            </SidebarLink>
            <SidebarLink to="priceList" onClick={toggle}>
              Цены
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Контакты
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtn>
            <SidebarRouter to="contact" onClick={toggle}>
              Sign In
            </SidebarRouter>
          </SidebarBtn>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;

  left: 0;
  transition: all 0.3s ease-in-out;
  background: #0d0d0d;
  opacity: ${({ open }) => (open ? "100%" : "0")};
  top: ${({ open }) => (open ? "0" : "-100%")};
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
const SidebarWrapper = styled.div`
  color: #fff;
  padding: 2rem 0;
`;
const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(5, 60px);
  }
`;
const SidebarLink = styled(LinkS)`
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #01bf71;
  }
`;
const SidebarBtn = styled.div`
  text-align: center;
`;
const SidebarRouter = styled(LinkR)`
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
  &:hover {
    background: #fff;
  }
`;
