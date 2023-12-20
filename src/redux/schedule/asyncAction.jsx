import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../../apis";

export const getSchedules = createAsyncThunk(
  "schedule/schedulesFetch",
  async (data, { rejectWithValue }) => {
    const response = await apis.apiGetAllSchedules(data);
    if (!response.success) {
      return rejectWithValue(response);
    }
    return response;
  }
);
export const addSchedule = createAsyncThunk(
  "schedule/addSchedule",
  async (data, { rejectWithValue }) => {
    const response = await apis.apiAddSchedule(data);
    if (!response.success) {
      return rejectWithValue(response);
    }
    return response;
  }
);

export const getScheduleById = createAsyncThunk(
  "schedule/getSchedule",
  async (scheduleId, { rejectWithValue }) => {
    try {
      const response = await apis.apiGetSchedule(scheduleId);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
