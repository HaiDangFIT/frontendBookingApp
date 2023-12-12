import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Schedule } from "../../models/schedule";
import { scheduleAPI } from "../../api/agent";
import { AppThunk } from "../store/store";

interface ScheduleState {
  schedules: Schedule[];
  selectedSchedule: Schedule | null;
  loading: boolean;
  error: string | null;
}

const initialState: ScheduleState = {
  schedules: [],
  selectedSchedule: null,
  loading: false,
  error: null,
};

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
      //getAllSchedule
      getSchedulesStart(state) {
        state.loading = true;
        state.error = null;
      },
      getSchedulesSuccess(state, action: PayloadAction<Schedule[]>) {
        state.loading = false;
        state.schedules = action.payload;
      },
      getSchedulesFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
      },
      //getScheduleById
      getScheduleStart(state) {
        state.loading = true;
        state.error = null;
      },
      getScheduleSuccess(state, action: PayloadAction<Schedule>) {
        state.loading = false;
        state.selectedSchedule = action.payload;
      },
      getScheduleFailure(state, action: PayloadAction<string>) {
        state.loading = false;
        state.error = action.payload;
      },

    },
});

export const {
  //getAllSchedule
  getSchedulesStart,
  getSchedulesSuccess,
  getSchedulesFailure,
  //getScheduleById
  getScheduleStart,
  getScheduleSuccess,
  getScheduleFailure,
} = scheduleSlice.actions;

export const fetchSchedules = (): AppThunk => async (dispatch) => {
    try {
      dispatch(getSchedulesStart());
      const response = await scheduleAPI.getSchedules();
      
      // Kiểm tra xem response có thuộc tính "data" không và có phải là một mảng không
      const scheduleArray = Array.isArray(response.data) ? response.data : [];
  
      dispatch(getSchedulesSuccess(scheduleArray));
    } catch (error) {
      dispatch(getSchedulesFailure(String(error)));
    }
};

export const fetchSchedule = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getScheduleStart());
    const response = await scheduleAPI.getSchedule(id);
    dispatch(getScheduleSuccess(response.data));
  } catch (error) {
    dispatch(getScheduleFailure(String(error)));
  }
};

export default scheduleSlice.reducer;