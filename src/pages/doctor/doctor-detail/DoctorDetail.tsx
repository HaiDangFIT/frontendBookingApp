import { Box, Button, Divider, Typography } from '@mui/material'
import './style.scss'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useEffect, useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { fetchDoctor } from '../../../redux/slice/doctorSlice';
import { fetchSchedules } from '../../../redux/slice/scheduleSlice';

const DoctorDetail = () => {
    let dateToFind: string | null = null;;
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();
    const dispatch: AppDispatch = useDispatch();
    const { selectedDoctor } = useSelector((state: RootState) => state.doctor);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const { schedules } = useSelector((state: RootState) => state.schedule);

    const allTimeSlots = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'
    ];

    const timeSlotToTime: Record<string, string> = {
        '1': '6:00 - 7:00',
        '2': '7:00 - 8:00',
        '3': '8:00 - 9:00',
        '4': '9:00 - 10:00',
        '5': '10:00 - 11:00',
        '6': '11:00 - 12:00',
        '7': '12:00 - 13:00',
        '8': '13:00 - 14:00',
        '9': '14:00 - 15:00',
        '10': '15:00 - 16:00',
        '11': '16:00 - 17:00',
        '12': '17:00 - 18:00',
        '13': '18:00 - 19:00',
    };

    if (startDate != null) {
        // Set time to midnight (00:00:00) to compare only the date
        startDate.setHours(0, 0, 0, 0);

        // Convert to Vietnamese time zone
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'Asia/Ho_Chi_Minh',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        };

        dateToFind = new Date(startDate).toLocaleString('vi-VN', options);
    }
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (id) {
            dispatch(fetchDoctor(id));
          }
    }, [dispatch, id]);

    const matchingSchedules = schedules.find((schedule) => {
        // Chuyển đổi startDate sang chuỗi ngày tháng năm
        const options: Intl.DateTimeFormatOptions = {
            timeZone: 'Asia/Ho_Chi_Minh',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        };
        const scheduleDate = new Date(schedule.date).toLocaleString('vi-VN', options);
        return schedule.doctorID._id._id === selectedDoctor?._id?._id && scheduleDate === dateToFind;
    });
    let formattedCost = '';
    if (matchingSchedules?.cost) {
        formattedCost = matchingSchedules?.cost?.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
    } else {
        formattedCost = 'Hiện chưa có giá khám của bác sĩ vào ngày này'
    }
    

    console.log(matchingSchedules);

    useEffect(() => {
        dispatch(fetchSchedules());
    }, [dispatch]);

    const handleButtonClick = (time: string) => {
        navigate(`/booking-form/${matchingSchedules?._id}/${time}`);
    };

    // Sắp xếp theo lưới 3x5
    const gridLayout: string[][] = [];
    const itemsPerRow = 3;
    for (let i = 0; i < allTimeSlots.length; i += itemsPerRow) {
        gridLayout.push(allTimeSlots.slice(i, i + itemsPerRow));
    }
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
                            {selectedDoctor?.description}
                        </Typography>
                    </Box>
                    <Box sx={{flex: 1}}>
                        <Typography variant='body3'>
                            Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh <br/>
                            Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris)<br/>
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
                            onChange={(startDate) => setStartDate(startDate)} 
                        />
                        
                    </Box>
                    <Box className='calendar'>
                        <CalendarMonthIcon/>
                        <Typography variant='body2' fontWeight='bold'>LỊCH KHÁM</Typography>
                    </Box>
                    <Box className='boxSchedule'>
                        {gridLayout.map((row, rowIndex) => (
                            <Box key={rowIndex} className='boxBtn'>
                                {row.map((timeSlot) => (
                                    <Button
                                        key={timeSlot}
                                        variant="outlined"
                                        size='small'
                                        className='btnSchedule'
                                        onClick={() => handleButtonClick(timeSlot)}
                                        disabled={!matchingSchedules?.timeType.some(slot => slot.time === timeSlot)}
                                    >
                                        {timeSlotToTime[timeSlot]}
                                    </Button>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box className='address'>
                    <Typography variant='body1' fontWeight='bold'>ĐỊA CHỈ KHÁM</Typography>
                    <Typography variant='body2' fontWeight='bold'>{selectedDoctor?.clinicID.name}</Typography>
                    <Typography variant='body2'>
                        {selectedDoctor?.clinicID.address.detail}{', '}
                        {selectedDoctor?.clinicID.address.ward}{', '}      
                        {selectedDoctor?.clinicID.address.district}{', '}
                        {selectedDoctor?.clinicID.address.province}
                    </Typography>
                    <Divider/>
                    <Typography variant='body1' fontWeight='bold'>GIÁ KHÁM: </Typography>
                    <Typography variant='body2'>
                        {formattedCost}
                    </Typography>                    
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