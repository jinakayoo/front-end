import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #7C8BBE;
  font-family: 'SCDream4';
`;

const TextLink = styled(Link)`
  text-decoration: none;
`

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const Profile = styled.img`
  width: 50px;
  height: auto;
`;

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
  // 로그인 기능 구현 전 임시
  const isLoggedIn = false;
  const username = "John Doe";

  return (
    <NavContainer>
      <NavItems>
        <TextLink to="/">
          {/* <Logo src="" alt="로고" /> */}
          <NavItem>홈</NavItem>
        </TextLink>
        <TextLink to="/studyrecruit">
          <NavItem>모집하기</NavItem>
        </TextLink>
      </NavItems>
      <NavItems>
        {isLoggedIn ? (
          <>
            <NavItem>{username}</NavItem>
            {/* <Profile src='' alt='사용자 이미지'/> */}
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