import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import Favorite from "../pages/Favorite";
import History from "../pages/History";
import Login from "../pages/Login";
import Post from "../pages/Post";
import SignUp from "../pages/SignUp";
import Mypage from "../pages/Mypage";
import Writing from "../pages/Writing";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="detail/:id" element={<Detail />}/>
          <Route path="favorite" element={<Favorite />}/>
          <Route path="history" element={<History />}/>
          <Route path="login" element={<Login />}/>
          <Route path="post" element={<Post />}/>
          <Route path="signup" element={<SignUp />}/>
          <Route path="mypage" element={<Mypage />}/>
          <Route path="writing" element={<Writing />}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;