import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import './style.scss'
import LockPersonIcon from '@mui/icons-material/LockPerson';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [gender, setGender] = useState(true);
    const navigate = useNavigate();

    const handleCheckboxGender = () => {
        setGender(!gender);
    };
    return (
        <div className='registerPage'>
            <div className='registerBox'>
                <div className='leftRgBox'>
                    <img
                        className='registerImg'
                        src='https://img.pikbest.com/png-images/20211011/cartoon-man-sitting-at-home-with-laptop_6140580.png!bw700'
                        alt=''
                    />
                </div>
                <div className="rightRgBox">
                    <Container>
                        <Box height={20}/>
                        <Box className='avtBox'>
                            <Avatar className='avatar'>
                                <LockPersonIcon />
                            </Avatar>
                            <Typography component='h2' variant='h4'>
                                Đăng ký tài khoản
                            </Typography>
                        </Box>
                        <Box sx={{flex: 1}}>
                            <Box className='tField'>
                                <TextField
                                    required
                                    fullWidth
                                    id='fullName'
                                    label='Họ và tên'
                                    name='fullName'
                                    autoComplete='fullName'
                                />
                            </Box>
                            <Box className='tField'>
                                <TextField
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email'
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
                                    type='password'
                                    name='password'
                                    autoComplete='password'
                                />
                            </Box>
                            <Box className='tField'>
                                <TextField
                                    required
                                    fullWidth
                                    id='mobile'
                                    label='Số điện thoại'
                                    name='mobile'
                                    autoComplete='mobile'
                                />
                            </Box>
                            <Box className='genderBox'>
                                <FormControlLabel 
                                    control={<Checkbox checked={gender}/>} 
                                    onClick={handleCheckboxGender}
                                    label='Nam'            
                                />
                                <FormControlLabel 
                                    control={<Checkbox checked={!gender}/>} 
                                    onClick={handleCheckboxGender}
                                    label='Nữ'            
                                />
                            </Box>
                            <Box className='registerBtnBox'>
                                <Button
                                    type='submit'
                                    variant='outlined'
                                    fullWidth
                                    className='registerBtn'
                                    size='medium'
                                >
                                    Đăng ký
                                </Button>
                            </Box>
                            <Box sx={{flex: 1}}>
                                <Stack direction='row' spacing={2} className='tField'>
                                    <Typography
                                    variant='body2'
                                    component='span'
                                    style={{marginTop: '10px'}}
                                    >
                                    Bạn đã có tài khoản? {' '}
                                        <Typography
                                        variant='body2'
                                        component='span'
                                        onClick={() =>{
                                            navigate('/login')
                                        }}
                                        sx={{cursor: 'pointer'}}
                                        >
                                        Đăng nhập ngay
                                        </Typography>
                                    </Typography>
                                </Stack>
                            </Box>
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Register