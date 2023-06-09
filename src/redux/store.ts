import { configureStore } from "@reduxjs/toolkit";
import {cityReducer} from "./city.slice";

export const store = configureStore({
  reducer: {
    city: cityReducer
  }
})