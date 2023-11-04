import React from 'react';
import styled from "styled-components";
import ProfileCard from '../components/ProfileCard';
import PickIcon from "../assets/icons/PickIcon.png";
import { applicantData } from "../assets/data/applicantdata";

const PageContainer = styled.div`
  height: 1100px;
  background-color: #f6f1fb;
`;

const PickContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const PickText = styled.div`
  font-size: 50px;
  font-family: "GmarketSans";
  color: #7c8bbe;
  margin-left: 10px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px;
  padding: 20px;
`;

const PickTitle = () => {
  return (
    <PickContainer>
      <img src={PickIcon} style={{width: "45px", height: "45px"}} />
      <PickText>Pick!</PickText>
    </PickContainer>
  );
};

const ApplicantListPage = () => {
  return (
    <PageContainer>
      <PickTitle />
      <ListContainer>
      {applicantData.map((applicant, index) => (
        <ProfileCard
          key={index}
          name={applicant.name}
          age={applicant.age}
          email={applicant.email}
          phone_num={applicant.phone_num}
          introduction={applicant.introduction}
          image={applicant.image}
        />
      ))} 
      </ListContainer>
    </PageContainer>
  );
};

export default ApplicantListPage;
