import { createSlice } from '@reduxjs/toolkit'

export const followerSlice = createSlice({
  name: 'followers',
  initialState: {
    list:{},
    tempList:{},
    topList:[],
    socket:""
  },
  reducers: {
    addTempFollower: (state , action) => {
      state.tempList={...state.tempList , [action.payload.name]:action.payload}
    },
    addFollower: (state , action) => {
      if(state.list[action.payload.name]){
        state.list = {...state.list , [action.payload.name]:{...state.list[action.payload.name] ,points:(state.list[action.payload.name].points+1)}}
      }
      else{
        state.list = {...state.list , [action.payload.name]:action.payload}
      }
    },
    addPoint: (state , action) => {
      state.list = {...state.newList , [action.payload]:{...state.newList[action.payload] ,points:(state.newList[action.payload].points+1)}}
    },
    addTop: (state , action) => {
      state.topList = action.payload
    },
    resetTempFollower: (state) => {
      state.tempList = {};
    },
    socketConnect:(state,action) =>{
      state.socket = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { addFollower, addTempFollower,addTop, resetTempFollower, socketConnect, addNew } = followerSlice.actions

export default followerSlice.reducer