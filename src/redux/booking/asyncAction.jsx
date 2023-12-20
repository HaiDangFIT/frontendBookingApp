// asyncAction.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";

export const addBookingByPatient = createAsyncThunk(
  "booking/addBooking",
  async (data, { rejectWithValue }) => {
    const response = await apis.apiAddBookingByPatient(data);
    if (!response.success) {
      return rejectWithValue(response);
    }
    return response;
  }
);
