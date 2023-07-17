import React, { useState } from 'react'
import Header from '../component/Header'
import { styled } from 'styled-components'
// import where from '../img/where.jpg'
import jesus from '../img/jesus.jpg'
import { useLocation, useNavigate } from 'react-router-dom'

function Detail() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };

  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  const location = useLocation();
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

console.log(location)
  return (
    <div>
        <Header />
        <StOutContainer>
          <StTitle>독실한 크리스천에게</StTitle>
          <StBoxContainor>
            <StImgBox>
            <StImg src={jesus} alt='어린양들아아아아아!!!!'></StImg>
            <StButtonSet>
            <StButton onClick={handleClick} liked={liked}>{'❤'}</StButton>
            <StButton onClick={() => handleCopyClipBoard(`http://localhost:3000${location.pathname}`)}>{'☍'}</StButton>
            </StButtonSet>
            <StContents>내용입니다.ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡkaflkajsdlfkjasdlkfaslkdnfalskdnflaksndflaknsdflkansflaksnfkasndlkfnaslkfnaslkfdnaslkndflkasndflka;ns;lfknsdflknㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ</StContents>
            </StImgBox>
            <StComment>
              <StCommentTitle>댓글</StCommentTitle>
              <StCommentInput type="text" placeholder="댓글을 입력해주세요? (500자 이하로만)" />
              <StCommentContent>닉네임1 : 댓글입니다?</StCommentContent>
              <StCommentContent>닉네임2 : 댓글입니다?</StCommentContent>
              <StCommentContent>닉네임3 : 댓글입니다?</StCommentContent>
              <StCommentContent>닉네임4 : 댓글,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,d입니다?</StCommentContent>
            </StComment>
          </StBoxContainor>
          <StBackButton onClick={handleGoBack}>« 목록으로</StBackButton>
        </StOutContainer>
    </div>
  )
}

export default Detail;

const StOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
  flex-direction: column;
  padding-top: 100px;
`

const StTitle = styled.div`
  margin-top: 70px; 
  background-color : #FFCE50;
  color:#242426;
  font-size: 30px;
  padding : 30px;
  max-width: 800px;
`

const StBoxContainor = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content:space-between;
  flex-direction: row;
  margin: 70px 0px 100px 0px;
  gap: 70px;
`

const StImgBox = styled.div`
  width: 710px;
  background-color: #FFCE50;
  display: flex;
  align-items: center;
  justify-content:space-between;
  flex-direction: column;
  padding: 30px;
`

const StComment = styled.div`
  padding-left: 15px;
  background-color : #FFCE50;
  padding : 60px;
  width: 500px;
`

const StCommentTitle = styled.div`
  background-color : #FFCE50;
  color:#242426;
  font-size: 30px;
`
const StCommentInput = styled.input`
  margin-top: 30px;
  width: 380px;
  height: 35px;
  padding: 10px;
`

const StCommentContent = styled.div`
  margin-top: 30px;
  padding: 10px;
  word-wrap: break-word;
  line-height: 1.2;
`

const StImg = styled.img`
  /* margin:70px; */
  max-width : 650px;
`

const StContents = styled.div`
width: 650px;
  min-height: 100px;
  background-color: #242426;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
  font-size : 30px;
  word-wrap: break-word;
  line-height: 1.2;

`

const StBackButton = styled.button`
  /* border: 1px solid #FFCE50; */
  font-size: 20px;
  margin-bottom: 100px;
`

const StButtonSet = styled.div`
  display: flex;
  gap: 20px;
  background-color : #FFCE50;
  margin : 20px auto 0px 30px;
`


const StButton = styled.button`
  font-size: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: color 0.3s;
  color: ${({ liked }) => (liked ? 'red' : '#242426')};
`;