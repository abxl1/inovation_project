import React from 'react'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom'

function SignUp() {

  const navigate = useNavigate();

  return (
    <JoinPageWrapper>
        <StLogo onClick={()=>{navigate('/')}}>알록짤록</StLogo>
    <JoinForm>
      <JoinTitle>회원가입하기</JoinTitle>
      <InputField type="text" placeholder="가입할 아이디 (소문자, 숫자 조합 5자리 이상)" />
      <InputField type="text" placeholder="닉네임 (2자 이상)" />
      <InputPassword type="password" placeholder="비밀번호 (소문자, 숫자 조합 8자리 이상)"/>
      <InputPassword type="password" placeholder="비밀번호 확인" />
      <SubmitButton type="submit" onClick={()=>{navigate('/login')}}>회원가입</SubmitButton>
      <div>이미 알록짤록 계정이 있으신가요?</div>
      <StLoginLink onClick={()=>{navigate('/login')}} >로그인</StLoginLink>
    </JoinForm>
  </JoinPageWrapper>
  )
}

export default SignUp;

const StLogo = styled.div`
  border: 2px solid #FFCE50;
  border-radius: 14px;
  padding: 20px;
  font-size : 50px;
  margin-bottom: 70px;
  cursor: pointer;
`

const JoinPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #FFCE50;
  border-radius: 4px;
  width: 700px;
  height: 700px;
`;

const JoinTitle = styled.div`
  font-size: 40px;
  margin-bottom: 60px;
`;

const InputField = styled.input`
  font-size: 30px;
  width: 100%;
  padding: 10px;
  margin-bottom: 55px;
  background-color: #FFCE50;
  color: #242426;
  border: 1px solid #FFCE50;
  border-radius: 4px;
  
`;

const InputPassword = styled.input`
  font-size: 30px;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #FFCE50;
  color: #242426;
  border: 1px solid #FFCE50;
  border-radius: 4px;
`

const SubmitButton = styled.button`
  padding: 30px 100px;
  background-color: #FFCE50;
  color: #242426;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const StLoginLink = styled.button`
  margin-top: 10px;
  font-size: 25px;
  cursor: pointer;
  &:hover {
    font-weight: 900;
  }
`
