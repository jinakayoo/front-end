import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useParams } from 'react-router-dom';

import StudyDetailPageFounder from '../components/StudyDetailPageFounder';
import StudyDetailPageApplicant from '../components/StudyDetailPageApplicant';
import StudyDetailPageFounderDone from '../components/StudyDetailPageFounderDone';

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
  margin-top: 40px;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #B3B4DC;
  font-family: 'SCDream4';
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
  flex-direction: column;
`;

const RowWrapper = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin: 0px 0px 20px 0px;
`;

const StudyDetailPage = () => {
  const { postId } = useParams();
  const [studyDetail, setStudyDetail] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/post/detail?post_id=${postId}`)
      .then((response) => {
        // console.log(response.data)
        setStudyDetail(response.data)
      })
      .catch((error) => {
        console.error('Error fetching study detail:', error.message);
      });
  }, [postId]);

  // userInfo와 studyDetail의 userName이 같은지 확인
  const isCurrentUser = userInfo && userInfo.name === studyDetail.userName;

  if (isCurrentUser) {
    if (studyDetail.done) {
      return (
        <StudyDetailPageFounderDone studyDetail={studyDetail} />
      );
    } else {
      return (
        <StudyDetailPageFounder studyDetail={studyDetail} />
        );
    }
  } else {
    return (
      <StudyDetailPageApplicant studyDetail={studyDetail} />
    );
  }
};

export default StudyDetailPage;