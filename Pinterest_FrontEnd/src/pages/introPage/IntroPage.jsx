import React, { useState, useEffect } from 'react';
import * as s from './style';
import { FullPage, Slide } from 'react-full-page';
import Jejus from "../../assets/img/jejus.jpg"
import BackgroundImg from "../../assets/img/backgroundpage.png"

const IntroPage = () => {
  const TOTAL_SLIDES = 5;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % TOTAL_SLIDES);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  useEffect(() => {
    // Auto slide to the next slide every 5 seconds
    const interval = setInterval(handleNextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <FullPage activeSlide={currentSlide} animate={true}>

        <Slide value={0}>
          <s.Main style={{ alignItems: 'flex-end' }}>
            <s.BtnWrap>
              <s.MoveBtn onClick={handleNextSlide}>V</s.MoveBtn>
              <s.FollowBtn onClick={handleNextSlide}>
                <div>방식은 다음과 같습니다▾</div>
              </s.FollowBtn>
            </s.BtnWrap>
            <s.NestedMain>
              <s.AutoSlides>
                <s.AutoSlide $bgColor="#ff0000" />
                <s.AutoSlide $bgColor="#00ff00" />
                <s.AutoSlide $bgColor="#0000ff" />
                <s.AutoSlide $bgColor="#ffff00" />
              </s.AutoSlides>
            </s.NestedMain>
          </s.Main>
        </Slide>

        <Slide value={1}>
          <s.Main $bgColor="#fffd92">
            <s.SlideImgContainer>
              <s.HalfImg src={Jejus} alt="image" />
            </s.SlideImgContainer>
            <s.SlideTextContainer>
              <s.IntroText color="#C31952">아이디어 검색</s.IntroText>
              <s.HalfText color="#C31952">어떤 것을 시도해보고 싶으세요? '닭고기로 만드는 간단한 저녁 메뉴'와 같이 관심 있는 내용을 검색하고 결과를 확인해 보세요.</s.HalfText>
              <s.NavigationButton
                bgColor="#C31952"
                onClick={handleNextSlide}>탐색</s.NavigationButton>
            </s.SlideTextContainer>
          </s.Main >
        </Slide>

        <Slide value={2}>
          <s.Main $bgColor="#dafff6">
            <s.SlideTextContainer>
              <s.IntroText color="#006B6C">좋아하는 아이디어를 저장하세요.</s.IntroText>
              <s.HalfText color="#006B6C">나중에 다시 볼 수 있도록 좋아하는 콘텐츠를 수집하세요.</s.HalfText>
              <s.NavigationButton
                bgColor="#006B6C"
                onClick={handleNextSlide}>탐색</s.NavigationButton>
            </s.SlideTextContainer>
            <s.SlideImgContainer>
              <s.HalfImg src={Jejus} alt="image" />
            </s.SlideImgContainer>
          </s.Main >
        </Slide>

        <Slide value={3}>
          <s.Main $bgColor="#ffe2eb">
            <s.SlideImgContainer>
              <s.HalfImg src={Jejus} alt="image" />
            </s.SlideImgContainer>
            <s.SlideTextContainer>
              <s.IntroText color="#C32F00">구매하고, 만들고, 시도하고, 실행하세요.</s.IntroText>
              <s.HalfText color="#C32F00">무엇보다도 Pinterest에서는 전 세계 사람들의 아이디어와 새로운 것을 발견할 수 있습니다.</s.HalfText>
              <s.NavigationButton
                bgColor="#C32F00"
                onClick={handleNextSlide}>탐색</s.NavigationButton>
            </s.SlideTextContainer>
          </s.Main >
        </Slide>

        <Slide value={4}>
          <s.Main $bgColor="white">
            <s.BackImg src={BackgroundImg} alt="image" />
          </s.Main >
        </Slide>
      </FullPage>


    </>
  );
};
//컨트롤을 false로 지정해주기?

export default IntroPage;
