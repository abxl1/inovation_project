import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { styled } from 'styled-components'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import instance, { getDetailPosts } from '../axios/api'
import { useQuery, useQueryClient } from 'react-query'
import { usePostComment } from '../hooks/usePostComment'
import { useSelector } from 'react-redux'

function Detail() {
  const queryClient = useQueryClient();

  const role = useSelector((state) => state.isLogin.role)

  console.log(role)

  
  const param = useParams();
  const [comment, setComment] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const { data, isLoading } = useQuery('detailposts', () => getDetailPosts(param.id)) 


  const [isLike, setIsLike] = useState(null);

  useEffect(() => {
  setIsLike(data.data[0].isLike);
  }, [data]);


  const postCommentmutation = usePostComment();


  function postComment() {
    comment && postCommentmutation.mutate({
      id : param.id,
      content : comment,
    })
    setComment('')
  }

  const handleGoBack = () => {
    navigate(-1); // 바로 이전 페이지로 이동, '/main' 등 직접 지정도 당연히 가능
  };


  const likeToggle = async (id) => { // 좋아요 토글 정보 전송
    const res = await instance.post(`/api/likes/posts/${id}`)
    console.log("res", res)
    queryClient.invalidateQueries('detailposts')
    setIsLike(Boolean(data?.data[0].isLike))
  };
  
  const handleLikeToggle = () => {
    likeToggle(data?.data[0].id)
  }

  const deletePost = async (id) => { // 게시글 삭제 
    await instance.delete(`/api/posts/${id}`)
}


  const handleDeletePost = () => {
    deletePost(param.id)
    navigate('/')
  }


  const deleteComment = async (id) => {
    await instance.delete(`/api/comments/${id}`)
    queryClient.invalidateQueries('detailposts')
  }


  const handleDeleteComment = (id) => {
    deleteComment(id)
  }
  
  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };
  

  const comments = data?.data[0].comments
  const storedRole = localStorage.getItem("role");

  if(isLoading){
    return;
  }

  return (
    <div>
        <Header />
        <StOutContainer>
          <StTitle>{data?.data[0].title}</StTitle>
          <StBoxContainor>
            <StImgBox>
            <StImg src={data?.data[0].image} alt='짤'></StImg>
            <StButtonSet>
              <StLikeButton onClick={handleLikeToggle} liked={(isLike ? '#242426' : 'red')}>
                {`❤ ${data?.data[0].likeCount}`}
              </StLikeButton>
              <StButton onClick={() => handleCopyClipBoard(`http://first-serendipity.s3-website.ap-northeast-2.amazonaws.com/${location.pathname}`)}>{'☍'}</StButton>
              {(storedRole==='NAYOUNG')
              ?
              (<>
              <StButton onClick={()=>{navigate('/writing')}}>✎</StButton>
                <StButton onClick={handleDeletePost}>🗑︎</StButton>
              </>
              )
              : (<></>)
              }
              
            </StButtonSet>
            <StContents>{data?.data[0].content}</StContents>
            </StImgBox>
            <StComment>
              <StCommentTitle>댓글</StCommentTitle>
              <StCommentBox>
                <StCommentInput type="text" placeholder="댓글을 입력해주세요? (500자 이하)" value={comment} onChange={handleCommentChange}/>
                <StCommentButton onClick={postComment} >작성</StCommentButton> 
              </StCommentBox>
              
              {Array.isArray(comments) 
              ? (
                comments.map((item) => (
                  <StCommentBox>
                    {console.log(item)}
                    <StCommentContent key={item.commentId}>
                      {`${item.nickname} : ${item.content}`}
                    </StCommentContent>
                    <StCommentButton onClick={()=>handleDeleteComment(item.commentId)}>삭제</StCommentButton>
                  </StCommentBox>
                  ))
                ) 
              : (
                  <p>댓글이 없습니다.</p>
                )}     
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
  margin-bottom : auto;
`

const StComment = styled.div`
  padding-left: 15px;
  background-color : #FFCE50;
  padding : 30px;
  width: 500px;
`

const StCommentTitle = styled.div`
  background-color : #FFCE50;
  color:#242426;
  font-size: 30px;
  margin-bottom:30px;
`

const StCommentBox = styled.div`
  background-color: #FFCE50;
  display: flex;
  margin-bottom: 20px;
`
const StCommentInput = styled.input`
  width: 380px;
  padding: 20px;
  font-size: 20px;
`

const StCommentButton = styled.button`
border: 1px solid #242426;
background-color: #242426;
padding: 10px;
width: 70px;
cursor: pointer;
&:hover {
  border: 1px solid #242426;
  background-color: #FFCE50;
  color: #242426;
  transition: 0.4s ease;
};
`

const StCommentContent = styled.div`
width: 380px;
  padding: 20px;
  font-size: 20px;
  word-wrap: break-word;
  line-height: 1.2;
`

const StImg = styled.img`
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
  margin-bottom : auto;
`

const StBackButton = styled.button`
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
  font-size: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  transition: color 0.3s;
  color:#242426;
`;

const StLikeButton = styled(StButton)`
  color: ${({ liked }) => (liked)};
`;