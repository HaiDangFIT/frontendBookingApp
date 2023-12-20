import { Box, Button, TextField, Typography } from '@mui/material'
import './style.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getScheduleById } from '../../redux/schedule/asyncAction';
import { login } from '../../redux/auth/authSlice';
import { getCurrent } from '../../redux/auth/asyncAction';
import { convertDateFormat } from '../../utils/dateUtils';
import { apiAddBookingByPatient, resetBookingStatus } from '../../redux/booking/bookingSlice';


const BookingForm = () => {
  const { id, time } = useParams();
  const dispatch = useDispatch();
  const { currentSchedule } = useSelector((state) => state.schedule);
  const { isLoggedIn, current } = useSelector((state) => state.auth);
  const { successAction, errorAction } = useSelector((state) => state.booking);
  useEffect(() => {
        const setTimeoutID = setTimeout(() => {
                if (isLoggedIn) dispatch(getCurrent());
            }, 24 * 60 * 60 * 1000);
            return () => {
                clearTimeout(setTimeoutID);
            };
  }, [dispatch, isLoggedIn]);
  const handleBooking = (scheduleID, time, images) => {
    dispatch(apiAddBookingByPatient({ scheduleID, time, images }));
  };
  useEffect(() => {
    if (successAction) {
      // Xử lý sau khi đặt lịch thành công
      // Ví dụ: Chuyển hướng trang, hiển thị thông báo, v.v.
      
      // Reset trạng thái booking sau khi xử lý thành công
      dispatch(resetBookingStatus());
    }
  }, [successAction, dispatch]);

  // Xử lý lỗi khi đặt lịch thất bại
  useEffect(() => {
    if (errorAction) {
      // Xử lý khi có lỗi trong quá trình đặt lịch
      // Ví dụ: Hiển thị thông báo lỗi, ghi log, v.v.

      // Reset trạng thái booking sau khi xử lý lỗi
      dispatch(resetBookingStatus());
    }
  }, [errorAction, dispatch]);

  const timeAsNumber = time ? parseInt(time, 10) : 0;
  const timeSlotToTime = {
    '1': '7:00 - 8:00',
    '2': '8:00 - 9:00',
    '3': '9:00 - 10:00',
    '4': '10:00 - 11:00',
    '5': '11:00 - 12:00',
    '6': '12:00 - 13:00',
    '7': '13:00 - 14:00',
    '8': '14:00 - 15:00',
    '9': '15:00 - 16:00',
    '10': '16:00 - 17:00',
    '11': '17:00 - 18:00',
    '12': '18:00 - 19:00',
    '13': '19:00 - 20:00',
  };
  useEffect(() => {
    dispatch(getScheduleById(id));
  }, [dispatch]);
  return (
    <Box className='boxBookingForm'>
      <Box className='doctorInfoBox'>
        <Box className='doctorImgBox'>
          <img
            src='https://png.pngtree.com/png-vector/20221006/ourlarge/pngtree-chibi-doctor-kids-cute-boy-png-image_6288993.png'
            className='doctorImg'
            alt=''
          />
        </Box>
        <Box className='doctorInfo'>
          <Typography variant='body2'>ĐẶT LỊCH KHÁM</Typography>
          <Typography variant='body2'>{currentSchedule?.doctorID.description}</Typography>
          <Typography variant='body2'>
            {timeSlotToTime[timeAsNumber]} ngày {convertDateFormat(currentSchedule?.date || '')}  
          </Typography>
        </Box>
      </Box>
      <Box className='bookingInfo'>
        <Box className='textField'>
          <TextField
            className='bookingTextField'
            required
            fullWidth
            //id="outlined-required"
            label="Họ và tên"
            value={current?.fullName || ''}
            InputProps={{
              style: {
                color: 'black',          
              },
            }}
          />
          <TextField
            className='bookingTextField'
            required
            fullWidth
            //id="outlined-required"
            label="Số điện thoại"
            value={current?.mobile || ''}
            InputProps={{
              style: {
                color: 'black',          
              },
            }}
          />
          <Button className='btnBooking' variant='contained' color='primary' onClick={handleBooking}>
            Đặt lịch
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default BookingForm
