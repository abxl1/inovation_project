import React, { useState } from "react";
import * as s from "./style";
import { ReactComponent as AddArrow } from "../../assets/icons/addArrow.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getProfile, getSavedPins } from "../../axios/profile";

export default function MyPage() {
  const [isCreatedSelected, setIsCreatedSelected] = useState(false);
  const [isSavedSelected, setIsSavedSelected] = useState(true);
  const [isClicked, setIsClicked] = useState(false);

  // params로 id 받아오기
  const { nickname } = useParams();

  // 통신
  const { data } = useQuery(`user ${nickname}`, getProfile(nickname));

  const navigate = useNavigate();

  const createdToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isCreatedSelected) {
      setIsCreatedSelected(true);
      setIsSavedSelected(false);
    }
  };

  const savedToggleHandler = () => {
    // 기존 상태가 선택된 상태일 때에만 토글되지 않도록 변경
    if (!isSavedSelected) {
      setIsSavedSelected(true);
      setIsCreatedSelected(false);
    }
  };

  // 저장된 핀 받아오기
  const { data: savedPins, refetch: refetchSavedPins } = useQuery(
    `getSavedPins`,
    getSavedPins(nickname),
    {
      enabled: isSavedSelected, // Fetch data only when isSavedSelected is true
    }
  );
  console.log("저장된 핀", savedPins);

  const clickedToggleHandler = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
    navigate("/make");
  };

  const getRandomHeight = () => {
    return Math.floor(Math.random() * (700 - 200 + 1) + 200) + "px"; // 200px부터 700px 사이의 랜덤 높이
  };

  // 통신 처리
  if (!data) {
    return <div>Loading...</div>; // 데이터가 아직 로드되지 않았을 때 로딩 표시
  }

  const profile = data.data;
  const createdPins = profile.createdPin;
  console.log(data);

  return (
    <s.ProfileOuter>
      <s.ProfileContentBox>
        <s.ProfileImg src="" alt="" />
        <s.ProfileName>
          {profile.firstName} {profile.lastName}
        </s.ProfileName>
        <s.ProfileId>{profile.nickname}</s.ProfileId>
        <s.ContentContainer>
          <s.ProfileComment>핀터레스트 처음 써 봅니다.</s.ProfileComment>
        </s.ContentContainer>
        <div>팔로잉 0명</div>
        <s.ProfileBtnSet>
          {profile.myPage ? (
            <>
              <s.ProfileBtn>공유</s.ProfileBtn>
              <s.ProfileBtn>
                <Link to={`../edit/${nickname}`}>프로필 수정</Link>
              </s.ProfileBtn>
            </>
          ) : (
            <>
              <s.ProfileBtn>메세지</s.ProfileBtn>
              <s.ProfileBtn>팔로우</s.ProfileBtn>
            </>
          )}
        </s.ProfileBtnSet>
      </s.ProfileContentBox>

      <s.PinViewBox>
        <div>
          <s.CreatedPin
            isSelected={isCreatedSelected}
            onClick={createdToggleHandler}
          >
            생성됨
          </s.CreatedPin>
          <s.SelectedBar isSelected={isCreatedSelected}></s.SelectedBar>
        </div>
        <div>
          <s.CreatedPin
            isSelected={isSavedSelected}
            onClick={savedToggleHandler}
          >
            저장됨
          </s.CreatedPin>
          <s.SelectedBar isSelected={isSavedSelected}></s.SelectedBar>
        </div>
      </s.PinViewBox>

      <s.ContentsWrap>
        <s.PinMakeBtn onClick={clickedToggleHandler} isClicked={isClicked}>
          <AddArrow style={{ fill: isClicked ? "#efefef" : "#000" }} />
        </s.PinMakeBtn>
      </s.ContentsWrap>

      <s.PinCardContainer>
        {!isCreatedSelected &&
          !isSavedSelected && ( // 선택이 아무것도 안된 경우
            <>
              <s.PinCard height={getRandomHeight()}>card1 생성됨</s.PinCard>
              <s.PinCard height={getRandomHeight()}>card2 생성됨</s.PinCard>
              <s.PinCard height={getRandomHeight()}>card3 생성됨</s.PinCard>
              {/* ... 생성됨 버튼에 따른 다른 카드들 */}
            </>
          )}

        {isCreatedSelected && ( // 생성됨 버튼이 선택된 경우
          <>
            {createdPins.map((createdpin) => (
              <s.PinCard key={createdpin.pin_id} />
            ))}
          </>
        )}

        {isSavedSelected && ( // 저장됨 버튼이 선택된 경우
          <>
            <s.PinCard height={getRandomHeight()}>card1 저장됨</s.PinCard>
            <s.PinCard height={getRandomHeight()}>card2 저장됨</s.PinCard>
            <s.PinCard height={getRandomHeight()}>card3 저장됨</s.PinCard>
            {/* ... 저장됨 버튼에 따른 다른 카드들 */}
          </>
        )}
      </s.PinCardContainer>
    </s.ProfileOuter>
  );
}
