// import React from "react";
// import styled from "styled-components";
// import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
// import { pricelistdata } from "./data";
// const PriceList = () => {
//   return (
//     <PriceListSec id="priceList">
//       <Container>
//         <Header>ПРАЙС-ЛИСТ НА УСЛУГИ</Header>
//         <Content>
//           <BtnContainer>
//             {pricelistdata.map((item) => {
//               const { price, realMeasure, text, btn } = item;
//               return <Btn>{btn}</Btn>;
//             })}
//           </BtnContainer>

//           <Head>
//             <HeadEl>Наименование</HeadEl>
//             <HeadEl>Ед.измерения</HeadEl>
//             <HeadEl>Цена от, руб</HeadEl>
//           </Head>
//           <Info>
//             <Text>
//               {pricelistdata.map((item) => {
//                 const { text } = item;
//                 return <Div>{text}</Div>;
//               })}
//             </Text>
//             <Text>
//               {pricelistdata.map((item) => {
//                 const { realMeasure } = item;
//                 return <Div>{realMeasure}</Div>;
//               })}
//             </Text>
//             <Text>
//               {pricelistdata.map((item) => {
//                 const { price } = item;
//                 return <Div>{price}</Div>;
//               })}
//             </Text>
//           </Info>
//           {/* <Table>
//           <Thead>
//             <Tr>
//               <Th>Наименование работ</Th>
//               <Th>Ед.измерения</Th>
//               <Th>Цена от, руб</Th>
//             </Tr>
//           </Thead>
//           <Tbody>
//             {pricelistdata.map((item) => {
//               const { price, realMeasure, text, btn } = item;
//               return <div>{text}</div>;
//             })}
//           </Tbody>
//         </Table> */}
//         </Content>
//       </Container>
//     </PriceListSec>
//   );
// };

// export default PriceList;
// const PriceListSec = styled.div`
//   min-height: 100vh;
//   background: #0a0a0a;
//   padding: 56px 0;
// `;
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 15px;
// `;
// const Header = styled.div`
//   font-size: 30px;
//   line-height: 37px;
//   text-transform: uppercase;
//   color: #ffffff;
// `;
// const BtnContainer = styled.div`
//   display: flex;
// `;
// const Btn = styled.button`
//   flex: 1;
// `;
// const Head = styled.div`
//   display: flex;
// `;
// const HeadEl = styled.div`
//   flex: 1;
// `;
// const Content = styled.div`
//   text-align: center;
// `;
// const Text = styled.div``;
// const Info = styled.div`
//   display: flex;
// `;
// const Div = styled.div``;
