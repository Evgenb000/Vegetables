import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface InitialStateType {
  sortType: string;
  searchValue: string;
}

const initialState: InitialStateType = {
  sortType: 'price',
  searchValue: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSortType: (state, action: PayloadAction<string>) => {
      state.sortType = action.payload;
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload
    },
    setFilters: (state, action: PayloadAction<InitialStateType>) => {
      state.sortType = action.payload.sortType;
      state.searchValue = action.payload.searchValue;
    }
  },
})

export const { setSortType, setSearchValue, setFilters } = filterSlice.actions

export default filterSlice.reducer