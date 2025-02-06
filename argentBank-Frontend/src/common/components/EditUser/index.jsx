import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  selectUserName,
  selectFirstName,
  selectLastName,
} from "../../../features/user/userSlice"
import { getUserProfile, editUserName } from "../../../features/user/userSlice"
import "./index.scss"

export default function EditUser() {
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName)
  const firstName = useSelector(selectFirstName)
  const lastName = useSelector(selectLastName)

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      userName: document.getElementById("userName").value,
    }
    dispatch(editUserName(user))
    const dialog = document.querySelector("dialog")
    dialog.close()
  }

  useEffect(() => {
    dispatch(getUserProfile())
  }, [dispatch])

  const closeEditUser = (event) => {
    const dialog = document.querySelector("dialog")
    event.preventDefault()
    dialog.close()
  }
  return (
    <>
      <dialog className="edit">
        <h2>Edit user info</h2>
        <form onSubmit={handleSubmit}>
          <div className="edit__wrapper">
            <label htmlFor="userName">User name</label>
            <input
              type="text"
              id="userName"
              placeholder={userName}
              maxLength="15"
              // value={userName}
              // onChange={(e) =>
              //   dispatch(editUserName({ userName: e.target.value }))
              // }
            />
          </div>
          <div className="edit__wrapper">
            <label htmlFor="firstName">First name</label>
            <input
              className="bg-grey"
              type="text"
              id="firstName"
              value={firstName}
              readOnly
            />
          </div>
          <div className="edit__wrapper">
            <label htmlFor="lastName">Last name</label>
            <input
              className="bg-grey"
              type="text"
              id="lastName"
              value={lastName}
              readOnly
            />
          </div>
          <div className="edit__buttons">
            <button className="sign-in-button" type="submit">
              Save
            </button>
            <button className="sign-in-button" onClick={closeEditUser}>
              Cancel
            </button>
          </div>
        </form>
      </dialog>
    </>
  )
}
