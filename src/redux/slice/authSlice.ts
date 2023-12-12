import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/user";
import { userAPI } from "../../api/agent";
import { AppThunk } from "../store/store";

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //Đăng nhập
        loginStart(state) {
            state.loading = true;
            state.error = null;
        },
        loginSuccess(state, action: PayloadAction<any>) {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        loginFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
        //Đăng xuất
        logout(state) {
            state.isAuthenticated = false;
            state.user = null;
        },
    }
});

export const { 
    loginStart, 
    loginSuccess, 
    loginFailure, 
    logout,
  
} = authSlice.actions;

export const login = (email: string, password: string): AppThunk => async (dispatch) => {
  try {
    dispatch(loginStart());
    const response = await userAPI.login(email, password);
    if (response.success) {
      dispatch(loginSuccess(response.data));
      console.log('Login success')
    } else {
      dispatch(loginFailure(response.message));
    }
  } catch (error) {
    dispatch(loginFailure(String(error)));
  }
};

export default authSlice.reducer;