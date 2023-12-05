import { Typography } from '@mui/material'
import './style.scss'

const PopularDoctor = () => {
  return (
    <div className="dList">
        <div className="dListItem">
            <img
                src='http://3.bp.blogspot.com/-vugJVgyECIM/VbAEw0OGrkI/AAAAAAAADls/5KKVlWo4dm8/s1600/doctor5.jpg'
                alt=''
                className='dListImg'
            />
            <div className='dListTitles'>
                <Typography variant='h1'>Bác sĩ A</Typography>
                <Typography variant='h2'>Tai - Mũi - Họng</Typography>
            </div>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
        </div>
        <div className="dListItem">
            <img
                src='http://3.bp.blogspot.com/-vugJVgyECIM/VbAEw0OGrkI/AAAAAAAADls/5KKVlWo4dm8/s1600/doctor5.jpg'
                alt=''
                className='dListImg'
            />
            <div className='dListTitles'>
                <Typography variant='h1'>Bác sĩ A</Typography>
                <Typography variant='h2'>Tai - Mũi - Họng</Typography>
            </div>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
        </div>
        <div className="dListItem">
            <img
                src='http://3.bp.blogspot.com/-vugJVgyECIM/VbAEw0OGrkI/AAAAAAAADls/5KKVlWo4dm8/s1600/doctor5.jpg'
                alt=''
                className='dListImg'
            />
            <div className='dListTitles'>
                <Typography variant='h1'>Bác sĩ A</Typography>
                <Typography variant='h2'>Tai - Mũi - Họng</Typography>
            </div>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
        </div>
        <div className="dListItem">
            <img
                src='http://3.bp.blogspot.com/-vugJVgyECIM/VbAEw0OGrkI/AAAAAAAADls/5KKVlWo4dm8/s1600/doctor5.jpg'
                alt=''
                className='dListImg'
            />
            <div className='dListTitles'>
                <Typography variant='h1'>Bác sĩ A</Typography>
                <Typography variant='h2'>Tai - Mũi - Họng</Typography>
            </div>
            <div className="fpRating">
              <button>8.9</button>
              <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default PopularDoctor