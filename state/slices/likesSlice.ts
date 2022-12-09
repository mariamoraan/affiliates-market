import { createSlice } from '@reduxjs/toolkit'

export const likesSlice = createSlice({
    name: 'likes',
    initialState:  {
      likes: [],
    },
    reducers: {
      addLike: (state, action: {type: string, payload: string} ) => {
        state.likes = [...state.likes, action.payload]
      },
      removeLike: (state, action: {type: string, payload: string}) => {
        state.likes = state.likes.filter((id) => id !== action.payload)
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { addLike, removeLike } = likesSlice.actions
  
  export default likesSlice.reducer