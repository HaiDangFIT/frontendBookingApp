import { Typography, Button, Divider, Box } from '@mui/material'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCurrent } from '../../../redux/auth/asyncAction';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../../redux/auth/authSlice';

const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.auth);
    useEffect(() => {
        const setTimeoutID = setTimeout(() => {
                if (isLoggedIn) dispatch(getCurrent());
            }, 24 * 60 * 60 * 1000);
            return () => {
                clearTimeout(setTimeoutID);
            };
    }, [dispatch, isLoggedIn]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };
    return (
        <>
            <div className="navbar">
                <div className="navContainer">
                    <Typography variant='h4' fontFamily={'Ephesis, cursive'} className='navTitle'>BookingApp</Typography>
                    <div className="navItems">
                        {isLoggedIn ? (
                        <>
                            <Box sx={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                <Button variant='outlined' className='navButton' onClick={handleLogout}>
                                    Đăng xuất
                                </Button>
                            </Box>
                        </>
                        ) : (
                        <>
                            <Box sx={{display:'flex', flexDirection:'row'}}>
                                <Button variant='outlined' className='navButton' onClick={() => navigate('/login')}>
                                    Đăng nhập
                                </Button>
                                <Button variant='outlined' className='navButton' onClick={() => navigate('/register')}>
                                    Đăng ký
                                </Button>
                            </Box> 
                        </>
                        )}
                            
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="navbarList">
                <div className="headerListItem">
                    <HomeIcon/>
                    <span
                        onClick={() => {
                                navigate('/')
                        }}
                    >
                        Trang chủ
                    </span>
                </div>
                <div className="headerListItem">
                    <VaccinesIcon/>
                    <span 
                        onClick={() => {
                                navigate('/doctor-list')
                        }}
                    >
                        Bác sĩ
                    </span>
                </div>
                <div className="headerListItem">
                    <LocalHospitalIcon/>
                    <span>Phòng khám</span>
                </div>
                <div className="headerListItem">
                    <CalendarMonthIcon/>
                    <span>Lịch khám</span>
                </div>
            </div>                
        </>
    )
}

export default NavBar