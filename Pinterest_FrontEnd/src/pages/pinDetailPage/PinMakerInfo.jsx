import React from "react";
import * as Styled from "./style";
import { Link } from "react-router-dom";

function PinMakerInfo({ nickname }) {
  return (
    <Styled.DetailUserInfo>
      <figure>
        <div>
          <img src="" alt="" />
        </div>
        <figcaption>
          <Link to={`../profile/${nickname}`}>{nickname}</Link>
          <p>팔로워 수 700만명</p>
        </figcaption>
      </figure>
      <button>팔로우</button>
    </Styled.DetailUserInfo>
  );
}

export default PinMakerInfo;
