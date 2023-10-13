import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F6F1FB;
  flex-direction: column;
`

const TitleText = styled.p`
  margin: 0px 0px 50px 0px;
  font-size: 50px;
  font-family: 'GmarketSans';
  color: #7C8BBE;
`

const Box = styled.div`
  margin: 50px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  padding: 50px;
`

const InputWrapper = styled.div`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid #B3B4DC;
  border-radius: 10px;
  width: 30vw;
  font-size: 18px;
`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid #B3B4DC;
  border-radius: 10px;
  width: 30vw;
  font-size: 18px;
`;

const Tempbox = styled.div`
  padding: 0px 15px 0px 15px;
  width: 30vw;
`;

const TextInput = styled.p`
  margin: 0px;
  font-size: 18px;
  font-family: 'SCDream4';
  color: #B3B4DC;
`;

const TextPofile = styled.p`
  margin: 30px 0px 30px 0px;
  font-size: 18px;
  font-family: 'SCDream6';
  color: #313866;
`;

const TextStudy = styled.p`
  margin: 0px 0px 15px 0px;
  font-size: 18px;
  font-family: 'SCDream4';
  color: #B3B4DC;
`;

const HorizontalLine = styled.div`
  width: 30vw;
  height: 2px;
  background-color: #7C8BBE;
  margin: 10px 0px 20px 0px;
  `;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 40px;
  width: 250px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: #B3B4DC;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: 'SCDream6';
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const TextContent = styled.p`
  margin: 0px 10px 0px 0px;
  font-size: 18px;
  font-family: 'SCDream4';
  color: #313866;
`;

const TextLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-family: 'SCDream6';
  color: #313866;
`

const Text = styled.div`
  display: flex;
`



const Signup = () => {

  return (
    <PageContainer>
      <TitleText>
        Sign Up
      </TitleText>
      <Text>
        <TextContent>이미 StarHub 회원이신가요?</TextContent>
        <TextLink to="/login">로그인</TextLink>
      </Text>
      <Box>
        <TextPofile>프로필 수정</TextPofile>
        <InputWrapper>
          <TextInput>아이디</TextInput>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <TextInput>비밀번호</TextInput>
          <Input type="password" />
        </InputWrapper>
        <HorizontalLine />
        <InputWrapper>
          <TextStudy>스터디 연락을 위한 정보입니다.</TextStudy>
          <Tempbox type="password" />
        </InputWrapper>
        <InputWrapper>
          <TextInput>이름</TextInput>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <TextInput>나이</TextInput>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <TextInput>이메일</TextInput>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <TextInput>전화번호</TextInput>
          <Input type="text" />
        </InputWrapper>
        <InputWrapper>
          <TextInput>한 줄 소개</TextInput>
          <Textarea type="text" />
        </InputWrapper>
        <Button>Sign Up</Button>
      </Box>
    </PageContainer>
  );
};

export default Signup;