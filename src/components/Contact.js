import React from "react";
import styled from "styled-components";
const Contact = ({ img, color, header, bottom, image, order }) => {
  return (
    <ContactSec id="contact">
      <Header color={color} bottom={bottom}>
        {header}
      </Header>
      <Wrap>
        <Img src={img} />
        <Container>
          <Content>
            <DivForm order={order}>
              <Form>
                <FormTitle>ЗАПОЛНИТЕ ФОРМУ</FormTitle>
                <Input placeholder="Ваше имя" />
                <Input placeholder="Номер телефона" />
                <Text>Опишите Вашу заявку</Text>
                <TextArea></TextArea>
                <Button>Получить консультацию</Button>
                <div>
                  <InputCheck type="checkbox" />
                  <Label>Принимаю условия Политики конфединциальности</Label>
                </div>
              </Form>
            </DivForm>

            <ImgContainer order={order}>
              <Image src={image} />
            </ImgContainer>
          </Content>
        </Container>
      </Wrap>
    </ContactSec>
  );
};

export default Contact;
const ContactSec = styled.section`
  background: #0a0a0a;
  min-height: 100vh;
  position: relative;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 0 15px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Form = styled.form`
  background: #1c1d1e;
  border: 2px solid #ff7a00;
  padding: 24px 54px;
  box-sizing: border-box;
  border-radius: 15px;
  color: #fff;
  @media screen and (max-width: 768px) {
    padding: 20px 14px;
  }
`;
const ImgContainer = styled.form`
  order: ${({ order }) => (order ? "2" : "1")};
`;
const Img = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
const Header = styled.div`
  font-size: 30px;
  line-height: 37px;
  color: ${({ color }) => (color ? "#ff7a00" : "#fff")};
  text-align: center;
  margin-bottom: ${({ bottom }) => (bottom ? "70px" : "64px")};
`;
const Wrap = styled.div`
  position: relative;
  min-height: 100vh;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ff7a00;
  background: none;
  outline: none;
  padding: 0 10px;
  margin-bottom: 18px;
  color: #fff;
`;
const Label = styled.label`
  display: inline-block;
`;
const TextArea = styled.textarea`
  width: 100%;
  margin: 16px 0;
  min-height: 146px;
  padding: 10px;
  background: #1c1d1e;
  border: 2px solid #ff7a00;
  box-sizing: border-box;
  border-radius: 10px;
  outline: none;
  color: #fff;
`;
const Text = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.05em;
  color: #ffffff;
`;
const Button = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05em;
  color: #ffffff;
  padding: 10px 23px;
  border: 3px solid #ff7a00;
  border-radius: 10px;
  text-align: center;
  margin: 25px 0 11px;
  cursor: pointer;
`;
const FormTitle = styled.div`
  margin-bottom: 24px;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: #ffffff;
  text-align: center;
`;
const InputCheck = styled.input`
  margin-right: 10px;
  display: inline-block;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  @media screen and (max-width: 768px) {
    max-width: 80%;
    max-height: 80%;
    margin-top: 2rem;
  }
`;
const DivForm = styled.div`
  order: ${({ order }) => (order ? "1" : "2")};
`;
