import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDoctorById } from '../../../redux/doctor/asyncAction';
import { useParams, useNavigate } from 'react-router-dom';
import { getSchedules } from '../../../redux/schedule/asyncAction';
import { Box, Button, Divider, Typography } from '@mui/material'
import './style.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const DoctorDetail = () => {
  const dispatch = useDispatch();
  const { schedules } = useSelector((state) => state.schedule);
  const [startDate, setStartDate] = useState(new Date());
  const { currentDoctor } = useSelector((state) => state.doctor);
  const { id } = useParams();
  const navigate = useNavigate();
  let dateToFind = null;
  useEffect(() => {
    dispatch(getDoctorById(id)); 
  }, [dispatch, id]);
  useEffect(() => {
      dispatch(getSchedules());
  }, [dispatch]);
  if (!currentDoctor) {
    return <div>Loading...</div>;
  }
  const allTimeSlots = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'
  ];
  const timeSlotToTime = {
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
    const options = {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };

    dateToFind = new Date(startDate).toLocaleString('vi-VN', options);
  }

  // Sắp xếp theo lưới 3x5
  const gridLayout = [];
  const itemsPerRow = 3;
  for (let i = 0; i < allTimeSlots.length; i += itemsPerRow) {
    gridLayout.push(allTimeSlots.slice(i, i + itemsPerRow));
  }

  const matchingSchedules = schedules.find((schedule) => {
    // Kiểm tra schedules
    if (!schedules || schedules.length === 0) {
      return false;
    }

    // Kiểm tra giá trị của schedule.doctorID._id._id và currentDoctor?._id?._id
    const doctorIdMatch = schedule.doctorID?._id?._id === currentDoctor?._id?._id;
    if (!doctorIdMatch) {
      return false;
    }

    // Kiểm tra giá trị của schedule.date
    if (!schedule.date) {
      return false;
    }

    // Chuyển đổi startDate sang chuỗi ngày tháng năm
    const options = {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    const scheduleDate = new Date(schedule.date).toLocaleString('vi-VN', options);

    // Kiểm tra giá trị của dateToFind
    if (!dateToFind) {
      return false;
    }

    // Kiểm tra điều kiện
    return scheduleDate === dateToFind;
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
  const handleButtonClick = (time) => {
    navigate(`/booking-form/${matchingSchedules?._id}/${time}`);
  };
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
              {currentDoctor.description}
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
            <Typography variant='body2' fontWeight='bold'>{currentDoctor?.clinicID.name}</Typography>
            <Typography variant='body2'>
              {currentDoctor?.clinicID.address.detail}{', '}
              {currentDoctor?.clinicID.address.ward}{', '}      
              {currentDoctor?.clinicID.address.district}{', '}
              {currentDoctor?.clinicID.address.province}
            </Typography>
            <Divider/>
              <Typography variant='body1' fontWeight='bold'>GIÁ KHÁM: </Typography>
              <Typography variant='body2'>
                {formattedCost}
              </Typography>                    
          </Box>
      </Box>
    </Box>
  );
};

export default DoctorDetail;
