import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

// import { useCookies } from "react-cookie";
import LogoLogin from "../../assets/icons/PinterestLogoLogin.png";
import UnderIcon from "../../assets/icons/undericon.png"
import SearchIcon from "../../assets/icons/seachicon.png"
import AlarmIcon from "../../assets/icons/bellicon.png"
import MessageIcon from "../../assets/icons/chaticon.png"

import { Cookies } from "react-cookie";
const cookies = new Cookies();


const HeaderLogin = () => {
  const navigate = useNavigate();
  const {nickname} = useParams();
console.log(nickname)
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };


  const logout = () => {
    // 쿠키 삭제
    cookies.remove("accessToken");
    alert("로그아웃 되었습니다!");
    navigate("/");
    window.location.reload();
  };


  return (
    <HeaderInContainer>
      <HeaderLogo src={LogoLogin} alt="image" onClick={() => window.location.reload()} />
      <HomeButton onClick={()=>navigate('/home')}>홈</HomeButton>
      <MakingContainer onClick={toggleDropdown}>
        <MakeButton onClick={()=>navigate('/make')}>만들기</MakeButton>
        <UnderIconImg src={UnderIcon} alt="undericon" />
      </MakingContainer>
      {showDropdown && (
        <DropdownContainer>{/*만들기에 나오는 드롭다운 가장 바깥 컨테이너 박스 */}
          <DropdownButton>Dropdown Button 1</DropdownButton>
          <DropdownButton>Dropdown Button 2</DropdownButton>
        </DropdownContainer>
      )}
      <SearchContainer>{/*검색 기능 박스 컨테이너*/}
        <SearchInput placeholder="Search" />
        <SearchIconImg src={SearchIcon} alt="search" />
      </SearchContainer>
      <ButtonContainer><AlarmButton src={AlarmIcon} alt="alarm" /></ButtonContainer>
      <ButtonContainer><MessageButton src={MessageIcon} alt="message" /></ButtonContainer>
      <ButtonContainer>⚫</ButtonContainer>      
      <button onClick={logout}> 로그아웃</button>
    </HeaderInContainer >

  );
};



const HeaderInContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  width: auto;
  background-color: white;
  color: black;
`;

const HeaderLogo = styled.img`
  width: 40px;
  height: 35px;
  cursor: pointer;
`;

const HomeButton = styled.button`
    width: 57px;
    height: 45px;
    background-color: black;
    font-weight: bold;
    font-size: medium;
    color: white;
    border-radius: 30px;
    margin-left: 10px;
    cursor: pointer;
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 13px 45px 13px 10px;
  border-radius: 20px;
  background-color: lightgray;
  border: none;
  font-size: 14px;
`;

const SearchIconImg = styled.img`
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const MakingContainer = styled.button`
    width: 100px;
    height: 45px;
    border-radius: 30px;
    background-color: white;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MakeButton = styled.div`
    font-size: medium;
    font-weight: bold; 
`;

const UnderIconImg = styled.img`
    height: 15px;
    width: 15px;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 60px; /* Adjust this value to position the dropdown properly */
  right: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  z-index: 1;
`;

const DropdownButton = styled.button`
  padding: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  height: 42px;
  width: 42px;
  cursor: pointer;
  border-radius: 20px;
  margin-left: 10px ;
  align-items: center;
  display: flex;
  justify-content: center;
   &:hover {
    background-color: #dfdfdf;
  }
`;

const AlarmButton = styled.img`
  height: 35px;
  width: 35px;
`;

const MessageButton = styled.img`
  height: 30px;
  width: 30px;
`
export default HeaderLogin;