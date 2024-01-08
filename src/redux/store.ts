import { configureStore } from '@reduxjs/toolkit'
import productSlice from './slices/productSlice'
import filterSlice from './slices/filterSlice'
import vegetablesSlice from './slices/vegetablesSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    product: productSlice,
    filter: filterSlice,
    vegetables: vegetablesSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;