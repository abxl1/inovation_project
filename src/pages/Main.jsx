import React from 'react'
import Header from '../component/Header'
import { styled } from 'styled-components'
import mainImg from '../img/mainImg.jpg'
import { useQuery } from 'react-query';
import { getTodayFavoritePosts, getTodayPosts } from '../axios/api';

function Main() {

  const TodayPosts = useQuery("TodayPosts", getTodayPosts);
  const TodayPostsData =  TodayPosts.data?.data[0];

  const TodayFavoritePosts = useQuery("TodayFavoritePosts", getTodayFavoritePosts);
  const TodayFavoritePostsData =TodayFavoritePosts.data?.data[0];

  return (
    <div>
        <Header />
        <StOutContainer>
        <StMainContainer>
            <StMainImg src={mainImg} alt='10점...10점이요!'></StMainImg>
            <StMainPostContainer>
              <StMainPost>
                
                오늘의 추천짤
                <StMainPostTitle>{TodayPostsData?.title}</StMainPostTitle>
                <StMainPostImg src={TodayPostsData?.image} alt='오늘의 추천짤!' />
              </StMainPost>
              <StMainPost>
                오늘의 인기짤
                <StMainPostTitle>{TodayFavoritePostsData?.title}</StMainPostTitle>
                <StMainPostImg src={TodayFavoritePostsData?.image} alt='오늘의 인기짤!' />
              </StMainPost>
            </StMainPostContainer>
        </StMainContainer>
        </StOutContainer>
    </div>
  )
}

export default Main

const StOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
  padding-top: 100px;
`

const StMainContainer = styled.div`
  background-color :#242426;
  width: 1500px;
  margin: 0 80px 0 80px;
  display: flex;
  justify-content : center;
  flex-direction: column;
  align-items: center;
`

const StMainImg = styled.img`
  width: 800px;
  /* height: 700px; */
  display: flex;
  margin-top : 70px;
  transition: transform 0.3s ease;
  &:hover{
  transform: scale(1.25);
}
`

const StMainPostContainer = styled.div`
  display: flex;
  justify-content : center;
  margin-top: 100px;
  margin-bottom: 100px;
  gap: 20px;
  background-color :#242426;
`

const StMainPost = styled.div`
  width: 510px;
  background-color: #FFCE50;
  color: #242426;
  padding: 30px;
  font-size: 19px;
  display: flex;
  flex-direction: column;
  justify-content : center;
  align-items: center;
  
`

const StMainPostTitle = styled.div`
  background-color: #FFCE50;
  color: #242426;
`

const StMainPostImg = styled.img`
  max-width : 450px;
  max-height : 450px;
`