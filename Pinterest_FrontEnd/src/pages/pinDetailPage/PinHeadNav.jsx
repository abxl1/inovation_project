import React from "react";
import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import { ReactComponent as Share } from "../../assets/icons/share.svg";
import { ReactComponent as Link } from "../../assets/icons/link.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";
import * as Styled from "./style";
import { useMutation } from "react-query";
import { savePin } from "../../axios/pinDetail";

function PinHeadNav({ pinid }) {
  const mutation = useMutation(savePin, {
    onSuccess: () => {
      alert("핀을 성공적으로 저장했습니다!");
    },
    onError: () => {
      alert("핀 저장에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const handleSave = () => {
    mutation.mutate(pinid);
  };

  return (
    <Styled.DetailHeadNav>
      <div>
        <button>
          <Dots stroke="black" />
        </button>
        <button>
          <Share />
        </button>
        <button>
          <Link />
        </button>
      </div>
      <button onClick={handleSave}>
        <p>저장</p>
        <ArrowDown fill="white" />
      </button>
    </Styled.DetailHeadNav>
  );
}

export default PinHeadNav;
