import React from 'react'
import { useState, useRef, useEffect } from "react";
import { styled } from 'styled-components';

function Category() {
    const categoryList = ['무한도전', '외국밈', '고양이', '수제짤', '농담곰', '고전짤', 'MBTI밈', '유튜브밈'];
    const [category, setCategory] = useState('카테고리');
    const [List, setList] = useState(false);
  
    const node = useRef();
    useEffect(() => { // 창의 바깥부분을 클릭하였을때 창이 사라짐
      const clickOutside = (e) => {
        if (List && node.current && !node.current.contains(e.target)) setList(false);};
      document.addEventListener("mousedown", clickOutside);
      return () => {document.removeEventListener("mousedown", clickOutside);};
    }, [List]);
  
    const categoryClick = (index) =>{ // 목록을 선택
      setCategory(categoryList[index])
      setList((pre) => !pre)
    }
  
    return (<div ref={node}>
      <StSelectButton onClick={() => setList((pre) => !pre)}>
        {category}<StButton>▼</StButton>
      </StSelectButton>
      {List && (<StcategoryList> 
          {categoryList.map((item, index)=>{
              return <StLi key={index} onClick={()=>categoryClick(index)}>{item}</StLi>
            })}
        </StcategoryList>
      )}
    </div>)
}

export default Category

const StSelectButton = styled.div`
  width: 300px;
  height: 40px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #FFCE50;
  background-color: #FFCE50;
  color: #242426;
  font-size: 12px;
  cursor: pointer;
`

const StButton = styled.div`
  color:#242426;
  background-color : #FFCE50;
`

const StcategoryList = styled.ul`
  width: 300px;
  height: 40px;
  margin: 0%;
  padding-left: 0; // ul 밑의 li부분은 기본적으로 padding-left값이 있어 이것을 초기화 해줌
  list-style: none; // 목록 마커 삭제
  position: static;
  min-height: 150px; /* 최대 높이 설정 */
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px; /* 스크롤바 너비 설정 */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #F2AE30; /* 스크롤바 채움 색상 설정 */
  }
  &::-webkit-scrollbar-track {
    background-color: #FFCE50; /* 스크롤바 배경색 설정 */
  }
`;

const StLi = styled.li`
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background-color: #FFCE50;
font-size: 13px;
border: 1px solid #FFCE50;
color: #242426;
cursor: pointer;
transition: background-color 0.3s ease;
&:hover {
    background-color: #F2AE30;
  }
`