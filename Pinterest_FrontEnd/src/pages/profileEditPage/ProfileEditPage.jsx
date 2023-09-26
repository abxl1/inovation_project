import React from "react";
import { useState } from "react";
import * as s from "./style";
import { useQuery } from "react-query";
import { getProfileEdit } from "../../axios/profile";

export default function ProfileEditPage() {
  const [isProfileSelected, setIsProfileSelected] = useState(true);
  const [isPersonalSelected, setIsPersonalSelected] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);

  const [dateOfBirth, setDateOfBirth] = useState(null);

  const [gender, setGender] = useState("");
  const [customGender, setCustomGender] = useState("");

  const [name, setName] = useState("");

  // 통신
  // const { data } = useQuery("getProfileEdit", getProfileEdit);

  const profileToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isProfileSelected) {
      setIsProfileSelected(true);
      setIsPersonalSelected(false);
    }
  };

  const personalToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isPersonalSelected) {
      setIsPersonalSelected(true);
      setIsProfileSelected(false);
    }
  };

  const handleReset = () => {
    window.location.reload();
  };

  const handleDateOfBirthChange = (date) => {
    setDateOfBirth(date);
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setName(inputValue);
    setIsInputFilled(inputValue.trim() !== "");
  };

  // 통신 처리
  // if (!data) {
  //   return <div>Loading...</div>; // 데이터가 아직 로드되지 않았을 때 로딩 표시
  // }

  // const profileInfo = data.data;
  // console.log(profileInfo);

  return (
    <>
      <s.EditOuter>
        <s.ContentOuter>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "51%",
            }}
          >
            <s.EditNav>
              <div>
                <div
                  isSelected={isProfileSelected}
                  onClick={profileToggleHandler}
                >
                  공개 프로필
                </div>
                <s.SelectedBar isSelected={isProfileSelected}></s.SelectedBar>
              </div>
              <div>
                <div
                  isSelected={isPersonalSelected}
                  onClick={personalToggleHandler}
                >
                  개인 정보
                </div>
                <s.SelectedBar isSelected={isPersonalSelected}></s.SelectedBar>
              </div>
            </s.EditNav>

            <s.EditSection>
              {isProfileSelected && (
                <>
                  <s.OpenProfileEdit>
                    <div
                      style={{
                        textAlign: "left",
                        fontWeight: 600,
                        fontSize: "28px",
                      }}
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
                      회원님의 프로필을 방문하려는 사용자에게 다음 정보가
                      표시됩니다.
                    </div>
                    <s.TextAlign style={{ marginBottom: "0" }}>
                      사진
                    </s.TextAlign>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <div
                        style={{
                          margin: "0 15px 0 0",
                          width: "75px",
                          height: "75px",
                          borderRadius: "40px",
                          backgroundColor: "black",
                        }}
                      ></div>
                      <div
                        style={{
                          fontWeight: "600",
                          minWidth: "60px",
                          minHeight: "40px",
                          boxSizing: "border-box",
                          backgroundColor: "#efefef",
                          borderRadius: "25px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        변경
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <s.TextAlign>이름</s.TextAlign>
                        <s.Input
                          onChange={handleInputChange}
                          style={{ width: "208px" }}
                        />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <s.TextAlign>성</s.TextAlign>
                        <s.Input
                          onChange={handleInputChange}
                          style={{ width: "208px" }}
                        />
                      </div>
                    </div>

                    <div>
                      <s.TextAlign>소개</s.TextAlign>
                      <s.Input
                        placeholder="회원님의 이야기를 들려주세요"
                        onChange={handleInputChange}
                        style={{ height: "100px" }}
                      />
                    </div>

                    <div>
                      <s.TextAlign>웹사이트</s.TextAlign>
                      <s.Input
                        placeholder="회원님의 사이트로 트래픽을 유도하는 링크를 추가하세요"
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <s.TextAlign>사용자 이름</s.TextAlign>
                      <s.Input
                        placeholder="다른 사람들이 회원님을 찾을 수 있도록 잘 선택하세요"
                        onChange={handleInputChange}
                      />
                      <div
                        style={{
                          paddingTop: "5px",
                          wordWrap: "break-word",
                          fontSize: "12px",
                          color: "#5c5c5c",
                        }}
                      >{`www.pinterest.com/${name}`}</div>
                    </div>
                  </s.OpenProfileEdit>
                </>
              )}

              {isPersonalSelected && (
                <>
                  <s.OpenProfileEdit>
                    <div
                      style={{
                        textAlign: "left",
                        fontWeight: 600,
                        fontSize: "28px",
                      }}
                    >
                      개인 정보
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "20px",
                      }}
                    >
                      기본 개인 정보를 수정하여 추천 콘텐츠의 품질을 높이세요.
                      이 정보는 비공개이며 회원님의 공개 프로필에 표시되지
                      않습니다.
                    </div>

                    <div>
                      <s.TextAlign>생년월일</s.TextAlign>
                      <s.DateInput
                        placeholderText="MM/DD/YYYY"
                        selected={dateOfBirth}
                        dateFormat="yyyy-MM-dd"
                        onChange={handleDateOfBirthChange}
                      />
                    </div>

                    <s.TextAlign style={{ marginBottom: "0" }}>
                      성별
                    </s.TextAlign>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                      }}
                    >
                      <s.OtherLavel for="male">
                        <s.OtherRadio
                          type="radio"
                          value="male"
                          checked={gender === "male"}
                          onChange={() => setGender("male")}
                        />
                        남성
                      </s.OtherLavel>

                      <s.OtherLavel for="female">
                        <s.OtherRadio
                          type="radio"
                          value="male"
                          checked={gender === "female"}
                          onChange={() => setGender("female")}
                        />
                        여성
                      </s.OtherLavel>

                      <s.OtherLavel for="other">
                        <s.OtherRadio
                          type="radio"
                          value="other"
                          checked={gender === "other"}
                          onChange={() => setGender("other")}
                        />
                        둘 다 아님
                      </s.OtherLavel>

                      {gender === "other" && (
                        <div
                          style={{
                            display: "wrap",
                            flexDirection: "wrap",
                            justifyContent: "flex-end",
                          }}
                        >
                          <s.Input
                            maxLength={500}
                            placeholder="원하는 성별을 입력하세요."
                            value={customGender}
                            onChange={(e) => setCustomGender(e.target.value)}
                          />
                          <div style={{ fontSize: "12px", marginTop: "10px" }}>
                            {customGender.length}/500
                          </div>
                        </div>
                      )}
                    </div>

                    {/* <div>
                  <s.TextAlign>국가/지역</s.TextAlign>
                  <div>국가/지역 select</div>
                </div>

                <div>
                  <s.TextAlign>언어</s.TextAlign>
                  <div>언어 select</div>
                </div> */}
                  </s.OpenProfileEdit>
                </>
              )}
            </s.EditSection>
          </div>
          <div
            style={{
              backgroundColor: "",
              width: "49%",
            }}
          ></div>
        </s.ContentOuter>
      </s.EditOuter>
      <s.FooterSection>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "50%" }}
        >
          <s.SaveBtn onClick={handleReset}>재설정</s.SaveBtn>
          <s.SaveBtn isWritingComplete={isInputFilled}>저장</s.SaveBtn>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", width: "50%" }}
        ></div>
      </s.FooterSection>
    </>
  );
}
