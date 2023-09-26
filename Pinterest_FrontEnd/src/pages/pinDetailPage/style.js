import { styled } from "styled-components";

export const Detailmain = styled.main`
  display: flex;
  justify-content: center;
  margin-bottom: 300px;
  padding-top: 80px;
`;

export const DetailArticle = styled.article`
  display: flex;
  width: 65%;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  & > figure {
    flex: 1;
    overflow: hidden;
    border-radius: 30px 0 0 30px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
  section {
    position: relative;
    box-sizing: border-box;
    flex: 1;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 0 30px 0 30px;
    height: 100%;
    min-height: 600px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    border-radius: 30px;

    & > figure {
      border-radius: 30px 30px 0 0;
    }

    section {
      border-radius: 0 0 30px 30px;
    }
  }
`;

export const DetailHeadNav = styled.nav`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 0 30px;
  background: #ffffff;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: 700;
    background: var(--main-Color);
    padding: 8px;
    border-radius: 20px;
    border: none;
    cursor: pointer;

    p {
      padding: 0 5px;
    }

    &:hover {
      filter: brightness(90%);
    }
  }

  div {
    display: flex;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      border: none;
      cursor: pointer;
      border-radius: 50%;
      background: none;

      &:hover {
        background: rgba(231, 231, 231, 0.7); //var(--border-Color)
      }
    }
  }

  svg {
    width: 25px;
    height: 25px;
  }

  button:last-child {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const DetailContentBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: 40px;
  padding: 30px;
`;

export const DetailPinInfo = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;

  h1 {
    font-size: 30px;
    font-weight: 700;
  }
`;

export const DetailUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  figure {
    display: flex;
    align-items: center;
    gap: 10px;

    div {
      min-width: 40px;
      min-height: 40px;
      border-radius: 50%;
      background: black;
    }

    figcaption {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

export const DetailReplyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > button {
    width: 100px;
  }
`;

export const DetailReplyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DetailReplyItem = styled.li`
  figure {
    display: flex;
    align-items: center;
    gap: 10px;

    & > div {
      min-width: 35px;
      min-height: 35px;
      border-radius: 50%;
      background: black;
    }

    figcaption {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
  }
`;

export const DetailAddBox = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 30px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-top: 1px solid var(--border-Color);
  padding-top: 20px;

  .row:first-child {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    h3 {
      font-size: 18px;
      font-weight: 700;
    }
  }

  .row:last-child {
    display: flex;
    align-items: center;
    gap: 10px;

    figure {
      min-width: 40px;
      min-height: 40px;
      border-radius: 50%;
      background: black;
    }
  }
`;

export const DetailAddInputBox = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  background: #e1e1e1;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* 입력값이 있을 때 테두리 스타일 적용 */
  &:not(:empty) {
    outline: 1px solid var(--border-Color);
  }

  & > textarea {
    display: flex;
    align-items: center;
    width: 100%;
    max-height: 100px;
    padding-top: 8px;
    padding-left: 10px;
    border: none;
    background: none;
    resize: none;
    cursor: pointer;

    &:focus {
      outline: none;
      cursor: text;
    }
  }

  &:focus-within {
    outline: 1px solid var(--border-Color);
    background: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
      background: rgba(231, 231, 231, 0.7); //var(--border-Color)
    }
  }

  .emojiButtonActive {
    background: rgba(231, 231, 231, 0.7);
  }

  #emojiBox {
    position: absolute;
    bottom: 45px;
    right: 0;
    z-index: 1;

    svg {
      width: 30px;
      position: absolute;
      bottom: -18px;
      right: 10px;
    }
  }
`;
