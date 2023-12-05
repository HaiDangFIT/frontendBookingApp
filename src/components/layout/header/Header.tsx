import './style.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SearchIcon from '@mui/icons-material/Search';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import { Button } from '@mui/material';

const Header = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  return(
    <div className="header">
        <div className="headerContainer">
            <h1 className="headerTitle">Nền tảng y tế sức khỏe toàn diện</h1>
            <p className="headerDesc">
                Đặt khám nhanh - Lấy số thứ tự trực tuyến - Tư vấn sức khỏe từ xa
            </p>
            <Button variant='outlined' className='headerBtn'>Sign in / Register</Button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <SearchIcon className='headerIcon'/>
                    <input 
                        type="text" 
                        placeholder='Nhập tên bác sĩ' 
                        className='headerSearchInput' 
                    />
                </div>
                <div className="headerSearchItem">
                    <CalendarMonthIcon className='headerIcon'/>
                    <span className="headerSearchText">chọn ngày</span>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='date'/>
                </div>
                <div className="headerSearchItem">
                    <Button variant='outlined' className="headerBtn">Search</Button>
                </div>
            </div>
        </div>
    </div>
  ) 
};

export default Header;
