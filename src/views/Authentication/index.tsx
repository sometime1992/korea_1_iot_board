import React, { useState } from 'react'
import SignUp from './SignUp';
import { Box, Typography } from '@mui/material';
import SignIn from './SignIn';

// Authentication 컴포넌트
// : 사용자가 로그인 또는 회원가입 화면을 전환할 수 있는 기능을 제공
export default function Authentication() {
  // view 상태
  // : 현재 화면이 로그인인지, 회원가입인지 상태를 저장
  const [view, setView] = useState<'sign-in' | 'sign-up'>('sign-in');

  // 화면을 전환하는 함수 (로그인 <-> 회원가입)
  const toggleView = () => {
    setView(view === 'sign-in' ? 'sign-up' : 'sign-in');
    // view === 'sign-in' ? setView('sign-up') : setView('sign-in');
  }

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      {/* 현재 view 상태에 따라 로그인 또는 회원가입 제목 표시 */}
      <Typography variant='h4' textAlign='center'>
        {view === 'sign-in' ? '로그인' : '회원가입'}
      </Typography>

      {/* 로그인 또는 회원가입 컴포넌트 표시 */}
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        {view === 'sign-in' ? (
          <SignIn />
        ) : (
          <SignUp />
        )}
      </Box>

      {/* 로그인/회원가입 전환을 위한 텍스트 */}
      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Typography sx={{ cursor: 'pointer' }} onClick={toggleView}>
          {view === 'sign-in'
            ? '계정이 없으신가요? 회원가입'
            : '이미 계정이 있으신가요? 로그인'
          }
        </Typography>
      </Box>
    </Box>
  )
}
