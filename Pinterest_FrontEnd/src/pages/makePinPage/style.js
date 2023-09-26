import styled from "styled-components";

export const MakePinMain = styled.div`
  background: #efefef;
  padding-bottom: 100px;

  & > div {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    background: #efefef;
  }
`;

export const MakePinArticle = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 800px;
  min-height: 550px;
  padding: 50px;
  height: fit-content;
  background: #ffffff;
  border-radius: 20px;
`;

export const ArticleHeadNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;

  button {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    cursor: pointer;
  }

  button:first-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border-radius: 50%;

    svg {
      height: 30px;
    }

    &:hover {
      background: #efefef;
    }
  }

  button:last-child {
    color: white;
    font-weight: 700;
    background: #ff001f;
    padding: 8px;
    border-radius: 10px;

    p {
      padding: 0 5px;
    }

    svg {
      width: 20px;
    }

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const ArticleBodyBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;

  .col1 {
    width: 35%;
    border-radius: 10px;
    overflow: hidden;
    background: #efefef;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .col2 {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const TitleInput = styled.input`
  border: none;
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 10px;
  border-bottom: ${(props) => (props.$isEmpty ? "1px solid gray" : "none")};

  &:focus {
    outline: none;
    border-bottom: 2px solid #0077cc;
  }
`;

export const MakeUserInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  figure {
    display: flex;
    align-items: center;
    gap: 10px;

    div {
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

export const MakePinInputBox = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 100px;
  box-sizing: border-box;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 5px;
  border-bottom: ${(props) => (props.$isEmpty ? "1px solid gray" : "none")};

  & > textarea {
    display: flex;
    align-items: center;
    width: 100%;
    padding-left: 10px;
    border: none;
    background: none;
    resize: none;
    overflow: hidden;
    vertical-align: middle;

    &:focus {
      outline: none;
    }
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
      background: rgba(231, 231, 231, 0.7); //#e7e7e7
    }
  }

  .emojiButtonActive {
    background: rgba(231, 231, 231, 0.7);
  }

  #emojiBox {
    position: absolute;
    top: 0;
    left: 70px;
    z-index: 1;

    svg {
      width: 30px;
      position: absolute;
      top: 7px;
      right: 92px;
      transform: rotateZ(270deg);
    }
  }

  &:focus-within {
    border-bottom: 2px solid #0077cc;
  }
`;

export const LinkInput = styled.input`
  width: 100%;
  border: none;
  padding-bottom: 5px;
  border-bottom: ${(props) => (props.$isEmpty ? "1px solid gray" : "none")};

  &:focus {
    outline: none;
    border-bottom: 2px solid #0077cc;
  }
`;
