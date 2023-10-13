import React from 'react';
import styled from "styled-components";

const PageContainer = styled.div`
  padding: 50px;
  display: flex;
  background-color: #F6F1FB;
  flex-direction: column;
`;

const Info = styled.div`
  padding: 20px 0px 50px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Intro = styled.div`
  padding: 20px 0px 50px 0px;
  display: flex;
  flex-direction: column;
`;

const HorizontalLine = styled.div`
  width: 50%;
  height: 2px;
  background-color: #7C8BBE;
  margin: 0px;
`;

  const TitleText = styled.p`
  margin: 0px 0px 0px 0px;
  font-size: 24px;
  font-family: 'GmarketSans';
  color: #7C8BBE;
`;

const InputWrapper = styled.div`
  flex-direction: column;
  margin: 0px 20px;
`;

const Inputbox = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid #B3B4DC;
  border-radius: 10px;
  width: 30vw;
  font-size: 18px;
`;

const TextInput = styled.p`
  flex-direction: column;
  margin: 0px;
  font-size: 18px;
  font-family: 'SCDream4';
  color: #B3B4DC;
`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid #B3B4DC;
  border-radius: 10px;
  width: 30vw;
  font-size: 18px;
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

const StudyRecruitPage = () => {

  return (
    <PageContainer>
      <TitleText>프로젝트 기본 정보</TitleText>
      <HorizontalLine />
      <Info>
        <Inputbox>
          <InputWrapper>
            <TextInput>모집 구분</TextInput>
            <Input type="text" />
          </InputWrapper>
          <InputWrapper>
            <TextInput>기술 스택</TextInput>
            <Input type="text" />
          </InputWrapper>
        </Inputbox>
        <Inputbox>
          <InputWrapper>
            <TextInput>모집 인원</TextInput>
            <Input type="text" />
          </InputWrapper>
          <InputWrapper>
            <TextInput>진행 기간</TextInput>
            <Input type="text" />
          </InputWrapper>
        </Inputbox>
        <Inputbox>
          <InputWrapper>
            <TextInput>진행 장소</TextInput>
            <Input type="text" />
          </InputWrapper>
          <InputWrapper>
            <TextInput>모집 마감일</TextInput>
            <Input type="text" />
          </InputWrapper>
        </Inputbox>
      </Info>
      <TitleText>프로젝트 소개</TitleText>
      <HorizontalLine />
      <Intro>
        <TextInput>제목</TextInput>
        <Input type="text" />
        <TextInput>내용</TextInput>
        <Textarea type="text" />
      </Intro>
      <Button>글 등록</Button>
    </PageContainer>
  );
};

export default StudyRecruitPage;