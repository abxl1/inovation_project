import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { ReactComponent as Smile } from "../../assets/icons/smile.svg";
import { ReactComponent as Down } from "../../assets/icons/triangleDown.svg";

import * as Styled from "./style";

export function PinTextarea({ content, setContent }) {
  const [showEmojiBox, setShowEmojiBox] = useState(false);
  const emojiPickerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    autoResize();
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

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
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  const onClickEmojiButtonHandler = (event) => {
    event.stopPropagation();
    setShowEmojiBox((prevShowEmojiBox) => !prevShowEmojiBox);
  };

  function onClickSelectedEmoji(emojiData) {
    setContent(content + emojiData.emoji);
    setShowEmojiBox(false);
  }

  return (
    <Styled.MakePinInputBox $isEmpty={content === "" ? true : false}>
      <textarea
        id="contentTextarea"
        value={content}
        onInput={autoResize}
        onChange={handleTextareaChange}
        placeholder="사람들에게 회원님의 핀에 대해 설명해 보세요"
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
    </Styled.MakePinInputBox>
  );
}
