import { Box, Button, Divider, Typography } from '@mui/material'
import './style.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const DoctorDetail = () => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());

    return (
        <Box className='doctorDetail'>
            <Box className='doctorInfor'>
                <Box className='doctorImgBox'>
                    <img
                        src='https://png.pngtree.com/png-vector/20221006/ourlarge/pngtree-chibi-doctor-kids-cute-boy-png-image_6288993.png'
                        className='doctorImg'
                        alt=''
                    />
                </Box>
                <Box className='doctorDescription'>
                    <Box sx={{flex: 1}}>
                        <Typography variant='h5'>
                            Bác sĩ Chuyên khoa II Trần Minh Khuyên
                        </Typography>
                    </Box>
                    <Box sx={{flex: 1}}>
                        <Typography variant='body3'>
                            Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh
                            Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris)
                            Bác sĩ nhận khám từ 16 tuổi trở lên
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className='doctorSchedule'>
                <Box className='schedule'>
                    <Box className='datePicker'>
                        <DatePicker 
                            selected={startDate} 
                            onChange={(date) => setStartDate(date)} 
                        />
                    </Box>
                    <Box className='calendar'>
                        <CalendarMonthIcon/>
                        <Typography variant='body2' fontWeight='bold'>LỊCH KHÁM</Typography>
                    </Box>
                    <Box className='boxSchedule'>
                        <Box className='boxBtn'>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                        </Box>
                        <Box className='boxBtn'>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                        </Box>
                        <Box className='boxBtn'>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                            <Button variant="outlined" size='small' className='btnSchedule'>7:00 - 8:00</Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='address'>
                    <Typography variant='body1' fontWeight='bold'>ĐỊA CHỈ KHÁM</Typography>
                    <Typography variant='body2' fontWeight='bold'>Phòng khám Bệnh viện Đại học Y Dược 1</Typography>
                    <Typography variant='body2'>20-22 Dương Quang Trung, Phường 12, Quận 10, Tp. HCM</Typography>
                    <Divider/>
                    <Typography variant='body1' fontWeight='bold'>GIÁ KHÁM: </Typography>
                    <Typography variant='body2'>250.000đ - 500.000đ</Typography>                    
                </Box>
            </Box>
            <Divider sx={{margin:'20px 0px'}}/>
            <Box className='boxPatientCmt'>
                <Typography variant='body1' fontWeight='bold'>Phản hồi của bệnh nhân sau khi đi khám</Typography>
                <Divider sx={{marginBottom:'10px'}}/>
                <Box className='patientCmt'>
                    <Typography variant='body3' fontWeight='bold'>Huỳnh Nhật Hoàng</Typography>
                    <CheckCircleIcon style={{ fontSize: 15, color: '#33CCFF' }} />
                    <Typography variant='body3' color='#33CCFF'>đã khám ngày 29/11/2023</Typography>
                </Box>
                <Typography variant='body2'>Hoàn toàn hài lòng</Typography>
                <Divider sx={{marginBottom:'10px'}}/>
                <Box className='patientCmt'>
                    <Typography variant='body3' fontWeight='bold'>Võ Ngọc Thiên Bảo</Typography>
                    <CheckCircleIcon style={{ fontSize: 15, color: '#33CCFF' }} />
                    <Typography variant='body3' color='#33CCFF'>đã khám ngày 22/07/2023</Typography>
                </Box>
                <Typography variant='body2'>
                    Dịch vụ tốt, thân thiện, chu đáo. Cảm ơn bệnh viện, nhân viên.
                </Typography>
            </Box>
        </Box>
        
        
    )
}

export default DoctorDetail