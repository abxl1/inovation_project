import React, { useState } from "react";
import * as s from './style';
import Logo from "../../assets/icons/PinterestLogoLogin.png";
import { signUp } from "../../axios/auth";
import { useNavigate } from "react-router";
import { useMutation } from "react-query";


const SignUpModal = ({ onClose, onSignUp }) => {
  const [isModalLogIn, setModalLogIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [checkPassword, setCheckPassword] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

  const navigate = useNavigate();

  const mutation = useMutation(signUp, {
    onSuccess: (data) => {
      if (data) {
        alert("회원가입 성공!");
      }
    },
    onError: (error) => {
      alert("회원가입 오류입니다.", error);
    },
  });

  const handleModalLogin = async () => {
    const signUpData = {
      email: email,
      password: password,
      birthday: dateOfBirth, // # 생일 포맷 바꾸기
    };

    mutation.mutate(signUpData);

    setModalLogIn(true);
  };

  const handleCloseModal = () => {
    onClose();
    setModalLogIn(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDateOfBirthChange = (date, e) => {
    console.log(date);
    console.log(e.target);
    setDateOfBirth(date);
  };

  return (
    <s.ModalOverlay>
      <s.ModalContent>
        <s.HeaderContainer>
          <s.LogoImageIcon src={Logo} alt="image" />
          <s.CloseButton onClick={handleCloseModal}>X</s.CloseButton>
        </s.HeaderContainer>
        <s.WelcomeText>
          Pinterest에 오신 것을 <br />
          환영합니다
        </s.WelcomeText>
        <s.TryText>시도해 볼 만한 새로운 아이디어 찾기</s.TryText>
        <div>
          <s.LoginText>이메일</s.LoginText>
          <s.Input
            type="text"
            onChange={handleEmailChange}
            value={email}
            placeholder="이메일"
          />
          <s.LoginText>비밀번호</s.LoginText>
          <s.Input
            type="password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="비밀번호"
          />
          <s.LoginText>생년월일</s.LoginText>
          <s.DatePickerInput
            selected={dateOfBirth}
            onChange={handleDateOfBirthChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="생년월일을 선택하세요"
          />
          <s.Button type="submit" onClick={handleModalLogin}>
            계속하기
          </s.Button>
          <s.OrText>또는</s.OrText>
          <s.FacebookButton>Facebook으로 로그인하기</s.FacebookButton>
          <s.GoogleButton>Google로 로그인하기</s.GoogleButton>
        </div>
      </s.ModalContent>
    </s.ModalOverlay>
  );
};

export default SignUpModal;
