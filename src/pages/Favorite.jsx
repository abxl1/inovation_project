import React from 'react'
import Header from '../component/Header'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getFavoritePosts } from '../axios/api';

function Favorite() {

  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("favoriteposts", getFavoritePosts);
  console.log("data", data?.data)
  
  if (isLoading) {
    
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }



  return (
    <div>
      <Header/>
      <StOutContainer>
        <StWrapper>
          <StTitle>인기글보기</StTitle>
          <StCardContainor>
            {data?.data.map((post, index)=>(
              
            <StCard key={post.id} onClick={()=>{navigate(`/detail/${post.id}`)}}>
              {index===0 && <StMedal>🥇</StMedal>}
              {index===1 && <StMedal>🥈</StMedal>}
              {index===2 && <StMedal>🥉</StMedal>}
              <StPostImg src={post.image} alt={post.id} />
              <StPostTitle>{post.title}</StPostTitle>
            </StCard>
            ))}
              
          </StCardContainor>
        </StWrapper>
      </StOutContainer>
    </div>
  )
}

export default Favorite;

const StOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
  padding-top: 100px;
`

const StWrapper = styled.div`
  background-color : none;
  width: 1500px;
  margin: 0px 80px 0 80px;
  display: flex;
  justify-content : center;
  align-items: center;
  align-content: center;
  gap: 30px;
  flex-direction: column;
`

const StTitle = styled.div`
font-size: 35px;
margin-top : 150px;
`

const StCardContainor = styled.div`
  width: 1200px;
  margin-top: 100px;
  min-width : 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content : center;
  align-items: center;
  align-content: center;
`

const StCard = styled.div`
  background-color: #FFCE50;
  width: 300px;
  height: 350px;
  margin: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StPostImg = styled.img`
  width: 250px;
  height: 250px;
`

const StPostTitle = styled.div`
background-color : #FFCE50;
color: #242426;
font-size : 20px;
margin-top: 20px;
`

const StMedal = styled.div`
  background-color: #FFCE50;
  margin-bottom:10px;
  font-size:30px;
`