import { styled } from "styled-components";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const EditOuter = styled.div`
  padding: 80px 0 80px 0;
  flex-direction: row;
`

const ContentOuter = styled.div`
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`

const EditNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 30%;
  margin-right: 200px;
  
  
  & > div {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: fit-content;

    div:first-child{
      width: fit-content;
      box-sizing: border-box;
      padding: 10px;
      font-weight:600;
      
      
      &:hover {
        background: ${(props) => (props.isSelected ? "none" : "#efefef")};
        border-radius: 10px;
      }
    }
  }
`

const SelectedBar = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 1.5px 0;
  width: 80%;
  margin: 0 auto;
  border-radius: 5px;
  background: ${(props) => (props.isSelected ? "black" : "none")};
`

const EditSection = styled.div`
  max-width: 490px;
  box-sizing: border-box;
  width: 70%;
  margin-top: 10px;
`

const OpenProfileEdit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
`

const TextAlign = styled.div`
  margin-top: 12px;
  margin-bottom: 10px;
  text-align: left;
  font-size: 12px;
`

const Input = styled.input`
width: 462px;
height: 25px;
padding: 8px 16px;
border: 2px solid lightgrey;
border-radius: 14px;

white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;

&:hover {
  border-color: grey;
};
`

const DateInput = styled(DatePicker)`
  width: 268px;
  height: 35px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 16px;
  border-color: #dfdfdf;
  &:hover {
    border-color: gray;
  }
`

const OtherLavel = styled.label`
  font-size: 16px;
  line-height: 2rem;
  padding-right: 30px;
  padding-bottom: 10px;
  display: wrap;
  flex-wrap: wrap;
  align-items: center;
`

const OtherRadio = styled.input`
&[type="radio"] {
  vertical-align: middle;
  appearance: none;
  border: max(4px, 0.1em) solid gray;
  border-radius: 50%;
  width: 23px;
  height: 23px;
};

&[type="radio"]:checked {
  border: 7.5px solid black;
};

&[type="radio"]:hover {
  box-shadow: 0 0 0 max(2px, 0.2em) lightgray;
  cursor: pointer;
}
`

const PersonalInfoEdit = styled.div`
`

const FooterSection = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  border-top: 1px solid #efefef;
  background-color: #fff;
  box-shadow: 0 -10px 10px -10px rgba(0, 0, 0, 0.1);
`

const SaveBtn = styled.div`
  cursor: pointer;
  padding: 15px;
  margin: 15px 0 15px 10px;
  border: box-sizing;
  background-color: ${({ isWritingComplete }) =>
    isWritingComplete ? "red" : "#efefef"};
  color: ${({ isWritingComplete }) => (isWritingComplete ? "white" : "#5e5e5e")};
  border-radius: 50px;
  text-align: center;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 600;
`;

export {
  EditOuter,
  ContentOuter,
  EditNav,
  SelectedBar,
  EditSection,
  OpenProfileEdit,
  TextAlign,
  Input,
  DateInput,
  OtherLavel,
  OtherRadio,
  PersonalInfoEdit,
  FooterSection,
  SaveBtn,
}
