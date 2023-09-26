import { keyframes, styled } from "styled-components";
import BackgroundImg from "../../assets/img/backgroundpage.png"


const Main = styled.div`
  position: relative;
  display: flex;
  flex-direction: row; 
  align-items: center;
  justify-content: center; /* Center horizontally */
  width: 100%;
  height: 100%;
  background: ${({ $bgColor }) => $bgColor};
`

const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
// 버튼 애니메이션
const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
`;

// 배경색 바뀌는 애니메이션
const changeColor = keyframes`
  0% { background-color: #b02929; }
  33% { background-color: #006500; }
  67% { background-color: #000069; }
  100% { background-color: #b02929; }
`;

const MoveBtn = styled.div`
  animation:${changeColor} 15s steps(1, end) infinite, 
            ${moveUpDown} 2s linear infinite;
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
`

const FollowBtn = styled.button`
  bottom: 0; 
  background: #fffd92; 
  height: 8vh;
  width: 100%;
  box-sizing: border-box; 
  border: none;
  

  & > div {
    width: 100%;
    box-sizing: border-box; 
    font-weight: bold;
    cursor: pointer;
  }
`

const NestedMain = styled.div`
  height: 100%;
  overflow: hidden;
`;

const AutoSlides = styled.div`
  display: flex;
  width: 400%;
  animation: autoSlideAnimation 12s linear infinite;
  @keyframes autoSlideAnimation {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-100%); }
  }
`;

const AutoSlide = styled.div`
  flex: 1;
  background-color: ${({ bgColor }) => bgColor};
`;

const SlideImgContainer = styled.div`
  width: 50%;
  height: 100%;
`

const HalfImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

// const SemiTransparentBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5); 
//   z-index: -1;
// `;

const BackImg = styled.img`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-position: center;
  filter: brightness(50%);
`

const SlideTextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
`
const IntroText = styled.div`
  font-size: 60px;
  font-weight: bolder;
  text-align: center;
    color: ${(props) => props.color};
`

const HalfText = styled.div`
  font-size: x-large;
  margin: 20px auto;
    color: ${(props) => props.color};
`

const NavigationButton = styled.button`
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 20px;
  color: white;
`;

export {
  Main,
  BtnWrap,
  moveUpDown,
  changeColor,
  MoveBtn,
  FollowBtn,
  NestedMain,
  AutoSlides,
  AutoSlide,
  SlideImgContainer,
  HalfImg,

  BackImg,
  SlideTextContainer,
  IntroText,
  HalfText,
  NavigationButton,
  
}