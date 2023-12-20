// utils/auth.ts
import axios from 'axios';

export const setAuthToken = (token: string | null) => {
  if (token) {
    // Gắn token vào tiêu đề 'Authorization' của mọi yêu cầu Axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Nếu không có token, xóa tiêu đề 'Authorization'
    delete axios.defaults.headers.common['Authorization'];
  }
};
