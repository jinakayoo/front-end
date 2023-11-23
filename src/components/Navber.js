import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import StarHubIconNavbar from "../assets/icons/StarHubIconNavbar.png";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  background-color: #7C8BBE;
  font-family: 'SCDream4';
`;

const TextLink = styled(Link)`
  text-decoration: none;
`

const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

const NavItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: #fff;
`;

const Navber = () => {
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  // console.log(userInfo)

  return (
    <NavContainer>
      <NavItems>
        <TextLink to="/">
          <img src={StarHubIconNavbar} alt={'Logo'} style={{ width: 'auto', height: '50px', marginRight: '10px', marginTop: '5px'}} />
        </TextLink>
        <TextLink to="/studyrecruit">
          <NavItem>모집하기</NavItem>
        </TextLink>
      </NavItems>
      <NavItems>
        {userInfo!==null ? (
          <>
            <NavItem>{userInfo.name} 님</NavItem>
            <NavItem>로그아웃</NavItem>
          </>
        ) : (
          <TextLink to="/login">
            <NavItem>로그인</NavItem>
          </TextLink>
        )}
      </NavItems>
    </NavContainer>
  );
};

export default Navber;