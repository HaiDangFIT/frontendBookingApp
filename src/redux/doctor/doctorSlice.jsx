import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";

export const doctorSlice = createSlice({
  name: "doctor",
  initialState: {
    loading: false,
    successAction: null,
    errorAction: null,
    totalItem: null,
    doctors: [],
  },
  reducers: {
    resetDoctorStatus: (state) => {
      state.successAction = null;
      state.errorAction = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.getDoctors.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(actions.getDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload.data;
        state.totalItem = action.payload.counts;
        state.loading = false;
    });
    builder.addCase(actions.getDoctors.rejected, (state, action) => {
        state.errorAction = action.message;
        state.loading = false;
    });
    
    builder.addCase(actions.getDoctorById.pending, (state) => {
        state.loading = true;
    });
    builder.addCase(actions.getDoctorById.fulfilled, (state, action) => {
        state.currentDoctor = action.payload;
    })
    builder.addCase(actions.getDoctorById.rejected, (state, action) => {
        state.errorAction = action.message;
        state.loading = false;
    });
  },
});

export const { resetDoctorStatus } = doctorSlice.actions;
export default doctorSlice.reducer;
