import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";



// SignUpModal style

const ModalOverlay = styled.div`
  /* 오버레이를 화면 전체를 덮도록 설정합니다. */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명한 검은 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 484px;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WelcomeText = styled.div`
  font-size: xx-large;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px 0px 0px 0px;
`;

const TryText = styled.div`
  font-size: medium;
  padding: 10px 0px 0px 0px;
  text-align: center;
`;
const OrText = styled.div`
  font-size: small;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-weight: bold;
`;

const LoginText = styled.div`
  font-size: small;
  padding: 10px 0px 10px 0px;
  display: flex;
  text-align: left;
`;

const Input = styled.input`
  width: 268px;
  height: 35px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 16px;
  border-color: #dfdfdf;
  &:hover {
    border-color: gray;
  }
`;

const Button = styled.button`
  width: 268px;
  height: 40px;
  margin: 20px auto;
  background-color: red;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

const FacebookButton = styled.button`
  width: 268px;
  height: 40px;
  margin: 10px auto;
  background-color: #3b5998;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
`;

const GoogleButton = styled.button`
  width: 268px;
  height: 40px;
  margin: auto;
  background-color: #4285f4; /* Google blue color */
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  display: block; /* Ensure the button takes the full width of its container */
`;

const CloseButton = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-top: 10px;
`;

const DatePickerInput = styled(DatePicker)`
  width: 268px;
  height: 35px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 16px;
  border-color: #dfdfdf;
  &:hover {
    border-color: gray;
  }
`;

const LogoImageIcon = styled.img`
  width: 40px;
  height: 38px;
  margin-bottom: auto;
  margin-top: 10px;
`;


// LogInModal style

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 20px;
`;

const ForgotText = styled.div`
    font-size: small;
    font-weight: bold;
    padding: 10px 0px 10px 0px;
    &:hover {
    text-decoration: underline;}
    cursor: pointer;
`;

export {

  ModalOverlay,
  ModalContent,
  HeaderContainer,
  WelcomeText,
  TryText,
  OrText,
  LoginText,
  Input,
  Button,
  FacebookButton,
  GoogleButton,
  CloseButton,
  DatePickerInput,
  LogoImageIcon,

  FormDiv,
  ForgotText,
}