import { Box, TextField, Typography } from '@mui/material'
import './style.scss'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store/store';
import { useEffect } from 'react';
import { fetchDoctor } from '../../redux/slice/doctorSlice';
import { fetchSchedule } from '../../redux/slice/scheduleSlice';

const BookingForm = () => {
  const { id, time } = useParams<{ id: string; time?: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { selectedSchedule } = useSelector((state: RootState) => state.schedule);
  const { selectedDoctor } = useSelector((state: RootState) => state.doctor);
  const timeAsNumber = time ? parseInt(time, 10) : 0;
  
  useEffect(() => {
    if (id) {
      dispatch(fetchSchedule(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedSchedule?.doctorID._id) 
      {
        dispatch(fetchDoctor(selectedSchedule.doctorID._id._id));
      }
    }, [dispatch, selectedSchedule?.doctorID._id])
  console.log(selectedDoctor);
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

  console.log(selectedSchedule);
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
          <Typography variant='body2'>{selectedSchedule?.doctorID.description}</Typography>
          <Typography variant='body2'>{timeSlotToTime[timeAsNumber]}</Typography>
        </Box>
      </Box>
      <Box className='bookingInfo'>
        <Box className='textField'>
          <TextField
            className='input-field'
            required
            id="outlined-required"
            label="Họ và tên"
            value={selectedDoctor?._id?.fullName || ''}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default BookingForm