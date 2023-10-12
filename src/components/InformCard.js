import React from "react";
import styled from "styled-components";
import StackIcon from "../assets/icons/StackIcon.png";
import FinishIcon from "../assets/icons/FinishIcon.png";
import PlaceIcon from "../assets/icons/PlaceIcon.png";
import PeopleIcon from "../assets/icons/PeopleIcon.png";
import DuringIcon from "../assets/icons/DuringIcon.png";

const PageContainer = styled.div`
  width: auto;
  height: auto;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  padding: 10px 20px;
  margin: 13px 0px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const TitleContainer = styled.div`
  grid-column: span 2;
  color: #313866;
  font-size: 24px;
  font-family: "GmarketSans";
  width: 100%;
  margin-bottom: 7px;
`;

const ShortContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  align-items: center;
  margin-bottom: 7px;
`;

const ShortTitleContainer = styled.div`
  text-decoration: none;
  text-align: center;
  color: #7C8BBE;
  font-size: 16px;
  font-family: "SCDream4";
  margin: 0px 5px;
`;

const ShortDetailContainer = styled.div`
  text-decoration: none;
  text-align: center;
  color: #313866;
  font-size: 16px;
  font-family: "SCDream4";
`;

function shotInform(image, title, content, unit) {
  return (
    <ShortContainer>
      <img src={image} alt={title} style={{ width: '12px', height: '12px', margin: '4px' }} />
      <ShortTitleContainer>{title}</ShortTitleContainer>
      <ShortDetailContainer>{content}{unit}</ShortDetailContainer>
    </ShortContainer>
  );
}

function InformCard({ title, stack, finish, during, people }) {
  console.log(title, stack, finish, during, people)
  return (
    <PageContainer>
      <TitleContainer>{title}</TitleContainer>
      {shotInform(StackIcon, "스택", stack, "")}
      {shotInform(FinishIcon, "마감", finish, "")}
      {shotInform(PlaceIcon, "공간", during, "개월")}
      {shotInform(PeopleIcon, "인원", people, "명")}
      {shotInform(DuringIcon, "장소", during, "")}
    </PageContainer>
  );
}

export default InformCard;
