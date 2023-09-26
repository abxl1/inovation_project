import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { loginOff } from '../redux/modules/loginSlice';

function Header() {

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const state = useSelector((state) => state)

const logOutButton = () =>{
  dispatch(loginOff())
}
const storedRole = localStorage.getItem("role");
console.log("storedRole", storedRole)
  return (
    <StHeaderContainer>
        {(storedRole === 'NAYOUNG')
        ? <div style={{padding : '0px 150px 0px 0px'}} onClick={()=>{navigate('/writing')}}>글쓰기</div>
        : <div style={{padding : '0px 150px 0px 0px'}} ></div>}
        <StSetContainer>
          <StHeaderButton onClick={()=>{navigate('/post')}}>전체글</StHeaderButton>
          <StHeaderButton onClick={()=>{navigate('/favorite')}}>인기글</StHeaderButton>
          <StLogo onClick={()=>{navigate('/')}}>알록짤록</StLogo>
          <StHeaderButton onClick={()=>{navigate('/history')}}>프로젝트 연혁</StHeaderButton>
          <StHeaderButton onClick={()=>{navigate('/contact')}}>오시는 길</StHeaderButton>
        </StSetContainer>
        
          {state.isLogin.isLogin
          ? 
          <StButtonSet>
          <StButton onClick={()=>{navigate('/mypage')}}>마이페이지</StButton>
          <StButton onClick={logOutButton}>로그아웃</StButton>
          </StButtonSet>
          : 
          <StButtonSet>
          <StButton onClick={()=>{navigate('/login')}}>로그인</StButton>
          <StButton onClick={()=>{navigate('/signup')}} >회원가입</StButton>
          </StButtonSet>}
        
    </StHeaderContainer>
  )
}

export default Header;

const StHeaderContainer = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  flex-direction: row;
  padding : 50px;
  border :2px solid #F2AE30;
  width: 100%;
  position: fixed;
  z-index : 10;
`
const StSetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  flex-direction: row;
  gap: 80px;
`

const StLogo = styled.div`
  border: 1px solid #FFCE50;
  border-radius: 14px;
  font-size : 40px;
  padding: 15px;
  cursor: pointer;
  min-width: 200px;
  text-align: center;
`
const StHeaderButton = styled.div`
  cursor: pointer;
  min-width: 90px;
`

const StButtonSet = styled.div`
  display: flex;
`

const StButton = styled.div`
  cursor: pointer;
  margin-left: 20px;
`