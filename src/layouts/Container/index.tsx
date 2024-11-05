import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { AUTH_PATH } from '../../constants';
import Footer from '../Footer';
import Header from '../Header';
import useThemeStore from '../../stores/theme.store';
import { Box } from '@mui/material';

/*
! Outlet 컴포넌트
: 라우트 계층 구조에서 상위 라우트의 자식 컴포넌트 렌더링 역할
- Outlet이 위치한 곳에 자식 라우트가 표시
- 상위 라우트의 레이아웃을 공통으로 사용 + 자식 라우트만의 컴포넌트를 렌더링

*/

export default function Container() {

  // useLocation()
  // : 리액트 라우터 라이브러리에서 제공하는 훅(Hook)
  // - 현재 페이지의 정보를 가져옴(현재 경로, 쿼리 파라미터 등)
  
  // const location = useLocation();
  // location.pathname : 현재 경로
  
  const { pathname } = useLocation();

  const { theme } = useThemeStore();

  return (
    <>
      <Header />
      <hr />

      {/* 자식 컴포넌트가 해당 위치에서 렌더링 */}
      <Box
        sx={{
          flex: 1,
          minHeight: '80vh',
          backgroundColor: theme === 'light' ? 'white' : 'grey.900',
          color: theme === 'light' ? 'black' : 'white', // light가 light일 경우 글자색 검정, light가 dark일 경우 white
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'center',
          justifyContent: 'center',
          padding: 2
        }}
      >
        <Outlet /> 
      </Box>
      
      {/* 
        현재 경로(pathname)가 AUTH_PATH (로그인, 회원가입)이 "아니면" Footer 표시 
        : 논리 연산자 (&&, ||, !)
      */}
      {/* 
        pathname !== AUTH_PATH 
      
        1. true일 경우(일치하지 않는 경우)
        - 로그인과 회원가입 페이지 X
        - Footer 표시 O

        >> && 논리 연산자 뒤의 값을 "해석함"

        2. false일 경우(일치하는 경우)
        - 로그인과 회원가입 페이지 O
        - Footer 표시 X

        >> && 논리 연산자 뒤의 값을 "해석하지 않음"
      */}

      <hr />
      { pathname !== AUTH_PATH && <Footer /> }
      {/* { pathname === AUTH_PATH || <Footer /> } */}
    </>
  )
}
