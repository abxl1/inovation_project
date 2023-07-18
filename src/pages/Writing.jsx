import React, { useState, useCallback, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { addPosts } from '../axios/api';

function Writing() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false); // 드래깅 상태를 추적하는 새로운 상태

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleCancelImage = () => {
    setImage(null);
  };

  const handleDragEnter = useCallback((event) => {
    event.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    setImage(file);
  }, []);

  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const queryClient = useQueryClient();
  // const addPostsMutation = useMutation(addPosts, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries('posts');
  //   }
  // });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    try {
      await addPosts(formData);
      queryClient.invalidateQueries('posts');
      navigate('/');
      alert("작성완료되었습니다!");
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <WritingPageWrapper
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
      isDragging={isDragging}
    >
      <StLogo onClick={() => navigate('/')}>알록짤록</StLogo>
      <WritingForm onSubmit={handleSubmit}>
        <WritingTitle>짤 던지기</WritingTitle>
        <InputField
          type="text"
          placeholder="제목"
          value={title}
          onChange={handleTitleChange}
        />
        <TextArea
          placeholder="내용"
          value={content}
          onChange={handleContentChange}
        ></TextArea>
        <FileDropArea>
          {image ? (
            <>
              <PreviewImage src={URL.createObjectURL(image)} alt="Preview" />
              <CancelButton onClick={handleCancelImage}>
                이미지 취소
              </CancelButton>
            </>
          ) : (
            <>
              <DropComment>이미지 파일 드래그 앤 드롭<br/>or</DropComment>
              <BrowseButton onClick={handleBrowseClick}>찾아보기</BrowseButton>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                style={{ display: 'none' }}
              />
            </>
          )}
        </FileDropArea>
        <SubmitButton type="submit">작성 완료</SubmitButton>
      </WritingForm>
    </WritingPageWrapper>
  );
}

export default Writing;

const StLogo = styled.div`
  border: 2px solid #ffce50;
  border-radius: 14px;
  padding: 20px;
  font-size: 50px;
  margin-bottom: 70px;
  cursor: pointer;
`;

const WritingPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: #242426;
`;

const WritingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ffce50;
  border-radius: 4px;
  width: 700px;
  height: auto;
`;

const WritingTitle = styled.div`
  font-size: 40px;
  margin-bottom: 60px;
  color: #ffce50;
`;

const InputField = styled.input`
  font-size: 30px;
  width: 100%;
  padding: 10px;
  margin-bottom: 40px;
  background-color: #ffce50;
  color: #242426;
  border: 1px solid #ffce50;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  font-size: 30px;
  width: 100%;
  min-height: 50px;
  padding: 10px;
  margin-bottom: 40px;
  background-color: #ffce50;
  color: #242426;
  border: 1px solid #ffce50;
  border-radius: 4px;
  resize: vertical;
`;

const FileDropArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 200px;
  background-color: ${(props) => (props.isDragging ? '#ffce50' : '#f6f6f6')};
  border: 2px dashed ${(props) => (props.isDragging ? '#ffce50' : '#ccc')};
  border-radius: 4px;
  margin-bottom: 40px;
  transition: background-color 0.3s, border-color 0.3s;
`;

const DropComment = styled.div`
  background-color: #f6f6f6;
  color: #242426;
  text-align: center;
`;

const PreviewImage = styled.img`
  max-width: 600px;
  max-height: 600px;
  margin: 30px 0 10px 0;
`;

const BrowseButton = styled.button`
  padding: 10px 30px;
  background-color: #ffce50;
  color: #242426;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
`;

const CancelButton = styled.button`
  padding: 10px 30px;
  background-color: #ffce50;
  color: #242426;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0 20px 0;
`;

const SubmitButton = styled.button`
  padding: 30px 100px;
  background-color: #ffce50;
  color: #242426;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 25px;
  margin-top: 30px;
  margin-bottom: 20px;
`;
