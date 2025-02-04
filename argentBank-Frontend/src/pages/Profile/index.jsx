import Footer from "../../common/components/Footer"
import Header from "../../common/components/Header"

import "./index.scss"
import accountContent from "../../assets/accountContent.json"
import Account from "../../common/components/Account"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
  getUserProfile,
  selectFirstName,
  selectLastName,
} from "../../features/user/userSlice"
import { NavLink } from "react-router"

export default function Profile() {
  const dispatch = useDispatch()
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)

  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])

  return (
    <>
      <Header />
      <main className="main bg-dark">
        {firstName === null ? (
          <>
            <section className="error-connect">
              <h2>Your are not connect</h2>
              {
                <NavLink className="button" to="/login">
                  Login
                </NavLink>
              }
            </section>
          </>
        ) : (
          <>
            <header className="header">
              <h2>
                Welcome back
                <br />
                {`${firstName} ${lastName}!`}
              </h2>
              <button className="button">Edit Name</button>
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
          </>
        )}
      </main>
      <Footer />
    </>
  )
}
