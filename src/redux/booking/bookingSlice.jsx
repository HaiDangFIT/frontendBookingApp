import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./asyncAction";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    loading: false,
    successAction: null,
    errorAction: null,
  },
  reducers: {
    resetBookingStatus: (state) => {
      state.successAction = null;
      state.errorAction = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actions.addBooking.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(actions.addBooking.fulfilled, (state, action) => {
      state.successAction = action.payload.message;
      state.loading = false;
    });
    builder.addCase(actions.addBooking.rejected, (state, action) => {
      state.errorAction = action.payload.message;
      state.loading = false;
    });
  },
});

export const { resetBookingStatus } = bookingSlice.actions;
export default bookingSlice.reducer;
