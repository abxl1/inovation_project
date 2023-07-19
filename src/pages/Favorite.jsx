import React from 'react'
import Header from '../component/Header'
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Favorite() {

  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <StOutContainer>
        <StWrapper>
          <StTitle>인기글보기</StTitle>
          <StCardContainor>
              
              <StCard onClick={()=>{navigate('/detail')}}>🥇</StCard>
              <StCard onClick={()=>{navigate('/detail')}}>🥈</StCard>
              <StCard onClick={()=>{navigate('/detail')}}>🥉</StCard>
              <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
              <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
              <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
              <StCard onClick={()=>{navigate('/detail')}}>gdsgsd</StCard>
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
  width : 300px;
  height : 300px;
  margin : 50px;
  font-size: 30px;
`