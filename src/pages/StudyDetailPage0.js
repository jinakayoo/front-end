import React from 'react';
import styled from "styled-components";

import StarIcon from "../assets/icons/StarIcon.png";

const PageContainer = styled.div`
  display: flex;
  padding: 50px 200px 50px 200px;
  background-color: #F6F1FB;
  flex-direction: column;
`;

const Box = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
`;

const TitleText = styled.p`
  margin: 0px 0px 0px 10px;
  font-size: 50px;
  font-family: 'GmarketSans';
  color: #313866;
`;

const AuthText = styled.p`
  margin: 0px 0px 20px 20px;
  font-size: 25px;
  font-family: 'SCDream4';
  color: #7C8BBE;
`;

const SubtitleText = styled.p`
  margin: 0px 0px 20px 20px;
  font-size: 24px;
  font-family: 'SCDream6';
  color: #B3B4DC;
`;

const SubWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const TextContent = styled.p`
  margin: 0px 0px 20px 20px;
  width: 300px;
  font-size: 18px;
  font-family: 'SCDream4';
  color: #313866;
`;

const Subbox = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextContent2 = styled.p`
  margin: 0px 0px 20px 20px;
  font-size: 18px;
  font-family: 'SCDream4';
  color: #313866;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 40px;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #B3B4DC;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: 'SCDream6';
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: #7C8BBE;
  margin: 30px 0px 40px 0px;
`;

const CommentArea = styled.div`
  display: flex;
  margin: 50px 0px 0px 0px;
`;

const RowWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin: 0px 0px 20px 0px;
`;

const StudyDetailPage0 = () => {

  return (
    <PageContainer>
      <Box>
        <RowWrapper>
          <img src={StarIcon} alt={'Star Icon'} style={{ width: 'auto', height: '50px'}} />
          <TitleText>[프로젝트] 덕성여대 지나가유</TitleText>
        </RowWrapper>
        <AuthText>닉네임 | 2023.11.05.</AuthText>
        <SubWrapper>
          <SubtitleText>기술 스택</SubtitleText>
          <TextContent>React.js</TextContent>
        </SubWrapper>
        <Subbox>
          <SubWrapper>
            <SubtitleText>진행 장소</SubtitleText>
            <TextContent>서울 강북구 삼양로 528-1 1층</TextContent>
          </SubWrapper>
          <SubWrapper>
            <SubtitleText>진행 기간</SubtitleText>
            <TextContent>2023.09.29~2023.12.25</TextContent>
          </SubWrapper>
        </Subbox>
        <Subbox>
          <SubWrapper>
            <SubtitleText>모집 인원</SubtitleText>
            <TextContent>3명</TextContent>
          </SubWrapper>
          <SubWrapper>
            <SubtitleText>모집 마감일</SubtitleText>
            <TextContent>2023.09.20</TextContent>
          </SubWrapper>
        </Subbox>
        <HorizontalLine/>
        <SubtitleText>스터디 소개</SubtitleText>
        <TextContent2>
          프로젝트 소개<br/>
          우리 대학은 자생, 자립, 자각의 창학 정신을 실현하고자 다양한 프로그램을 운영하고 있습니다.<br/><br/>
          목표<br/>
          10월 서비스 기획 완료<br/>
          11월 UIUX 디자인 완료<br/>
          12월 MVP 출시<br/><br/>
          현재 팀원 구성<br/>
          디자인 1명<br/>
          개발자 1명<br/>
        </TextContent2>
      </Box>
      <CommentArea>
        <SubtitleText>댓글</SubtitleText>
      </CommentArea>
      <ButtonContainer>
        <Button>스터디원 확정</Button>
      </ButtonContainer>
    </PageContainer>
  );
};

export default StudyDetailPage0;