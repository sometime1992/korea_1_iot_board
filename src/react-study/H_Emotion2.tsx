/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react'

const containerStyle = css`
  display: flex; // flex 컨테이너 지정
  flex-direction: column; // y축 방향으로 아이템 정렬

  justify-content: center; // 메인축을 따라 정렬
  align-items: center; // 메인축의 수직축을 따라 정렬

  height: 100vh;
  padding: 20px;
  gap: 20px;
  background-color: #f5f5f5;
`;

const sectionStyle = (isReverse: boolean) => css`
  display: flex; // 기본 축이 x축
  flex-direction: row;
  justify-content: ${isReverse ? "flex-end" : "flex-start"};
  align-items: center;
  gap: 10px;

  width: 80%;
  padding: 20px;
  border: 1px solid #ddd;;
  border-radius: 8px;
  background-color: ${isReverse ? "#e3f2fd" : "#ffebee"};

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const itemStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: #bbdefb;
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
const dataStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  background-color: #e3f3fd;
  color: #333;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s background-color 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: #bbdefb;
  }
`;

const idStyle = css`
  font-size: 1.2em;
  color: #1565c0;
  margin-bottom: 8px;
`;

const contentStyle = css`
  font-size: 1em;
  color: #555;
`;

export default function H_Emotion2() {

  const data = [
    { id: 1, content: '보라돌이'},
    { id: 2, content: '뚜비'},
    { id: 3, content: '나나'},
    { id: 4, content: '뽀'},
  ];

  return (
    <div css={containerStyle}>
      <div css={sectionStyle(false)}>
      <div css={itemStyle}>A1</div>
      <div css={itemStyle}>A2</div>
      <div css={itemStyle}>A3</div>
      </div>
      <div css={sectionStyle(true)}>
      <div css={itemStyle}>B1</div>
      <div css={itemStyle}>B2</div>
      <div css={itemStyle}>B3</div>
      </div>
      <div css={sectionStyle(false)}>
      <div css={itemStyle}>C1</div>
      <div css={itemStyle}>C2</div>
      <div css={itemStyle}>C3</div>
      </div>
      
      {data.map(item => (
        <div css={dataStyle}>
          <div css={idStyle}>{item.id}</div>
          <div css={contentStyle}>{item.content}</div>
        </div>
      ))}
    </div>
    
  )
}
