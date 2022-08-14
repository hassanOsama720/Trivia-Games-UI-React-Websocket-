import { createSlice } from '@reduxjs/toolkit'

export const questionSlice = createSlice({
  name: 'questions',
  initialState: {
    list:[],
    current:0
  },
  reducers: {
    getQuestions: (state , action) => {
      state.list=action.payload
    },
    addQuestion: (state , action) => {
      state.list = [...state.list , action.payload]
    },
    changeCurrent: (state) => {
      state.current += 1
    },
    resetCurrent: (state) => {
      state.current = 0
    },
    resetQuestions: (state) => {
      state.list = []
    }
  }
})

// Action creators are generated for each case reducer function
export const { getQuestions, addQuestion, changeCurrent, resetCurrent,resetQuestions } = questionSlice.actions

export default questionSlice.reducer


