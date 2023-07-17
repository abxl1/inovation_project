import React from 'react'
import Header from '../component/Header'
import { styled } from 'styled-components'
import mainImg from '../img/mainImg.jpg'

function Main() {
  return (
    <div>
        <Header />
        <StOutContainer>
        <StMainContainer>
            <StMainImg src={mainImg} alt='10점...10점이오!'></StMainImg>
            <StMainPostContainer>
              <StMainPost>
              </StMainPost>
              <StMainPost>
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
  width: 1100px;
  height: 700px;
  display: flex;
  margin-top : 70px;
  transition: transform 0.3s ease;
  &:hover{
  transform: scale(1.2);
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
  width: 650px;
  height: 500px;
  background-color: gray;
`