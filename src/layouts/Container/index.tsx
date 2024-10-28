import React from 'react'
import { Outlet } from 'react-router-dom'

/*
! Outlet 컴포넌트
: 라우트 계층 구조에서 상위 라우트의 자식 컴포넌트 렌더링 역할
- Outlet이 위치한 곳에 자식 라우트가 표시
- 상위 라우트의 레이아웃을 공틍으로 사용 + 자식 라우트만의 컴포넌트를 렌더링

*/

export default function Container() {

  return (
    <>
      {/* <Header/> */}

      {/* 자식 컴포넌트가 해당 위치에서 렌더링 */}
      <Outlet />
      
      {/* <Footer/> */}
    </>
  )
}
