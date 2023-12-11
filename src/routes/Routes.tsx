import BookingForm from '../pages/booking/BookingForm';
import DoctorDetail from '../pages/doctor/doctor-detail/DoctorDetail';
import DoctorList from '../pages/doctor/doctor-list/DoctorList';
import Home from '../pages/home/HomePage/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';

const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  doctorDetail:'doctor-detail/:id',
  doctorList:'/doctor-list',
  bookingForm:'/booking-form',
};

export const privateRoutes = [];

export const publicRoutes = [
  { path: routes.home, component: Home, layout: true },
  { path: routes.login, component: Login, layout: false},
  { path: routes.register, component: Register, layout: false},
  { path: routes.doctorDetail, component: DoctorDetail, layout: true},
  { path: routes.doctorList, component: DoctorList, layout: true},
  { path: routes.bookingForm, component: BookingForm, layout: true},

];
