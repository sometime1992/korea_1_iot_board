import React from 'react'
import { useCookies } from 'react-cookie'

/*
! react-cookie
: React에서 쿠키를 쉽게 관리할 수 있도록 도와주는 "라이브러리"
- 쿠키의 생성, 접근, 수정, 삭제 기능을 담당

<< 설치 명령어 >>
npm i react-cookie
npm i --save @types/react-cookie

<< 기본 사용법 >>
react-cookie는 useCookies 훅을 통해 
  쿠키(cookies), 쿠키설정함수(setCookie)
  , 쿠키제거함수(removeCookie)를 반환

const [ cookies, setCookie, removeCookie ]
  = useCookies(['쿠키이름']);

cf) useCookies 훅에 전달되는 배열(인자값)
    : 배열로써 관리하고자 하는 쿠키의 이름을 전달
    : 사용자가 현재 컴포넌트에서 접근하려는 쿠키 이름을 지정하는 역할
    - 쿠키에 대한 접근: 'cookies.쿠키이름'을 통해 쿠키값 반환
*/

export default function D_react_cookie() {
  // 'user'라는 이름의 쿠키를 관리
  const [ cookies, setCookie, removeCookie ] = useCookies(['user']);

  // 쿠키 설정 함수
  const handleSetCookie = () => {
    // setCookie('쿠키이름', '쿠키값', 옵션설정-선택)
    setCookie('user', '이승아', { 
      path: '/',
      // new Date(): 새로운 날짜 지정
      // - Date.now(): 현재 날짜를 반환
      // - 1000 * 60 * 60 * 24 (1일)
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24)
    });
  }
  console.log(Date);

  // 쿠키 삭제 함수
  const handleRemoveCookie = () => {
    // removeCookie('쿠키이름', 옵션설정-선택)
    removeCookie('user', { path: '/' });
  }

  //? react-cookie 옵션 설정 (선택)
  /*
    path: 쿠키가 유효한 경로를 지정
      - 주로 '/'를 설정하여 모든 경로에서 유효하도록 쿠키를 설정
    expires: 쿠키의 만료 시간을 설정
      - 특정 날짜와 시간을 지정하여 만료되도록 설정
    maxAge: 쿠키의 유효 시간을 초 단위로 설정
      - 현재 시간부터 지정한 시간 동안 쿠키가 유지
        (생성된 지점으로부터 시간을 기준으로 유효 시간 설정)
    secure: true로 설정 시 HTTPS에서만 쿠키가 전송
    sameSite: 쿠키가 전송될 조건을 제한
      - 'strict' 속성을 사용하여
          다른 사이트에서의 요청에서는 쿠키가 포함되지 않도록 제한
  */

  return (
    <div>
      <button onClick={handleSetCookie}>쿠키 설정 버튼</button>
      <button onClick={handleRemoveCookie}>쿠키 제거 버튼</button>

      User Cookie: {cookies.user}
    </div>
  )
}
