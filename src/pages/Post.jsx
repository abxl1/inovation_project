import { styled } from 'styled-components';
import Header from '../component/Header';
import Category from '../component/Category'
import { useQuery } from 'react-query';
import { getPosts } from '../axios/api';
import { useNavigate } from 'react-router-dom';

function Post() {
  
  const navigate = useNavigate();
  // const [postCount, setPostCount] = useState(15); // 표시할 게시물 수를 추적하는 상태 변수
  // const [totalPosts, setTotalPosts] = useState(0); // 전체 게시물 수를 추적하는 상태 변수

  // useEffect(() => {
  //   function handleScroll() {
  //     const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  //     if (scrollTop + clientHeight >= scrollHeight - 20) {
  //       setPostCount(prevCount => prevCount + 10); // 게시물 수를 10개씩 증가시킵니다.
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const reLoading = () => {
    
  // }
  
  const { isLoading, isError, data } = useQuery("posts", getPosts);
  console.log(data)
  
  if (isLoading) {
    
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <Header />
      <StOutContainer>
        <StWrapper>
          <StTitle>전체글보기</StTitle>
          <Category />
          <StCardContainor>
          {/* .slice(0, postCount) */}
            {data?.data.map((post) => (
              <StCard key={post.id} onClick={()=>{navigate(`/detail/${post.id}`)}}>
                <StPostImg src={post.image} alt={post.id} />
                <StPostTitle>{post.title}</StPostTitle>
              </StCard>
            ))}
          </StCardContainor>
          {isLoading && <p>Loading...</p>}
          {!isLoading && (
            <StButton onClick={scrollToTop}>최상단으로 이동</StButton>
          )}
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

const StCardContainor = styled.div`
  width: 1200px;
  margin-top: 100px;
  min-width: 500px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
  align-content: center;
`;

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
`;

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

const StButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #FFCE50;
  color: #FFFFFF;
  padding: 10px 20px;
  border: 1px solid #242426;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
