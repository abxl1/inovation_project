import React, { useState } from "react";
import HeaderLogin from "./HeaderLogin";
import HeaderLogout from "./HeaderLogout";
import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import LoginModal from "../../components/Modals/LoginModal";

import { Cookies } from "react-cookie";
const cookies = new Cookies();

export default function Header(props) {
  const [isLogIn, setLogIn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // 쿠키 확인
  const hasCookieToken = cookies.get("accessToken");

  const handleLogin = () => {
    setLogIn(true);
  };

  const handleLogout = () => {
    setLogIn(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };


  const handleModalLogin = () => {
    setLogIn(true);
    setModalOpen(false);
  };

  return (
    <HeaderContainer>
      {hasCookieToken !== undefined ? (
        <HeaderLogin onLogout={handleLogout} />
      ) : (
        <HeaderLogout
          onLogin={handleLogin}
          onModalOpen={handleModalOpen}
          onModalLogin={handleModalLogin}
        />
      )}
      {isModalOpen && <LoginModal onClose={handleModalClose} onLogin={handleModalLogin} />}
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  box-sizing: border-box;  
  position: absolute;
  top:0;  
  width: 100%;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 6px;
  background-color: white;
  color: black;
  overflow: hidden;
  z-index: 1;
`;

