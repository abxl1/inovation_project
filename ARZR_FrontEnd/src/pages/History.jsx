import React from 'react'
import Header from '../component/Header'
import { styled } from 'styled-components'
import OurGoSaeng from '../img/OurGoSaeng.png'

function History() {
  return (
    <div>
        <Header />
        <StOutContainer>
          <StHistoryForm>
            <StText>
              저희 알록짤록을 이용하시는 모든 분들이 함께 웃고 즐기며,<br/> 
            짤을 모으고 활용하는 데에 불편함을 해소하고, <br/> 
            더 즐겁고 편리한 짤 사용 경험을 제공하는 것을 목표로 하고 있습니다. <br/> 
            감사합니다!
            </StText>
            <StGoSaeng src={OurGoSaeng} alt='OurGoSaeng' />
            
          </StHistoryForm>
        </StOutContainer>
    </div>
  )
}

export default History

const StOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
  flex-direction: column;
  padding-top: 100px;
`
const StHistoryForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 40px;
  border: 1px solid #FFCE50;
  border-radius: 4px;
  width: 1000px;
  height: 600px;
  margin :130px 0 130px 0;
  justify-content: space-between;
`;

const StText = styled.div`
  font-size: 20px;
  line-height:35px;
  text-align: center;
  width : 500px;
  margin: 50px;
`
const StGoSaeng = styled.img`
  margin-right: 50px;
  height:550px;
`