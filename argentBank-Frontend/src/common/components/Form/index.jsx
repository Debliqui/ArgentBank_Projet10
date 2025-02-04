import { useEffect } from "react"
import "./index.scss"
import { useDispatch } from "react-redux"
import { loginUser } from "../../../features/authentication/AuthenticationAction"

export default function Form() {
  const dispatch = useDispatch()
  const rememberMe = () => {
    const rememberMeInput = document.getElementById("remember-me").checked
    const email = document.getElementById("email").value

    if (rememberMeInput && email) {
      window.localStorage.setItem("rememberedemail", email)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    rememberMe()
    const user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }
    dispatch(loginUser(JSON.stringify(user)))
  }
  useEffect(() => {
    if (window.localStorage.getItem("rememberedemail")) {
      document.getElementById("email").value =
        window.localStorage.getItem("rememberedemail")
    }
  }, [])
  return (
    <form onSubmit={handleSubmit}>
      <p className="messageError" />
      <div className="input-wrapper">
        <label htmlFor="email">Username</label>
        <input type="text" id="email" required="required" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required="required" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  )
}
