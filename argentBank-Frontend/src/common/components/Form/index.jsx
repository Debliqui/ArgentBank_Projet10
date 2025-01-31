import { useEffect } from "react"
import "./index.scss"

export default function Form() {
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
    const userLogin = JSON.stringify(user)

    fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: userLogin,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur dans l’identifiant ou le mot de passe")
        }
        return response.json()
      })
      .then((data) => {
        window.sessionStorage.setItem("keys", data.body.token)
        window.location.href = "/user"
      })
      .catch((error) => {
        console.error("Error:", error)
        document.querySelector(".messageError").textContent =
          "Identifiant ou le mot de passe incorrect"
      })
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
