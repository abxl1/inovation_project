import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./style";

import { ReactComponent as Smile } from "../../assets/icons/smile.svg";
import { ReactComponent as Down } from "../../assets/icons/triangleDown.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";

import EmojiPicker from "emoji-picker-react";
import PinImage from "./PinImage";
import PinHeadNav from "./PinHeadNav";
import PinMakerInfo from "./PinMakerInfo";
import PinReplyList from "./PinReplyList";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getPinbyId } from "../../axios/pinDetail";

export default function PinDetailPage() {
  const [showEmojiBox, setShowEmojiBox] = useState(false);
  const [content, setContent] = useState("");
  const emojiPickerRef = useRef(null);

  // params로 id 받아오기
  const { pinid } = useParams();

  // 통신
  const { data } = useQuery(`pin${pinid}`, getPinbyId(pinid));

  const handleOutsideClick = (event) => {
    if (
      emojiPickerRef.current &&
      !emojiPickerRef.current.contains(event.target)
    ) {
      setShowEmojiBox(false);
    }
  };

  const handleTextareaChange = (event) => {
    const inputValue = event.target.value;
    setContent(inputValue);
  };

  function autoResize() {
    const textarea = document.getElementById("contentTextarea");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  const onClickEmojiButtonHandler = (event) => {
    event.stopPropagation();
    setShowEmojiBox((prevShowEmojiBox) => !prevShowEmojiBox);
  };

  function onClickSelectedEmoji(emojiData) {
    setContent(content + emojiData.emoji);
    setShowEmojiBox(false);
  }

  useEffect(() => {
    const sectionElement = document.getElementById("pin-desc");
    const pinImageElement = document.getElementById("pin-image");

    if (pinImageElement && sectionElement) {
      const pinImgHeight = pinImageElement.clientHeight;
      sectionElement.style.maxHeight = `${pinImgHeight}px`;
    }

    // textarea 창 크기
    autoResize();

    // 바깥 영역 클릭 이벤트 리스너 추가
    document.addEventListener("click", handleOutsideClick);

    // 컴포넌트가 unmount될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [data]); // data가 변경될 때에만 useEffect를 다시 실행

  // 통신 처리
  if (!data) {
    return <div>Loading...</div>; // 데이터가 아직 로드되지 않았을 때 로딩 표시
  }

  // 핀 디테일
  const pin = data.data;
  console.log(pin);

  return (
    <Styled.Detailmain>
      <Styled.DetailArticle>
        <PinImage id="pin-image" imageUrl={pin.imageUrl} />
        <section id="pin-desc">
          <PinHeadNav pinid={pin.pin_id} />
          <Styled.DetailContentBox>
            <Styled.DetailPinInfo>
              <h1>{pin.title}</h1>
              <p>{pin.content}</p>
            </Styled.DetailPinInfo>
            <PinMakerInfo nickname={pin.nickname} />
            <Styled.DetailReplyBox>
              {false ? (
                <div>댓글</div>
              ) : (
                <div>
                  댓글
                  <button>
                    <ArrowDown />
                  </button>
                </div>
              )}
              {false ? (
                <p>
                  아직 댓글이 없습니다. 대화를 시작하려면 하나를 추가하세요.
                </p>
              ) : (
                <PinReplyList comments={pin.comments} />
              )}
            </Styled.DetailReplyBox>
          </Styled.DetailContentBox>
          <Styled.DetailAddBox>
            <div>
              <div className="row">
                {false ? <h3>어떠셨나요?</h3> : <h3>댓글 3개</h3>}
                <div>🤍</div>
              </div>
              <div className="row">
                <figure>
                  <img src="" alt="" />
                </figure>
                <Styled.DetailAddInputBox>
                  <textarea
                    id="contentTextarea"
                    value={content}
                    onInput={autoResize}
                    onChange={handleTextareaChange}
                    placeholder="댓글 추가"
                    rows="1"
                  />
                  <button
                    onClick={onClickEmojiButtonHandler}
                    className={showEmojiBox ? "emojiButtonActive" : ""}
                  >
                    <Smile fill="gray" />
                  </button>
                  {showEmojiBox && (
                    <div id="emojiBox" ref={emojiPickerRef}>
                      <Down />
                      <EmojiPicker
                        onEmojiClick={onClickSelectedEmoji}
                        width="250px"
                        height="300px"
                      />
                    </div>
                  )}
                </Styled.DetailAddInputBox>
              </div>
            </div>
          </Styled.DetailAddBox>
        </section>
      </Styled.DetailArticle>
    </Styled.Detailmain>
  );
}
