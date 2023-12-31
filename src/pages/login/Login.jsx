// import { Avatar, Box, Container, Stack, TextField, Typography, Button } from '@mui/material'
// import './style.scss'
// import LockPersonIcon from '@mui/icons-material/LockPerson';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '../../redux/store/store';
// import { useState } from 'react';
// import { login } from '../../redux/slice/auth/authSlice';

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch: AppDispatch = useDispatch();
  
//   const { loading } = useSelector((state: RootState) => state.auth);
//   const isLoggedIn = useSelector((state: RootState) => state.auth.isAuthenticated);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const handleLogin = async () => {
//     await dispatch(login(email, password));
//   };

//   if (isLoggedIn) {
//     navigate('/');
//   }

//   return (
//     <div className='loginPage'>
//       <div className="loginBox">
//         <div className="leftLgBox">
//           <img
//             className='loginImg'
//             src='https://img.pikbest.com/png-images/20211011/cartoon-man-sitting-at-home-with-laptop_6140580.png!bw700'
//             alt=''
//           />
//         </div>
//         <div className="rightLgBox">
//           <Container>
//             <Box height={20}/>
//             <Box className='avtBox'>
//               <Avatar className='avatar'>
//                 <LockPersonIcon />
//               </Avatar>
//               <Typography component='h2' variant='h4'>
//                 Đăng nhập
//               </Typography>
//             </Box>
//             <Box className='tField'>
//               <TextField
//                 required
//                 fullWidth
//                 id='email'
//                 label='Tài khoản'
//                 name='email'
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 autoComplete='email'
//                 InputProps={{ style: { color: 'white' } }}
//                 InputLabelProps={{ style: { color: 'white' } }}
//               />
//             </Box>
//             <Box className='tField'>
//               <TextField
//                 required
//                 fullWidth
//                 id='password'
//                 label='Mật khẩu'
//                 name='password'
//                 type='password'
//                 value={password} 
//                 onChange={(e) => setPassword(e.target.value)}
//                 InputProps={{ style: { color: 'white' } }}
//                 InputLabelProps={{ style: { color: 'white' } }}
//               />
//             </Box>
//             <Box className='tField'>
//               <Typography
//                 variant='body2'
//                 component='span'
//                 sx={{cursor: 'pointer'}}
//                 onClick={() => {
//                   navigate('/forgot-password')
//                 }}
//               >
//                 Quên mật khảu
//               </Typography>
//             </Box>
//             <Box sx={{flex: 1}} className='loginBtnBox'>
//               <Button
//                 type='submit'
//                 variant='outlined'
//                 fullWidth
//                 className='loginBtn'
//                 size='medium'
//                 onClick={handleLogin} 
//                 disabled={loading}
//               >
//                 Đăng nhập
//               </Button>
//             </Box>
//             <Box sx={{flex: 1}}>
//               <Stack direction='row' spacing={2} className='tField'>
//                 <Typography
//                   variant='body2'
//                   component='span'
//                   style={{marginTop: '10px'}}
//                 >
//                   Bạn chưa có tài khoản? {' '}
                      
//                   <Typography
//                     variant='body2'
//                     component='span'
//                     onClick={() =>{
//                       navigate('/register')
//                     }}
//                     sx={{cursor: 'pointer'}}
//                   >
//                       Đăng ký ngay
//                   </Typography>
//                 </Typography>
//               </Stack>
//             </Box>
//           </Container>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import { Container, Box, Avatar, Typography, TextField, Button, Stack, Checkbox } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import './style.scss'
import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import CryptoJS from "crypto-js";
import { apiLogin } from "../../apis/user";
import { login } from "../../redux/auth/authSlice";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  useEffect(() => {
    const encryptedPassword = localStorage.getItem("password");

    if (encryptedPassword) {
      const decryptedPassword = CryptoJS.AES.decrypt(
        encryptedPassword,
        "jlasdfmnqweo@#$_)dsf123456"
      ).toString(CryptoJS.enc.Utf8);

      const rememberMeFlag = localStorage.getItem("rememberMe");
      if (rememberMeFlag === "true") {
        const savedEmail = localStorage.getItem("email");

        if (savedEmail) {
          setPayload({
            email: savedEmail,
            password: decryptedPassword,
          });
          setRememberMe(true);
        }
      }
    }
  }, []);
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setPayload((prev) => ({ ...prev, email: emailValue }));
    if (emailValue.trim() === "") {
      setEmailError("");
    } else if (!emailValue.match(/^\S+@\S+\.\S+$/)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPayload((prev) => ({ ...prev, password: passwordValue }));

    // Check for empty password
    if (passwordValue.trim() === "") {
      setPasswordError("");
    } else if (passwordValue.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);

    if (e.target.checked) {
      localStorage.setItem("rememberMe", "true");
      localStorage.setItem("email", payload.email);

      const encryptedPassword = CryptoJS.AES.encrypt(
        payload.password,
        "jlasdfmnqweo@#$_)dsf123456"
      ).toString();

      localStorage.setItem("password", encryptedPassword);
    } else {
      localStorage.removeItem("rememberMe");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  };
  const handlerSubmit = useCallback(async () => {
    if (!payload.email || !payload.password) {
      return Swal.fire("Đăng nhập thất bại", "Vui lòng nhập đầy đủ", " error");
    }
    const rs = await apiLogin(payload);
    if (rs?.success) {
      if (rs?.data?.role === 3 || rs?.data?.role === 4) {
        dispatch(
          login({
            isLoggedIn: true,
            token: rs.accessToken,
            current: rs.data,
          })
        );
        navigate("/");
      } else {
        Swal.fire(
          "Tài khoản không có quyền",
          "Vui lòng đăng nhập lại",
          "error"
        );
      }
    } else {
      Swal.fire("Đăng nhập thất bại", rs.message, "error");
    }
  }, [payload]);
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
                label='Tài khoản'              
                value={payload.email}
                onChange={handleEmailChange}
                error={Boolean(emailError)}
                helperText={emailError}
                autoComplete='email'
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
              />
            </Box>
            <Box className='tField'>
              <TextField
                required
                fullWidth
                id='password'
                label='Mật khẩu'
                name='password'
                type={showPassword ? "text" : "password"}
                value={payload.password}
                error={Boolean(passwordError)}
                helperText={passwordError}
                onChange={handlePasswordChange}
                InputProps={{ style: { color: 'white' } }}
                InputLabelProps={{ style: { color: 'white' } }}
              />
            </Box>
            <Stack
                  width="100%"
                  direction="row"
                  spacing="8px"
                  alignItems="center"
                  marginLeft='3em'
                  marginTop='10px'
            >
                  <Checkbox
                    size="small"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  ></Checkbox>
                  <Typography variant="body2" sx={{ color: "var(--white)" }}>
                    Ghi nhớ đăng nhập
                  </Typography>
            </Stack>
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
                onClick={handlerSubmit}
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