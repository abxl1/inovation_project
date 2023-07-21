import React from 'react'
import Header from '../component/Header'
import { styled } from 'styled-components';

function Contact() {
  return (
    <div>
      <Header />
      <StOutContainer>
        <StcontactForm>

          <StContactTitle>
            제작자들 GitHub 😺
          </StContactTitle>

          <StContactBox>
            <StContactName>유현주 님😺
              <StContact>
                <a href='https://github.com/hyunJuS2'>{'https://github.com/hyunJuS2'}</a>
              </StContact>
            </StContactName>
          </StContactBox>

          <StContactBox>
            <StContactName>박현우 님😺
              <StContact>
                <a href='https://github.com/hyun1024'>{'https://github.com/hyun1024'}</a>
              </StContact>
            </StContactName>
          </StContactBox>

          <StContactBox>
            <StContactName>김동현 님😺
              <StContact>
              <a href='https://github.com/princeton-d'>{'https://github.com/princeton-d'}</a>
              </StContact>
            </StContactName>
          </StContactBox>

          <StContactBox>
            <StContactName>이남규 님😺
              <StContact>
                <a href='https://github.com/tph7897'>{'https://github.com/tph7897'}</a>
              </StContact>
            </StContactName>
          </StContactBox>

          <StContactBox>
            <StContactName>김나영 님😺
              <StContact>
              <a href='https://github.com/abxl1'>{'https://github.com/abxl1'}</a>
              </StContact>
            </StContactName>
          </StContactBox>

        </StcontactForm>
      </StOutContainer>
    </div>
  )
}

export default Contact

const StOutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content : center;
  flex-direction: column;
  padding-top: 100px;
`

const StcontactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #FFCE50;
  border-radius: 4px;
  width: 1000px;
  height: 600px;
  margin :130px 0 130px 0;
`;

const StContactBox = styled.div`
  margin-bottom: 30px;
`

const StContactTitle = styled.div`
  margin-top: 20px;
  font-size: 30px;
  margin-bottom: 30px;
`

const StContactName = styled.div`

`

const StContact = styled.div`

`