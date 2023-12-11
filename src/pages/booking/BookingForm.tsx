import { Box, TextField, Typography } from '@mui/material'
import './style.scss'
const BookingForm = () => {
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
          <Typography variant='body2'>Bác sĩ Chuyên khoa II Trần Minh Khuyên</Typography>
          <Typography variant='body2'>08:30 - 09:00 - Thứ 2 - 11/12/2023</Typography>
        </Box>
      </Box>
      <Box className='bookingInfo'>
        <Box className='textField'>
          <TextField 
            label="Outlined" 
            className='input-field'
          />
        </Box>
      </Box>
    </Box>
  )
}

export default BookingForm