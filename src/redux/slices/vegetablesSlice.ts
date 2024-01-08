import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type FetchedVegetablesType = {
  sortBy: string,
  orderBy: string,
  searchBy: string,
};

type VegetablesType = {
  id: number;
  title: string,
  image: string,
  price: number,
  rating: number,
  category: string[]
}

export enum Status {
  LOADING = 'loading',
  COMPLETE = 'complete',
  ERROR = 'error',
}

interface InitialStateType {
  items: VegetablesType[],
  status: Status;
}

export const fetchedVegetables = createAsyncThunk<VegetablesType[], FetchedVegetablesType> (
  'vegetables/fetchedVegetablesById',
  async (params) => {
    const { sortBy, orderBy, searchBy } = params;
    const { data } = await axios.get<VegetablesType[]>(
      `https://657da2483e3f5b189462dae7.mockapi.io/Vegetables?${sortBy}&order=${orderBy}&category=${searchBy}`
    );

    return data;
  }
)

const initialState: InitialStateType = {
  items: [],
  status: Status.LOADING
}

export const vegetablesSlice = createSlice({
  name: 'vegetables',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<VegetablesType[]>) => {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchedVegetables.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchedVegetables.fulfilled, (state, action) => {
      state.status = Status.COMPLETE;
      state.items = action.payload;
    });
    builder.addCase(fetchedVegetables.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  }
})

export const { setItems } = vegetablesSlice.actions

export default vegetablesSlice.reducer