import { useEffect, useState } from 'react'
import useSendData from '../hooks/useSendData'

import Alert from '../components/alert'
import { useAuth } from '../context/authContext'

const ChangePassword = () => {
  const base_url = process.env.REACT_APP_API_URL
  const { authToken: token } = useAuth()

  /* -- States -- */
  const [msg, setMsg] = useState(null)
  const [succ, setSucc] = useState(false)
  const [popUp, setPopUp] = useState(false)

  /* -- form -- */
  const defaultForm = {
    current_password: '',
    new_password: '',
    new_password_confirmation: '',
  }
  const [data, setData] = useState({ ...defaultForm })

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget

    setData((item) => ({
      ...item,
      [name]: value,
    }))
  }

  const { sendData, response, loading } = useSendData(
    `${base_url}/api/changePassword`,
    token
  )

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (
      data.current_password === '' ||
      data.new_password === '' ||
      data.new_password_confirmation === ''
    ) {
      setSucc(false)
      setMsg('All fields are required')
      setPopUp(true)
      return
    }

    if (
      data.current_password < 8 ||
      data.new_password < 8 ||
      data.new_password_confirmation < 8
    ) {
      setSucc(false)
      setMsg('All password Fields needs to be atleast 8 characters')
      setPopUp(true)
      return
    }

    if (data.new_password !== data.new_password_confirmation) {
      setSucc(false)
      setMsg("Confirmation password doesn't match")
      setPopUp(true)
      return
    }

    sendData(data)
  }
  useEffect(() => {
    if (!loading && response) {
      setSucc(response?.success)
      if (response?.success) {
        setMsg(response.message)
        setData({ ...defaultForm })
      } else {
        setMsg(
          typeof response.error === 'object'
            ? Object.values(response.error.new_password)[0]
            : response.error
        )
      }
      setPopUp(true)
    }
  }, [loading])

  return (
    <>
      <Alert
        open={popUp}
        handleClose={() => {
          setPopUp(false)
        }}
        success={succ}
      >
        <p>{msg}</p>
      </Alert>
      <section className="page-section">
        <div className="page-header">
          <h1 className="page-title">Change Password</h1>
        </div>

        <div className="px-2 py-2 px-md-4 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="current_password" className="fw-bold mb-1">
                Current Password
              </label>
              <input
                type="password"
                id="current_password"
                className="form-control"
                placeholder="Your Old Password..."
                name="current_password"
                value={data.current_password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="new_password" className="fw-bold mb-1">
                New Password
              </label>
              <input
                type="password"
                id="new_password"
                className="form-control"
                placeholder="Your New Password..."
                name="new_password"
                value={data.new_password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="new_password_confirmation"
                className="fw-bold mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="new_password_confirmation"
                className="form-control"
                placeholder="Confirm Password..."
                name="new_password_confirmation"
                value={data.new_password_confirmation}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <button className="btn btn-success" type="submit">
                {loading ? 'Changing...' : 'Change'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default ChangePassword
