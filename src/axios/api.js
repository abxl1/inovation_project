import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
  });
  
  // 요청을 보내기 전에 실행되는 인터셉터를 추가합니다.
  instance.interceptors.request.use(
    (config) => {
      // 로컬 스토리지에서 토큰을 가져옵니다.
      const token = localStorage.getItem('token');
      
      // 토큰이 존재할 경우 요청 헤더에 토큰을 추가합니다.
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

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
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/posts`);
    return response.data;
  }

// 디테일 페이지 조회
const getDetailPosts = async (id) => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/posts/${id}`);
    return response.data;
  }
  
  // * 게시글 추가
  const addPosts = async (newPost) => {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/posts`, newPost);
  }
  
//   // * 삭제
//   const removePosts = async (id) => {
//     await axios.delete(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`);
//   }
  
//   // * 수정
//   const modifyPosts = async (data) => {
//     const { id, ...updatedData } = data;
//     await axios.put(`${process.env.REACT_APP_SERVER_URL}/posts/${id}`, updatedData)
//   }
  
  export { addUsers, getPosts, getDetailPosts, addPosts }