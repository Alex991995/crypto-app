import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

interface coinProps {
  coins: string[] | undefined
}


const initialState:coinProps = {
  coins: [],
}

export const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    
  },
})



export const selectCount = (state: RootState) => state.coins.coins
export default coinsSlice.reducer