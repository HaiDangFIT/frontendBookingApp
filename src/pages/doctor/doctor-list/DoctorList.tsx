import { Box, Button, Typography } from '@mui/material'
import './style.scss'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store/store';
import { useEffect } from 'react';
import { fetchDoctors } from '../../../redux/slice/doctorSlice';

const DoctorList = () => {
    const dispatch: AppDispatch = useDispatch();
    const { doctors, loading, error } = useSelector((state: RootState) => state.doctor);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchDoctors());
        //dispatch(fetchDoctorCount());
    }, [dispatch]);
    
    if (!Array.isArray(doctors)) {
        return <div>No doctors available</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    return (
        <Box className='boxDoctorList'>
            {doctors.map(doctor => (
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
                                    Bác sĩ {doctor.description}
                                </Typography>
                            </Box>
                            <Box sx={{flex: 1}}>
                                <Typography variant='body3'>
                                    {doctor.specialtyID.name} {doctor.clinicID.name}
                                </Typography>
                                <Typography variant='body3'>
                                    Liên hệ: {doctor._id.mobile}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='cardContent'>
                        <Box className='cardBtn'>
                            <Button 
                                variant='outlined' 
                                onClick={() => {
                                    navigate(`/doctor-detail/${doctor._id._id}`)
                                }}
                            >
                                Xem chi tiết
                            </Button>
                        </Box>
                    </Box>
                </Box>
            ))}
            
        </Box>
    )
}

export default DoctorList