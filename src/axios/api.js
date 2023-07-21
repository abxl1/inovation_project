import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    // 로컬 스토리지에서 토큰 값 가져오기
    const token = localStorage.getItem("token");

    // 토큰이 존재하면 헤더에 담아서 요청 보내기
    if (token) {
      config.headers.Authorization = `${token}`;
    }

    console.log("인터셉트 요청 성공!");
    return config;
  },
  function (error) {
    console.log("인터셉트 요청 오류!");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("인터넵트 응답 받았어요!");
    return response;
  },
  function (error) {
    console.log("인터셉트 응답 못받았어요...ㅠㅠ");
    return Promise.reject(error);
  }
);

export default instance;

// 회원가입
const addUsers = async (newUser) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/members/signup`, newUser);
  }


// 로그인
// const login = async (loginId) => {
//     await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/members/login`, loginId);
//   }


//  게시글 전체 조회
const getPosts = async () => {
    const response = await instance.get(`/api/posts`);
    return response.data;
  }
// 인기 게시글 전체 조회
  const getFavoritePosts = async () => {
    const response = await instance.get(`/api/posts/goodlist`);
    return response.data;
  }

// 디테일 페이지 조회
const getDetailPosts = async (id) => {
    const response = await instance.get(`/api/posts/${id}`);
    return response.data;
  }

  // 오늘의 추천짤 조회
  const getTodayPosts = async () => {
    const response = await instance.get(`/api/posts/today`);
    return response.data;
  }

   // 오늘의 인기짤 조회
  const getTodayFavoritePosts = async () => {
    const response = await instance.get(`/api/posts/good`);
    return response.data;
  }

  // const addComment = async (id, content) => {
  //   await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/members/signup`, newUser);
  // }
  
  
  
  // * 게시글 추가
  // const addPosts = async (newPost) => {
  //   await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/posts`, newPost);
  // }
  
//   // * 삭제
//   const removePosts = async (id) => {
//     await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
//   }
  
//   // * 수정
//   const modifyPosts = async (data) => {
//     const { id, ...updatedData } = data;
//     await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, updatedData)
//   }
  
  export { addUsers, getPosts, getDetailPosts, getTodayPosts, getFavoritePosts, getTodayFavoritePosts }