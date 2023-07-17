import React from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'

function Login() {
    const navigate = useNavigate();
  return (
    <LoginPageWrapper>
        <StLogo onClick={()=>{navigate('/')}}>알록짤록</StLogo>
    <LoginForm>
      <JoinTitle>로그인하기</JoinTitle>
      <InputField type="text" placeholder="아이디" />
      <InputField type="password" placeholder="비밀번호" />
      <SubmitButton type="submit">로그인</SubmitButton>
      <div>아직 알록짤록 계정이 없으신가요?</div>
      <StJoinLink onClick={()=>{navigate('/signup')}}>회원가입</StJoinLink>
    </LoginForm>
  </LoginPageWrapper>
  )
}

export default Login

const JoinTitle = styled.div`
  font-size: 35px;
  margin-bottom: 60px;
`

const LoginPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const StLogo = styled.div`
  border: 2px solid #FFCE50;
  border-radius: 14px;
  padding: 20px;
  font-size : 50px;
  margin-bottom: 70px;
  cursor: pointer;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #FFCE50;
  border-radius: 4px;
  width: 700px;
  height: 550px;
`;

const InputField = styled.input`
  font-size: 30px;
  width: 100%;
  padding: 10px;
  margin-bottom: 70px;
  background-color: #FFCE50;
  color: #242426;
  border: 1px solid #FFCE50;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 30px 100px;
  background-color: #FFCE50;
  color: #242426;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 25px;
  margin-bottom: 20px;
`;

const StJoinLink = styled.button`
  cursor: pointer;
  font-size: 25px;
  margin-top: 10px;
  &:hover {
    font-weight: 900;
  }
`

