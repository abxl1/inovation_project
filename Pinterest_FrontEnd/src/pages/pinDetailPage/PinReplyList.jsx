import React from "react";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import * as Styled from "./style";

function PinReplyList({ comments }) {
  return (
    <Styled.DetailReplyList>
      {comments.map((comment) => (
        <Styled.DetailReplyItem key={comment.commentId}>
          <figure>
            <div>
              <img src="" alt="" />
            </div>
            <figcaption>
              <div>
                <span>작성자</span>
                <span>댓글내용</span>
              </div>
              <div>
                <span>5주 전</span>
                <button>🤍</button>
                <button>
                  <Dots />
                </button>
              </div>
            </figcaption>
          </figure>
        </Styled.DetailReplyItem>
      ))}
    </Styled.DetailReplyList>
  );
}

export default PinReplyList;

// {allPins.map((pin) => (
//   <PinCard
//     key={pin.pin_id}
//     onClick={() => navigate(`/detail/${pin.pin_id}`)}
//   >
//     <img src={pin.imageUrl} alt="하강~" />
//     <SaveButton onClick={() => saveBtnClickHandler}>저장</SaveButton>
//   </PinCard>
// ))}
