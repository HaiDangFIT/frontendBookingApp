import { Typography, Button, Divider } from '@mui/material'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './style.scss'
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="navbar">
                <div className="navContainer">
                    <Typography variant='h4' fontFamily={'Ephesis, cursive'} className='navTitle'>BookingApp</Typography>
                    <div className="navItems">
                        <Button 
                            variant='outlined' 
                            className='navButton' 
                            onClick={() => {
                                navigate('/login')
                            }}
                        >
                            Đăng nhập
                        </Button>
                        <Button 
                            variant='outlined' 
                            className='navButton'
                            onClick={() => {
                                navigate('/register')
                            }}
                        >
                            Đăng ký
                        </Button>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="navbarList">
                <div className="headerListItem">
                    <HomeIcon/>
                    <span>Trang chủ</span>
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