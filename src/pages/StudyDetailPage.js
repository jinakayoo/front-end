import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

import StudyDetailPageFounder from '../components/StudyDetailPageFounder';
import StudyDetailPageApplicant from '../components/StudyDetailPageApplicant';
import StudyDetailPageFounderDone from '../components/StudyDetailPageFounderDone';

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