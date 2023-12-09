import { Avatar, Box, Container, Stack, TextField, Typography, Button } from '@mui/material'
import './style.scss'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className='loginPage'>
      <div className="loginBox">
        <div className="leftLgBox">
          <img
            className='loginImg'
            src='https://img.pikbest.com/png-images/20211011/cartoon-man-sitting-at-home-with-laptop_6140580.png!bw700'
            alt=''
          />
        </div>
        <div className="rightLgBox">
          <Container>
            <Box height={20}/>
            <Box className='avtBox'>
              <Avatar className='avatar'>
                <LockPersonIcon />
              </Avatar>
              <Typography component='h2' variant='h4'>
                Đăng nhập
              </Typography>
            </Box>
            <Box className='tField'>
              <TextField
                required
                fullWidth
                id='email'
                label='Tài khoản'
                name='email'
                autoComplete='email'
              />
            </Box>
            <Box className='tField'>
              <TextField
                required
                fullWidth
                id='password'
                label='Mật khẩu'
                name='password'
                type='password'
              />
            </Box>
            <Box className='tField'>
              <Typography
                variant='body2'
                component='span'
                sx={{cursor: 'pointer'}}
                onClick={() => {
                  navigate('/forgot-password')
                }}
              >
                Quên mật khảu
              </Typography>
            </Box>
            <Box sx={{flex: 1}} className='loginBtnBox'>
              <Button
                type='submit'
                variant='outlined'
                fullWidth
                className='loginBtn'
                size='medium'
              >
                Đăng nhập
              </Button>
            </Box>
            <Box sx={{flex: 1}}>
              <Stack direction='row' spacing={2} className='tField'>
                <Typography
                  variant='body2'
                  component='span'
                  style={{marginTop: '10px'}}
                >
                  Bạn chưa có tài khoản? {' '}
                      
                  <Typography
                    variant='body2'
                    component='span'
                    onClick={() =>{
                      navigate('/register')
                    }}
                    sx={{cursor: 'pointer'}}
                  >
                      Đăng ký ngay
                  </Typography>
                </Typography>
              </Stack>
            </Box>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Login