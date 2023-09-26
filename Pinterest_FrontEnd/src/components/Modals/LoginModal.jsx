import React, { useState } from "react";
import * as s from './style';
import Logo from "../../assets/icons/PinterestLogoLogin.png"
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import { login } from "../../axios/auth";
import { useCookies } from 'react-cookie'

const LoginModal = ({ onClose, onLogin }) => {

  const [isModalLogIn, setModalLogIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const mutation = useMutation(login, {
    onSuccess: (data) => {
      if (data) {
        alert("로그인 성공!");
        onLogin();
        handleCloseModal();
        navigate("/home");
      }
    },
    onError: (error) => {
      alert("로그인 실패!");
    },
  });

  const handleModalLogin = () => {
    const loginInfo = { email, password };
    mutation.mutate(loginInfo);
    setModalLogIn(true);
  };

  const handleCloseModal = () => {
    onClose();
    setModalLogIn(false);
  };

  return (
    <s.ModalOverlay>
      <s.ModalContent>
        <s.HeaderContainer>
          <s.LogoImageIcon src={Logo} alt="image" />
          <s.CloseButton onClick={handleCloseModal}>X</s.CloseButton>
        </s.HeaderContainer>
        <s.WelcomeText>Pinterest에 오신 것을 <br />환영합니다</s.WelcomeText>
        <s.FormDiv>
          <s.LoginText>이메일</s.LoginText>
          <s.Input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="이메일"
          />
          <s.LoginText>비밀번호</s.LoginText>
          <s.Input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="비밀번호"
          />
          <s.Button onClick={handleModalLogin}>로그인</s.Button>
          <s.OrText>또는</s.OrText>
          <s.FacebookButton>Facebook으로 로그인하기</s.FacebookButton>
          <s.GoogleButton>Google로 로그인하기</s.GoogleButton>
        </s.FormDiv>
      </s.ModalContent>
    </s.ModalOverlay>
  );
};

export default LoginModal;

//리다이렉션 쏴서 토큰 받아서 쿠키 저장
