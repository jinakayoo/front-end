import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #313866;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Section = styled.div`
  // background-color: lightgray;
  text-align: center;
  padding: 50px;
`;

const TitleContent = styled.p`
  margin: 0px 0px 10px 0px;
  font-size: 18px;
  font-family: 'GmarketSans';
  color: #fff;
`;

const TextContent = styled.p`
  margin: 0;
  font-size: 18px;
  font-family: 'SCDream4';
  color: #fff;
`;

const Footer = () => {

  return (
    <FooterContainer>
      <Section>
        <TitleContent>로고</TitleContent>
      </Section>
      <Section>
        <TitleContent>Delvelopers</TitleContent>
        <TextContent>박유나</TextContent>
        <TextContent>김가빈</TextContent>
        <TextContent>류지예</TextContent>
        <TextContent>박유정</TextContent>
      </Section>
      <Section>
        <TitleContent>Contact</TitleContent>        
        <TextContent>p_1321@duksung.ac.kr</TextContent>
        <TextContent>p_1321@duksung.ac.kr</TextContent>
        <TextContent>p_1321@duksung.ac.kr</TextContent>
        <TextContent>p_1321@duksung.ac.kr</TextContent>
      </Section>
    </FooterContainer>
  );
};

export default Footer;