import axios from "axios";

const baseURL = 'http://localhost:5000/api';

const agent = axios.create({
  baseURL,
});

export const doctorAPI = {
  getAllDoctors: () => agent.get('/doctor').then(response => response.data),
  getDoctor: (id: string) => agent.get(`/doctor/${id}`).then(response => response.data),

}

export const scheduleAPI = {
  getSchedules: () => agent.get('/schedule').then(response => response.data),
  getSchedule: (id: string) => agent.get(`/schedule/${id}`).then(response => response.data),
}

export const userAPI = {
  login: (email: string, password: string) => agent.post('/user/login', { email, password }).then(response => response.data),
}

export const bookingAPI = {

}

export default agent;
