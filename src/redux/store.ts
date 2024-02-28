import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "@/redux/features/drawerSlice"
import themeReducer from "@/redux/features/themeSlice"

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    theme: themeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch