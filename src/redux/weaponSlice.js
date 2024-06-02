import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { STATUS } from '../utils/status';
import axios from 'axios';

const initialState = {
  weapons: [],
  weaponsStatus: STATUS.IDLE,
  weaponDetail: null,
  weaponDetailStatus: STATUS.IDLE,
};

export const getWeapons = createAsyncThunk('getWeapons', async () => {
    try {
      const response = await axios.get('https://valorant-api.com/v1/weapons');
      return response.data.data;
    } catch (error) {
      throw error;
    }
  });
  
  export const getWeaponDetail = createAsyncThunk('getWeaponDetail', async (uuid) => {
    try {
      const response = await axios.get(`https://valorant-api.com/v1/weapons/${uuid}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  });

const weaponSlice = createSlice({
  name: 'weapons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeapons.pending, (state, action) => {
        state.weaponsStatus = STATUS.LOADING;
      })
      .addCase(getWeapons.fulfilled, (state, action) => {
        state.weaponsStatus = STATUS.SUCCESS;
        state.weapons = action.payload; 
      })
      .addCase(getWeapons.rejected, (state, action) => {
        state.weaponsStatus = STATUS.FAIL;
      })
      .addCase(getWeaponDetail.pending, (state, action) => {
        state.weaponDetailStatus = STATUS.LOADING;
      })
      .addCase(getWeaponDetail.fulfilled, (state, action) => {
        state.weaponDetailStatus = STATUS.SUCCESS;
        state.weaponDetail = action.payload; 
      })
      .addCase(getWeaponDetail.rejected, (state, action) => {
        state.weaponDetailStatus = STATUS.FAIL;
      });
  },
});

export default weaponSlice.reducer;