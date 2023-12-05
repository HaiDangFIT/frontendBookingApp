import { Typography, Button } from '@mui/material'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import HomeIcon from '@mui/icons-material/Home';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './style.scss'
const NavBar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navContainer">
                <Typography variant='h4' fontFamily={'Ephesis, cursive'} className='navTitle'>BookingApp</Typography>
                <div className="navItems">
                    <Button variant='outlined' className='navButton'>Đăng nhập</Button>
                    <Button variant='outlined' className='navButton'>Đăng ký</Button>
                </div>
            </div>
        </div>
        <div className="navbarList">
            <div className="headerListItem active">
                <HomeIcon/>
                <span>Trang chủ</span>
            </div>
            <div className="headerListItem">
                <VaccinesIcon/>
                <span>Bác sĩ</span>
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