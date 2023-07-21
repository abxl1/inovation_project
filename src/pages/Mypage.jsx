import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Mypage() {
  const navigate = useNavigate();

  return (
    <MyPageWrapper>
      <StLogo onClick={() => navigate('/')}>알록짤록</StLogo>
      <MyPageContent>
        <MyPageTitle>마이 페이지</MyPageTitle>
        <UserInfo>
          <UserLabel>아이디:</UserLabel>
          <UserName>JESUSS2</UserName>
        </UserInfo>
        <UserInfo>
          <UserLabel>닉네임:</UserLabel>
          <UserEmail>어린양들아</UserEmail>
        </UserInfo>
        <UserInfo>
          <UserLabel>회원 등급:</UserLabel>
          <UserGrade>Premium</UserGrade>
        </UserInfo>
        <UserActions>
          <EditProfileButton>
            프로필 수정
          </EditProfileButton>
        </UserActions>
      </MyPageContent>
    </MyPageWrapper>
  );
}

export default Mypage;

const MyPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StLogo = styled.div`
  border: 2px solid #ffce50;
  border-radius: 14px;
  padding: 20px;
  font-size: 50px;
  margin-bottom: 70px;
  cursor: pointer;
`;

const MyPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ffce50;
  border-radius: 4px;
  width: 700px;
  height: 500px;
`;

const MyPageTitle = styled.div`
  font-size: 40px;
  margin-bottom: 60px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const UserLabel = styled.div`
  font-size: 30px;
  margin-right: 10px;
`;

const UserName = styled.div`
  font-size: 25px;
`;

const UserEmail = styled.div`
  font-size: 25px;
`;

const UserGrade = styled.div`
  font-size: 25px;
`;

const UserActions = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const EditProfileButton = styled.button`
  padding: 15px 30px;
  background-color: #ffce50;
  color: #242426;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
`;

// const LogoutButton = styled.button`
//   padding: 15px 30px;
//   background-color: #ffce50;
//   color: #242426;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   font-size: 20px;
// `;
