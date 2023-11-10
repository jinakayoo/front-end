import React, { useState } from 'react';
import styled from 'styled-components';

const CommentListContainer = styled.div`
  width: 100%;
`;

const CommentItem = styled.div`
  padding: 15px 25px;
  margin: 40px 0;
  border: 3px solid #7C8BBE;
  border-radius: 30px;
  font-family: 'SCDream4', sans-serif;
  font-size: 18px;
  color: #313866;
  cursor: ${({ isSelectable }) => (isSelectable ? 'pointer' : 'default')};

  ${({ isSelected }) => isSelected && `
    background-color: #7C8BBE;
    color: #F6F1FB;
  `}
`;

const Content = styled.div`
  margin: 5px 0;
`;

const CommentList = ({ comments, isSelectable }) => {
  const [selectedComments, setSelectedComments] = useState([]);

  const handleCommentClick = (index) => {
    if (isSelectable) {
      // 선택 가능한 경우에만 선택 상태를 업데이트
      if (selectedComments.includes(index)) {
        // 이미 선택된 경우, 선택 해제
        setSelectedComments(selectedComments.filter((selected) => selected !== index));
      } else {
        // 선택되지 않은 경우, 선택 추가
        setSelectedComments([...selectedComments, index]);
      }
    }
  };

  return (
    <CommentListContainer>
      {comments.map((comment, index) => (
        <CommentItem
          key={index}
          isSelected={selectedComments.includes(index)}
          isSelectable={isSelectable}
          onClick={() => handleCommentClick(index)}
        >
          <div>{comment.userName}</div>
          <div>{comment.createdAt}</div>
          <Content>{comment.content}</Content>
        </CommentItem>
      ))}
    </CommentListContainer>
  );
};

export default CommentList;
