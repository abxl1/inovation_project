import ourAxios from "./ourAxios";

import { Cookies } from "react-cookie";

export const cookies = new Cookies();

export const postWithToken = async (path, data) => {
  const headerToken = cookies.get("accessToken").split("%").join(" ");
  const response = await ourAxios.post(path, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${headerToken}`,
    },
    withCredentials: true,
  });
  return response;
};

export const getWithToken = async (path) => {
  const headerToken = cookies.get("accessToken").split("%").join(" ");
  const response = await ourAxios.get(path, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${headerToken}`,
    },
    withCredentials: true,
  });

  return response;
};

export const deleteWithToken = async (path) => {
  const headerToken = cookies.get("accessToken").split("%").join(" ");
  const response = await ourAxios.delete(path, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${headerToken}`,
    },
    withCredentials: true,
  });

  return response;
};

export const putWithToken = async (path, data) => {
  const headerToken = cookies.get("accessToken").split("%").join(" ");
  const response = await ourAxios.put(path, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${headerToken}`,
    },
    withCredentials: true,
  });

  return response;
};

// const token = cookies.get("accessToken").split(" ")[1];

export const login = async ({ email, password }) => {
  try {
    const response = await ourAxios.post(
      "api/users/login",
      { email, password },
      { withCredentials: true }
    );
    cookies.set("accessToken", response.headers.get("Authorization"));
    console.log(response);
    return response;
  } catch (error) {
    console.error("로그인 실패:", error);
    alert("로그인에 실패했습니다. 다시 시도해주세요.");
  }
};

export const signUp = async ({ email, password, birthday }) => {
  const response = await ourAxios.post("api/users/signup", {
    email,
    password,
    birthday,
  });
  console.log(response);
  return response;
};
