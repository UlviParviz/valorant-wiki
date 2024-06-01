import { configureStore } from "@reduxjs/toolkit";
import agentSlice from './agentSlice'

export const store = configureStore({
    reducer: {
        agents: agentSlice,
    }
})