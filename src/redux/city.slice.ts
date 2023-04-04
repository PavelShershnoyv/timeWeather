import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IWeatherAPI } from '../interfaces/IWeatherAPI';

const initialState: IWeatherAPI = {current: {
    condition:{
      icon: '',
      text: ''
    },
    temp_c: 0,
    feelslike_c: 0,
    wind_kph: 0,
    pressure_mb: 0,
    humidity: 0,
    uv: 0
  },
  location: {}
}

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IWeatherAPI>) => {
      state.current = action.payload.current;
    }
  }
})

export const cityReducer = citySlice.reducer;
export const cityAction = citySlice.actions;