import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import UseState from './react-study/A_useState';
import Container from './layouts/Container';
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_UPDATEL_PATH, BOARD_WRITE_PATH, MAIN_PATH, REACT_STUDY_PATH, USER_PATH } from './constants';
import Main from './views/Main';
import Authentication from './views/Authentication';
import Board from './views/Board';
import User from './views/User';

function App() {
  return (
    <>
      {/* 빈 Fragment: 최상위 단일 노드를 위한 틀 */}
      <Routes>
        <Route element={<Container />}>
          {/* 
          Route 컴포넌트의 index 속성
          : 상위 컴포넌트의 경로로 출력 (기본 자식 라우트)
          */}
          <Route path={MAIN_PATH} element={<Main />} />

          {/* 로그인 + 회원가입 화면 */}
          <Route path={AUTH_PATH} element={<Authentication/>} />

          {/* 게시물 상세 보기 화면 */}
          <Route path={BOARD_DETAIL_PATH(':boardNumber')} element={<Board/>} />

          {/* 게시글 작성 화면 */}
          <Route path={BOARD_WRITE_PATH} element={<Board/>} />

          {/* 게시글 수정 화면 */}
          <Route path={BOARD_UPDATEL_PATH(':boardNumber')} element={<Board/>} />

          {/* 마이페이지 */}
          <Route path={USER_PATH} element={<User/>} />

          {/* 리액트 학습 */}
          <Route path={REACT_STUDY_PATH} element={<UseState/
          >} >
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
