import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";
import axios from "axios";

const initialState = {
  maps: [],
  mapsStatus: STATUS.IDLE,
  mapDetail: null,
  mapDetailStatus: STATUS.IDLE,
};

export const getMaps = createAsyncThunk("getMaps", async () => {
  try {
    const response = await axios.get("https://valorant-api.com/v1/maps");
    return response.data.data;
  } catch (error) {
    throw error;
  }
});
export const getMapDetail = createAsyncThunk("getMapDetail", async (uuid) => {
  try {
    const response = await axios.get(`https://valorant-api.com/v1/maps/${uuid}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMaps.pending, (state, action) => {
        state.mapsStatus = STATUS.LOADING;
      })
      .addCase(getMaps.fulfilled, (state, action) => {
        state.mapsStatus = STATUS.SUCCESS;
        state.maps = action.payload;
      })
      .addCase(getMaps.rejected, (state, action) => {
        state.mapsStatus = STATUS.FAIL;
      })
      .addCase(getMapDetail.pending, (state, action) => {
        state.mapDetailStatus = STATUS.LOADING;
      })
      .addCase(getMapDetail.fulfilled, (state, action) => {
        state.mapDetailStatus = STATUS.SUCCESS;
        state.mapDetail = action.payload;
      })
      .addCase(getMapDetail.rejected, (state, action) => {
        state.mapDetailStatus = STATUS.FAIL;
      });
  },
});

export default mapSlice.reducer;
