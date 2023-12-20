import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";

export const getDoctors = createAsyncThunk(
  "doctor/doctorsFetch",
  async (data, { rejectWithValue }) => {
    const response = await apis.apiGetAllDoctors(data);
    if (!response.success) {
      return rejectWithValue(response);
    }
    return response;
  }
);

export const getDoctorById = createAsyncThunk(
  'doctor/getDoctor',
  async (doctorId, { rejectWithValue }) => {
    try {
      const response = await apis.apiGetDoctor(doctorId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);