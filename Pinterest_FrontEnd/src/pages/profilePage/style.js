import { styled } from "styled-components";

const ProfileOuter = styled.div`
  margin-top: 100px;
`

const ContentsWrap = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: 20px;
  padding-bottom: 50px;
`

const ProfileContentBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  margin:15px 15px 40px 15px;
`

const ProfileImg = styled.div`
  width: 120px;
  height: 120px;
  border: 1px solid black;
  border-radius: 60px;
  background-color: black;
  cursor: pointer;
`

const ProfileName = styled.div`
  font-size: 35px;
  font-weight: bold;
`

const ProfileId = styled.div`
  color: #7a7a7a;
`

const ContentContainer = styled.div`
  display: flex;
`

const ProfileWeb = styled.div`
  margin-right: 5px;
  a {
    text-decoration: none; 
    font-size: 15px;
    font-weight: bold;
    color: black;
    &:hover {
      text-decoration: underline; 
    }
  }
`

const ProfileComment = styled.div`
  margin-left: auto;
`

const ProfileBtnSet = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  gap: 8px;
`

const ProfileBtn = styled.button`
  width: auto;
  height: auto;
  border: none;
  border-radius: 25px;
  padding: 15px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`

const PinMakeBtn = styled.div`
    width: 40px;
    height: 40px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
    background-color:${(props) => props.isClicked ?'#000' : '#efefef'};
    border-radius: 50%;
    };
`

const PinViewBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: row;
  margin-left: -8px;
  margin-right: -8px;
`


const CreatedPin = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin: 15px 10px 0 10px;
  padding: 12px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? 'none' : '#efefef')};
  }
`;

const SelectedBar = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 60%;
  height: 3px;
  border-radius: 5px;
  background: ${(props) => (props.isSelected ? "black" : "none")};
  margin: 0 auto; // 가로 방향으로 중앙 정렬

  &:hover {
    background: none; // 선택된 상태에서 hover 효과 없음
  }
`;



const PinCardContainer = styled.div`
  column-width: 230px;
  margin: 10px 50px 0 50px;
  gap: 20px;
`

const PinCard = styled.div`
  width: 240px;
  border: none;
  border-radius: 12px;
  height: ${({ height }) => height};
  background-color: lightgray;
  margin: 12px;
  display: inline-block;
  overflow: hidden;
  img {
    max-width: 100%;
  }
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export {
  ProfileOuter,
  ContentsWrap,
  ProfileContentBox,
  ProfileImg,
  ProfileName,
  ProfileId,
  ContentContainer,
  ProfileWeb,
  ProfileComment,
  ProfileBtnSet,
  ProfileBtn,
  PinMakeBtn,
  PinViewBox,
  CreatedPin,
  SelectedBar,
  PinCardContainer,
  PinCard,
};
