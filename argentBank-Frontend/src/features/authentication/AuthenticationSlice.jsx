import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  access: sessionStorage.getItem("access") === "true",
}

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setAccess: (state) => {
      state.access = true
      sessionStorage.setItem("access", true)
    },
    removeAccess: (state) => {
      state.access = false
      sessionStorage.setItem("access", false)
      window.sessionStorage.removeItem("keys")
    },
  },
})

export const { setAccess, removeAccess } = authenticationSlice.actions
export default authenticationSlice.reducer
