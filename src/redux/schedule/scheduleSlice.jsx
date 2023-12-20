import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";
export const scheduleSlice = createSlice({
  name: "Schedule",
  initialState: {
    loading: false,
    successAction: null,
    errorAction: null,
    totalItem: null,
    schedules: [],
  },
  reducers: {
    resetScheduleStatus: (state) => {
      state.successAction = null;
      state.errorAction = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getSchedules.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(actions.getSchedules.fulfilled, (state, action) => {
      state.schedules = action.payload.data;
      state.totalItem = action.payload.counts;
      state.loading = false;
    });
    builder.addCase(actions.getSchedules.rejected, (state, action) => {
      state.errorAction = action.message;
      state.loading = false;
    });
    //Get Schedule By Id
    builder.addCase(actions.getScheduleById.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(actions.getScheduleById.fulfilled, (state, action) => {
        state.currentSchedule = action.payload;
    })
    builder.addCase(actions.getScheduleById.rejected, (state, action) => {
        state.errorAction = action.message;
        state.loading = false;
    });
  },
});

export const { resetScheduleStatus } = scheduleSlice.actions;
export default scheduleSlice.reducer;
