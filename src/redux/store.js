import { configureStore } from "@reduxjs/toolkit";
import agentSlice from './agentSlice'
import mapSlice from './mapSlice'
import weaponSlice from './weaponSlice'

export const store = configureStore({
    reducer: {
      agents: agentSlice,
      maps: mapSlice,
      weapons: weaponSlice
    },
  })