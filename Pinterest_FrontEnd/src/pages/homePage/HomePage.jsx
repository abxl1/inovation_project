import React from "react";
import { styled } from "styled-components";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

// axios 함수
import { getAllPins } from "../../axios/home";

export default function HomePage() {
  const navigate = useNavigate();

  const saveBtnClickHandler = () => {};

  const { data, isLoading, isError, error } = useQuery(
    "getAllPins",
    getAllPins
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  const allPins = data.data;
  console.log(allPins);

  return (
    <div>
      <PinCardContainer>
        {allPins.map((pin) => (
          <PinCard
            key={pin.pin_id}
            onClick={() => navigate(`/detail/${pin.pin_id}`)}
          >
            <img src={pin.imageUrl} alt="하강~" />
            <SaveButton onClick={() => saveBtnClickHandler}>저장</SaveButton>
          </PinCard>
        ))}
      </PinCardContainer>
    </div>
  );
}

const PinCard = styled.div`
  width: 240px;
  border: none;
  border-radius: 12px;
  position: relative;
  height: ${({ height }) => height};
  background-color: lightgray;
  margin: 12px;
  display: inline-block;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const PinCardContainer = styled.div`
  column-width: 230px;
  margin: 10px 50px 0 50px;
  padding-top: 80px;
`;

const SaveButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 16px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${PinCard}:hover & {
    opacity: 1;
  }
`;

//onmouse? mouse over 사용해서 true false 설정해주기!
