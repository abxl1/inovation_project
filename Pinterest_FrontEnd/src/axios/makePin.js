import ourAxios from "./ourAxios";
import {
  deleteWithToken,
  getWithToken,
  postWithToken,
  putWithToken,
} from "./auth";

import { Cookies } from "react-cookie";

export const cookies = new Cookies();

export const postPin = async ({ title, content, image }) => {
  const headerToken = cookies.get("accessToken").split("%").join(" ");

  // FormData 객체 생성
  const formData = new FormData();

  // 이미지 파일과 다른 필드 추가
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", image);

  try {
    const response = await ourAxios.post("api/pin", formData, {
      headers: {
        Authorization: headerToken,
      },
      withCredentials: true,
    });
    return response;
  } catch (error) {
    // 오류 처리
    console.error("핀 생성 실패:", error);
    throw error;
  }
};
