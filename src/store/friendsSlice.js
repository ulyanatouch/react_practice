import { createSlice } from '@reduxjs/toolkit'

const initialState = { friends: [] }

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    // если пользователь с таким id существует, то мы не добавляем его в массив
    // те возвращаем массив
    // а если нет, то добавляем в массив
    addFriend: (state, action) => {
      console.log(action.payload)
    },
    deleteFriend: (state) => state,
  },
})

export const { addFriend, deleteFriend } = friendsSlice.actions
export default friendsSlice.reducer
