import Footer from "../../common/components/Footer"
import Header from "../../common/components/Header"
import { useState, useEffect } from "react"

import "./index.scss"
import accountContent from "../../assets/accountContent.json"
import Account from "../../common/components/Account"

export default function Profile() {
  const isUserLoggedIn = window.sessionStorage.getItem("keys")
  const [userInformation, setUserInformation] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/user/profile", {
      method: "GET",
      headers: { Authorization: `Bearer ${isUserLoggedIn}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("You are disconnected")
        }
        return response.json()
      })
      .then((data) => {
        setUserInformation(data.body)
      })
      .catch(() => {
        window.location.href = "/"
      })
  }, [isUserLoggedIn])

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <header className="header">
          <h2>
            Welcome back
            <br />
            {userInformation &&
              `${userInformation.firstName} ${userInformation.lastName}!`}
          </h2>
          <button className="edit-button">Edit Name</button>
        </header>
        <h3 className="sr-only">Accounts</h3>
        {accountContent.map((account) => (
          <Account
            key={account.id}
            title={account.title}
            amount={account.amount}
            amountDescription={account.amountDescription}
          />
        ))}
      </main>
      <Footer />
    </>
  )
}
