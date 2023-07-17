// import React from 'react'
// import Header from '../component/Header'
// import Category from '../component/Category'
// import { styled } from 'styled-components';
// import { useNavigate } from 'react-router-dom';

// function Post() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <Header/>
//       <StOutContainer>
//         <StWrapper>
//           <StTitle>전체글보기</StTitle>
//           <Category />
//           <StCardContainor>
//               <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
//               <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
//               <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
//               <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
//               <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
//               <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
//               <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
//           </StCardContainor>
//         </StWrapper>
//       </StOutContainer>
//     </div>
//   )
// }

// export default Post;
// const StOutContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content : center;
//   padding-top: 100px;
// `

// const StWrapper = styled.div`
//   background-color : none;
//   width: 1500px;
//   margin: 0px 80px 0 80px;
//   display: flex;
//   justify-content : center;
//   align-items: center;
//   align-content: center;
//   gap: 30px;
//   flex-direction: column;
// `

// const StTitle = styled.div`
// font-size: 35px;
// margin-top : 150px;
// `

// const StCardContainor = styled.div`
//   width: 1200px;
//   margin-top: 100px;
//   min-width : 500px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content : center;
//   align-items: center;
//   align-content: center;
// `

// const StCard = styled.div`
//   background-color: #FFCE50;
//   width : 300px;
//   height : 300px;
//   margin : 50px;
// `

import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import Category from '../component/Category';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Post() {
  const navigate = useNavigate();
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMoreCards = () => {
    setIsLoading(true);
    // 여기에서 새로운 데이터를 가져오는 API 호출 또는 데이터 처리 로직을 구현해야 합니다.
    setTimeout(() => {
      const newCards = Array.from({ length: 6 }, (_, index) => `Card ${cards.length + index + 1}`);
      setCards((prevCards) => [...prevCards, ...newCards]);
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    loadMoreCards();
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        if (!isLoading) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  return (
    <div>
      <Header />
      <StOutContainer>
        <StWrapper>
          <StTitle>전체글보기</StTitle>
          <Category />
          <StCardContainer>
            {cards.map((card, index) => (
              <StCard key={index} onClick={() => navigate('/detail')}>
                {card}
              </StCard>
            ))}
            {isLoading && <LoadingSpinner>Loading...</LoadingSpinner>}
          </StCardContainer>
        </StWrapper>
      </StOutContainer>
    </div>
  );
}

export default Post;

const StOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

const StWrapper = styled.div`
  background-color: none;
  width: 1500px;
  margin: 0px 80px 0 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 30px;
  flex-direction: column;
`;

const StTitle = styled.div`
  font-size: 35px;
  margin-top: 150px;
`;

const StCardContainer = styled.div`
  width: 1200px;
  margin-top: 100px;
  min-width: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const StCard = styled.div`
  background-color: #ffce50;
  width: 300px;
  height: 300px;
  margin: 50px;
`;

const LoadingSpinner = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 20px;
  color: #999;
`;
