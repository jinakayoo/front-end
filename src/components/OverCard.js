import React from "react";
import styled from "styled-components";
import StackIcon from "../assets/icons/StackIcon.png";
import FinishIcon from "../assets/icons/FinishIcon.png";
import PlaceIcon from "../assets/icons/PlaceIcon.png";
import PeopleIcon from "../assets/icons/PeopleIcon.png";
import DuringIcon from "../assets/icons/DuringIcon.png";
import { Link } from "react-router-dom";

const AllContainer = styled.div`
  // 위쪽에 맞춰서 배치
  display: flex;
  flex-direction: row;
  justify-content: center;
  vertical-align: top;
`;

const PageContainer = styled.div`
  width: 325px;
  height: 110px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto auto;
  padding: 10px 0px 0px 20px;
  margin: 13px 0px 0px 0px;
  background-color: #ffffff;
  border-radius: 15px;
`;

const TitleContainer = styled.div`
  grid-column: span 2;
  color: #313866;
  font-size: 24px;
  font-family: "GmarketSans";
  width: 70%;
  margin-top: 15px;
  margin-bottom: -10px;
  margin-left: 20px;
`;

const ShortContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  align-items: center;
  margin-bottom: 10px;
`;

const ShortTitleContainer = styled.div`
  text-decoration: none;
  text-align: center;
  color: #7c8bbe;
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

const ClosedButton = styled.button`
  width: 40px;
  height: 50px;
  color: #7c8bbe;
  font-size: 16px;
  font-family: "GmarketSans";
  background-color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`;

const StackIconCSS = {
  width: "14px",
  height: "14px",
  margin: "4px",
};

const FinishIconCSS = {
  width: "14px",
  height: "16px",
  margin: "3px 4px",
};

const PlaceIconCSS = {
  width: "10px",
  height: "16px",
  margin: "3px 6px",
};

const peopleNumIconCSS = {
  width: "16px",
  height: "14px",
  margin: "4px 3px",
};

const DuringIconCSS = {
  width: "14px",
  height: "14px",
  margin: "4px",
};

function shotInform(image, title, content, unit) {
  return (
    <ShortContainer>
      <img
        src={image}
        alt={title}
        style={
          title === "스택"
            ? StackIconCSS
            : title === "마감"
            ? FinishIconCSS
            : title === "장소"
            ? PlaceIconCSS
            : title === "인원"
            ? peopleNumIconCSS
            : title === "기간"
            ? DuringIconCSS
            : null
        }
      />
      <ShortTitleContainer>{title}</ShortTitleContainer>
      <ShortDetailContainer>
        {content}
        {unit}
      </ShortDetailContainer>
    </ShortContainer>
  );
}

function OverCard({ type, title, skill, deadline, progress, peopleNum, place, onClose, index }) {
  console.log(title, skill, deadline, progress, peopleNum);

  const handleClose = () => {
    if (onClose) {
      onClose(); 
    }
  };

  return (
    <AllContainer>
      <Link to={`/detail/${index}`} style={{ textDecoration: "none" }}>
          {/* <TitleContainer>[{type}] {title}</TitleContainer> */}
          <TitleContainer>{title}</TitleContainer>
        <PageContainer>
          {shotInform(StackIcon, "스택", skill, "")}
          {shotInform(FinishIcon, "마감", deadline, "")}
          {shotInform(DuringIcon, "기간", progress, "개월")}
          {shotInform(PeopleIcon, "인원", peopleNum, "명")}
          {shotInform(PlaceIcon, "장소", place, "")}
        </PageContainer>
      </Link>
      <ClosedButton
        onClick={handleClose}
        style={{ cursor: "pointer", verticalAlign: "top" }}
      >
        X
      </ClosedButton>
    </AllContainer>
  );
}

export default OverCard;
