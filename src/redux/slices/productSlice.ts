import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface initialStateType {
  counterProducts: number[];
  totallyAmountProducts: number;
}

const initialState: initialStateType = {
  counterProducts: [ ...new Array(20).fill(0) ],
  totallyAmountProducts: 0,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    incrementProducts: (state, action: PayloadAction<number>) => {
      state.counterProducts[action.payload]++;
      state.totallyAmountProducts++;
    },
    decrementAmountProducts: (state, action: PayloadAction<number>) => {
      state.counterProducts[action.payload]--;
      state.totallyAmountProducts--;
    },
    clearProducts: (state) => {
      state.counterProducts.fill(0);
      state.totallyAmountProducts = 0;
    }
  },
})

export const { incrementProducts, decrementAmountProducts, clearProducts } = productSlice.actions

export default productSlice.reducer