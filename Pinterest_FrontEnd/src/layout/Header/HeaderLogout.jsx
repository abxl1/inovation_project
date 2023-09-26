import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/icons/PinterestLogo.png";
import SignUpModal from "../../components/Modals/SignUpModal";


const HeaderLogout = ({ onLogin, onModalOpen, onModalLogin }) => {
  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);

  const handleIntroductionClick = () => {
    window.location.href = "https://help.pinterest.com/ko/guide/all-about-pinterest";
  };

  const handlebusinessClick = () => {
    window.location.href = "https://business.pinterest.com/ko/";
  };

  const handlepressClick = () => {
    window.location.href = "https://newsroom.pinterest.com/en";
  };

  const handleOpenSignUpModal = () => {
    setSignUpModalOpen(true);
  };

  return (
    <HeaderLogoutContainer>
      <LogoWrapper>
        <HeaderLogo
          src={Logo} alt="image"
          onClick={() => window.location.reload()}
        />{/*핀터레스트 아이콘의 */}
      </LogoWrapper>
      <ButtonWrapper>
        <CommonButton onClick={handleIntroductionClick}>소개</CommonButton>
        <CommonButton onClick={handlebusinessClick}>비즈니스</CommonButton>
        <CommonButton onClick={handlepressClick}>언론</CommonButton>
        <LoginButton
          onClick={() => {
            onModalOpen();
          }}>로그인</LoginButton>
        <UserAddButton onClick={handleOpenSignUpModal}>가입하기</UserAddButton>
      </ButtonWrapper>
      {isSignUpModalOpen && <SignUpModal onClose={() => setSignUpModalOpen(false)} />}
    </HeaderLogoutContainer>
  );
};

const HeaderLogoutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 10px; /* 로고와 버튼 간의 간격을 조절합니다. */
    background-color: white;
    color: black;

`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 10px; /* 로고를 왼쪽 끝으로 배치합니다. 원하는 만큼 조정해주세요. */
`;

const ButtonWrapper = styled.div`
 position: absolute;
  right: 10px; /* 버튼을 오른쪽 끝으로 배치합니다. 원하는 만큼 조정해주세요. */
  display: flex;
  align-items: center;
`;

const CommonButton = styled.button`
    cursor: pointer;
    border: none;
    font-size: medium;
    background-color: white;
    font-weight: bold;
    &:hover {
    text-decoration: underline;}
    margin:0px 10px;
`;

const LoginButton = styled.button`
  cursor: pointer;
  width : 70px;
  height: 40px;
  background-color: #e00000;
  border:none;
  margin-left: 20px;
  color: white;
  border-radius: 18px;
  font-weight: bold;
  font-size: medium;
  &:hover {
    background-color: darkred;
  }
`;

const UserAddButton = styled.button`
  cursor: pointer;
  width : 85px;
  height: 40px;
  border: none;
  border-radius: 18px;
  margin-left: 10px;
  font-weight: bold;
  font-size: medium;
  &:hover {
    background-color: lightgray;
  }
`
const HeaderLogo = styled.img`
  width: 130px;
  height: 40px;
  cursor: pointer;
`;

export default HeaderLogout;