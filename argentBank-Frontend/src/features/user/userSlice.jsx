import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getUserProfile = createAsyncThunk(
  "user/getUserProfile",
  async () => {
    const isUserLoggedIn = window.sessionStorage.getItem("keys")
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: { Authorization: `Bearer ${isUserLoggedIn}` },
    })
    const data = await response.json()
    return data.body
  }
)

const initialState = {
  firstName: null,
  lastName: null,
  userName: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        userName: action.payload.userName,
      }
    })
  },
})

export const selectFirstName = (state) => state.user.firstName
export const selectLastName = (state) => state.user.lastName
export const selectUserName = (state) => state.user.userName

export default userSlice.reducer
