import React, { useState } from "react";

import { ReactComponent as Dots } from "../../assets/icons/dots.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrowDown.svg";

import * as Styled from "./style";
import { Cookies } from "react-cookie";
import { useMutation } from "react-query";
import { postPin } from "../../axios/makePin";
import imageCompression from "browser-image-compression";
import { useNavigate } from "react-router-dom";
import { PinTextarea } from './PinTextarea';

const cookies = new Cookies();

export default function MakePinPage() {
  const navigate = useNavigate();

  // 로그인 토큰 여부 확인
  //const isLogin = cookies.get("accessToken"); // 없으면 undefined
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Pin 만드는 요청
  // const queryClient = useQueryClient();
  const mutation = useMutation(postPin, {
    onSuccess: () => {
      alert("핀을 성공적으로 생성했습니다!");
      navigate('/home')
    },
    onError: () => {
      alert("핀 생성에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    const options = {
      maxSizeMB: 1, // 최대 이미지 크기 (MB)
      maxWidthOrHeight: 800, // 이미지의 최대 너비 또는 높이 (픽셀)
      useWebWorker: true, // 웹 워커 사용 여부
    };

    try {
      const compressedFile = await imageCompression(imageFile, options);
      // 압축된 이미지(compressedFile)를 서버에 업로드하거나 필요한 작업을 수행합니다.
      console.log("압축 완료:", compressedFile);

      // 압축된 이미지(compressedFile)를 File 객체로 변환하여 상태에 저장합니다.
      const convertedFile = new File([compressedFile], imageFile.name, {
        type: compressedFile.type,
      });
      setSelectedFile(convertedFile);

      // 미리보기를 위해 선택한 이미지 URL 생성
      const imageURL = URL.createObjectURL(compressedFile);
      setPreviewImage(imageURL);
    } catch (error) {
      console.error("압축 실패:", error);
    }
  };

  const handleSaveButton = () => {
    const newPin = { title, content, image: selectedFile };
    mutation.mutate(newPin);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewImage(null);
  };

  return (
    <Styled.MakePinMain>
      <div>
        <Styled.MakePinArticle>
          <Styled.ArticleHeadNav>
            <button>
              <Dots stroke="black" />
            </button>
            <button onClick={handleSaveButton}>
              <p>저장</p>
              <ArrowDown fill="white" />
            </button>
          </Styled.ArticleHeadNav>
          <Styled.ArticleBodyBox>
            <div className="col1">
              {previewImage ? (
                <>
                  <img src={previewImage} alt="미리보기" />
                  <button onClick={handleRemoveFile}>파일 삭제</button>
                </>
              ) : (
                <input type="file" onChange={handleImageUpload} />
              )}
            </div>
            <div className="col2">
              <Styled.TitleInput
                type="text"
                onChange={handleTitleChange}
                value={title}
                placeholder="제목 추가"
                $isEmpty={title === "" ? true : false}
              />
              {/* <PinUserInfo /> */}
              <PinTextarea content={content} setContent={setContent} />
              <Styled.LinkInput
                type="text"
                onChange={handleLinkChange}
                value={link}
                placeholder="랜딩 페이지 링크 추가"
                $isEmpty={link === "" ? true : false}
              />
            </div>
          </Styled.ArticleBodyBox>
        </Styled.MakePinArticle>
      </div>
    </Styled.MakePinMain>
  );
}
