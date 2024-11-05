import React, { useEffect, useState } from 'react'
import useAuthStore from '../../stores/auth.store';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useThemeStore from '../../stores/theme.store';

export default function Header() {
  //* state *//
  //# 사용자의 인증 상태를 전역 상태 관리 //
  const { isAuthenticated, user, logout } = useAuthStore();

  //# 전체 테마의 상태를 전역 상태 관리 //
  const { theme, toggleTheme } = useThemeStore();

  //# 사용자의 토큰을 관리하는 쿠키 //
  const [cookies, setCookies] = useCookies(['token']);

  useEffect(() => {
    if (!cookies.token) {
      logout();
    }
  }, [cookies.token, logout]);

  //* Event Handler *//
  //# event handler: 로그아웃 버튼 클릭 시 이벤트 핸들러 //
  const handleLogoutClick = () => {
    setCookies('token', '', { expires: new Date() });
    logout();
  }

  return (
    <div>
      <Box display='flex' justifyContent='space-between' p={2}>
        <Box 
          flex={1} 
          display='flex' 
          justifyContent='center'
        >
          <Button variant='contained' onClick={toggleTheme}>
            {theme === 'light' ? ' 다크 모드' : '라이트 모드'}
          </Button>
        </Box>
        <Box 
          flex={1} 
          display='flex' 
          justifyContent='center'
          alignItems='center'
          textAlign='center'
        >
          <Link to={''} style={{
            textDecoration: 'none',
            color: 'inherit'
          }}>
            <Typography variant='h3'>코리아IT</Typography>
          </Link>
        </Box>

        <Box flex={1} display='flex' justifyContent='flex-end'>
          {isAuthenticated ? (
            <Typography
              variant='subtitle1'
              m={2}
              onClick={handleLogoutClick}
            >
              로그아웃
            </Typography>
          ) : (
            <Link 
              to={'/auth'}
              style={{
                textDecoration: 'none',
                color: 'inherit'
              }}
            >
              <Typography
                variant='subtitle1'
                m={2}
              >
                로그인
              </Typography>
            </Link>
          )}
        </Box>
      </Box>
    </div>
  )
}
