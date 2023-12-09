import { Box, Button, Typography } from '@mui/material'
import './style.scss'
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
    const navigate = useNavigate();
    return (
        <Box className='boxDoctorList'>
            <Box className='doctorCard'>
                <Box className='doctorCardHeader'>
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
                                Nguyên Trưởng khoa lâm sàng, Bệnh tâm thần Thành phố Hồ Chí Minh <br/>
                                Tốt nghiệp Tâm lý trị liệu, trường Tâm lý Thực hành Paris (Psychology practique de Paris) <br/>
                                Bác sĩ nhận khám từ 16 tuổi trở lên
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className='cardContent'>
                    <Box className='cardBtn'>
                        <Button 
                            variant='outlined' 
                            onClick={() => {
                                navigate('/doctor-detail')
                            }}
                        >
                            Xem chi tiết
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default DoctorList