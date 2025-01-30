import { BrowserRouter, Routes, Route } from "react-router"
import Home from "../pages/Home"
import SignIn from "../pages/SignIn"
import User from "../pages/User"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
