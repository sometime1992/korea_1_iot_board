import React from 'react';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

interface PaginationProp {
  pageList: number[]; // 페이지 번호 목록 배열
  currentPage: number; // 현재 페이지 번호

  // 특정 페이지 클릭 시 호출 함수
  handlePageClick: (page: number) => void;

  // 이전/다음 섹션으로 이동 버튼 클릭 시 호출 함수
  handlePreSectionClick: () => void;
  handleNextSectionClick: () => void;
}

// 해당 pagination 메인 컴포넌트
const paginationBoxStyle = css`
  display: flex;
  align-items: center;
  gap: 24px;
`;

// 버튼 스타일: 아이콘과 호버/포커스 효과 포함
const buttonStyle = css`
  width: 40px;
  height: 40px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e2e8f0;
  }

  &:focus {
    outline: 2px solid #1a73e8
  }
`;

// 페이지 번호 목록 스타일
const pageListStyle = css`
  display: flex;
  gap: 16px;
`;

// 페이지 번호 스타일: 활성화 여부에 따라 스타일 변경
const pageStyle = (isActive: boolean) => css`
  color: ${isActive ? '#1a73e8' : '#6b7280'};
  font-size: 14px;
  font-weight: ${isActive ? '700' : '400'};
  cursor: ${isActive ? 'default' : 'pointer'};
  transition: color 0.3s;

  &:hover {
    color: ${!isActive && '#374151'};
    /* 비활성 페이지만 호버 시 색상 변경 */
  }
`;

// react-icons 설치 명령어
// : npm i react-icons

export default function Pagination({
  pageList, // pageList배열형식
  currentPage,
  handlePageClick,
  handlePreSectionClick,
  handleNextSectionClick
}: PaginationProp) {
  return (
    <div css={paginationBoxStyle}>
      {/* Pagination 컴포넌트를 감싸는 상자 */}

      <button 
        css={buttonStyle}
        onClick={handlePreSectionClick}
        // 이전 버튼에 아이콘 설정
      >
        <AiOutlineLeft size={24} />
      </button>

      <div css={pageListStyle}>
        {/* 페이지 번호 목록을 담는 컨테이너 */}

        {pageList.map(page => (
          <div
            key={page}
            css={pageStyle(page === currentPage)}
            onClick={() => page !== currentPage && handlePageClick
            // 현재 페이지와 클릭한 페이지 번호가 같지 않을 때만 이벤트 처리
            (page)}
          >
            {page}
          </div>
        ))}
      </div>

      <button 
        css={buttonStyle}
        // 다음 버튼에 아이콘 설정
        onClick={handleNextSectionClick}
      >
        <AiOutlineRight size={24} />
      </button>
    </div>
  )
}