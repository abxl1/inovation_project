import React from "react";
import { useState } from "react";
import { styled } from "styled-components";

export default function ProfileEditPage() {

  const [isProfieSelected, setIsProfieSelected] = useState(true);
  const [isPersonalSelected, setIsPersonalSelected] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);

  const profileToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isProfieSelected) {
      setIsProfieSelected(true);
      setIsPersonalSelected(false);
    }
  };

  const personalToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isPersonalSelected) {
      setIsPersonalSelected(true);
      setIsProfieSelected(false);
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setIsInputFilled(inputValue.trim() !== "");
  };

  return (
    <>
      <EditOuter>
        <ContentOuter>
          <EditNav>
            <div>
              <div isSelected={isProfieSelected} onClick={profileToggleHandler}>
                공개 프로필
              </div>
              <SelectedBar isSelected={isProfieSelected}></SelectedBar>
            </div>
            <div>
              <div
                isSelected={isPersonalSelected}
                onClick={personalToggleHandler}
              >
                개인 정보
              </div>
              <SelectedBar isSelected={isPersonalSelected}></SelectedBar>
            </div>
          </EditNav>

          <EditSection>
            <OpenProfileEdit>
              <div
                style={{ textAlign: "left", fontWeight: 600, fontSize: "28px" }}
              >
                공개 프로필
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontWeight: 400,
                  fontSize: "16px",
                  marginTop: "8px",
                }}
              >
                회원님의 프로필을 방문하려는 사용자에게 다음 정보가 표시됩니다.
              </div>

              <div
                style={{
                  marginTop: "32px",
                  marginBottom: "4px",
                  textAlign: "left",
                }}
              >
                사진
              </div>
              <div style={{ alignItems: "center", flexDirection: "row" }}>
                <div style={{ marginTop: "32px", marginBottom: "4px" }}>
                  img
                </div>
                <div style={{ marginTop: "32px", marginBottom: "4px" }}>
                  변경
                </div>
              </div>

              <div>
                <div>이름</div>
                <input onChange={handleInputChange} />
                <div>성</div>
                <input onChange={handleInputChange} />
              </div>

              <div>
                <div>소개</div>
                <input
                  placeholder="회원님의 이야기를 들려주세요"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <div>웹사이트</div>
                <input
                  placeholder="회원님의 사이트로 트래픽을 유도하는 링크를 추가하세요"
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <div>사용자 이름</div>
                <input
                  placeholder="다른 사람들이 회원님을 찾을 수 있도록 잘 선택하세요"
                  onChange={handleInputChange}
                />
                <div>{`www.pinterest.com/`}</div>
              </div>
            </OpenProfileEdit>

            <PersonalInfoEdit>
              <div
                style={{ textAlign: "left", fontWeight: 600, fontSize: "28px" }}
              >
                개인 정보
              </div>
              <div
                style={{ textAlign: "left", fontWeight: 400, fontSize: "16px" }}
              >
                기본 개인 정보를 수정하여 추천 콘텐츠의 품질을 높이세요. 이
                정보는 비공개이며 회원님의 공개 프로필에 표시되지 않습니다.
              </div>

              <div>
                <div>생년월일</div>
                <input placeholder="MM/DD/YYYY" />
              </div>

              <div>
                <div>성별</div>
                <div>남성</div>
                <div>여성</div>
                <div>둘 다 아님</div>
                <input placeholder="원하는 성별을 입력하세요." />
              </div>

              <div>
                <div>국가/지역</div>
                <div>국가/지역 select</div>
              </div>

              <div>
                <div>언어</div>
                <div>언어 select</div>
              </div>
            </PersonalInfoEdit>
          </EditSection>
        </ContentOuter>
        <FooterSection>
          <SaveBtn onClick={handleReset} >재설정</SaveBtn>
          <SaveBtn isWritingComplete={isInputFilled}>저장</SaveBtn>
          <div></div>
        </FooterSection>
      </EditOuter>
    </>
  );
}

const EditOuter = styled.div`
  padding-top: 80px;
  flex-direction: row;
`

const ContentOuter = styled.div`
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`

const EditNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  width: 25%;
  
  
  & > div {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: fit-content;
    
    div:first-child{
      width: fit-content;
      box-sizing: border-box;
      padding: 10px;
      font-weight:600;
      
      &:hover {
        background: ${(props) => (props.isSelected ? "none" : "#efefef")};
        border-radius: 10px;
      }
    }
  }
`

const SelectedBar = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 1px 0;
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  background: ${(props) => (props.isSelected ? "black" : "none")};
`

const EditSection = styled.div`
  background-color: green;
  max-width: 488px;
  box-sizing: border-box;
  width: 75%;
`

const OpenProfileEdit = styled.div`
  background-color: pink;
`

const PersonalInfoEdit = styled.div`
  background-color: blueviolet;
`

const FooterSection = styled.div`
  background-color: bisque;
`

const SaveBtn = styled.div`
  cursor: pointer;
  padding: 10px;
  border: box-sizing;
  background-color: ${({ isWritingComplete }) =>
    isWritingComplete ? "red" : "transparent"};
  color: ${({ isWritingComplete }) => (isWritingComplete ? "white" : "black")};
  border-radius: 12px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ isWritingComplete }) =>
    isWritingComplete ? "darkred" : "gray"};
    color: white;
  }
`;