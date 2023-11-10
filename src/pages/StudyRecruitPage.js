import React from 'react';
import styled from "styled-components";

import StarIcon from "../assets/icons/StarIcon.png";

const PageContainer = styled.div`
  padding: 50px 100px 50px 100px;
  display: flex;
  background-color: #F6F1FB;
  flex-direction: column;
`;

const Info = styled.div`
  padding: 20px 0px 50px 0px;
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  padding: 20px 0px 50px 0px;
  display: flex;
  flex-direction: column;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #7C8BBE;
  margin: 0px;
`;

  const TitleText = styled.p`
  margin: 0px 0px 0px 10px;
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
  justify-content: space-between;
`;

const Input = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 15px;
  border: 2px solid #B3B4DC;
  border-radius: 10px;
  width: 35vw;
  font-size: 18px;
  font-family: 'SCDream4', sans-serif;
  resize: none;
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
  width: 100%;
  height: 450px;
  font-size: 18px;
  font-family: 'SCDream4', sans-serif;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 100px;
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

const RowWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const StudyRecruitPage = () => {

  return (
    <PageContainer>
      <RowWrapper>
        <img src={StarIcon} alt={'Star Icon'} style={{ width: 'auto', height: '20px'}} />
        <TitleText>프로젝트 기본 정보</TitleText>
      </RowWrapper>
      <HorizontalLine />
      <Info>
        <Inputbox>
          <InputWrapper>
            <TextInput>모집 구분</TextInput>
            <Input type="text" placeholder="스터디와 프로젝트 중 선택해주세요."/>
          </InputWrapper>
          <InputWrapper>
            <TextInput>기술 스택</TextInput>
            <Input type="text" placeholder="사용되는 기술 스택을 입력해주세요. ex) 리액트, 스프링..."/>
          </InputWrapper>
        </Inputbox>
        <Inputbox>
          <InputWrapper>
            <TextInput>모집 인원</TextInput>
            <Input type="text"placeholder="모집 인원 수를 입력해주세요. ex) 3~5"/>
          </InputWrapper>
          <InputWrapper>
            <TextInput>진행 기간</TextInput>
            <Input type="text"placeholder="진행 기간을 입력해주세요."/>
          </InputWrapper>
        </Inputbox>
        <Inputbox>
          <InputWrapper>
            <TextInput>진행 장소</TextInput>
            <Input type="text"placeholder="주소를 입력해주세요."/>
          </InputWrapper>
          <InputWrapper>
            <TextInput>모집 마감일</TextInput>
            <Input type="text"placeholder="**** - ** - **"/>
          </InputWrapper>
        </Inputbox>
      </Info>
      <RowWrapper>
        <img src={StarIcon} alt={'Star Icon'} style={{ width: 'auto', height: '20px'}} />
        <TitleText>프로젝트 소개</TitleText>
      </RowWrapper>
      <HorizontalLine />
      <Intro>
        <TextInput>제목</TextInput>
        <Input type="text"placeholder="제목을 입력해주세요."/>
        <TextInput>내용</TextInput>
        <Textarea type="text" placeholder="내용을 입력해주세요."/>
      </Intro>
      <ButtonContainer>
        <Button>글 등록</Button>
      </ButtonContainer>
    </PageContainer>
  );
};

export default StudyRecruitPage;