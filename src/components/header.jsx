import { useContext } from 'react'
import { useAuth } from '../context/authContext'
import { NavContext } from '../context/navContext'
import { Link } from 'react-router-dom'

import './header.css'
import { useBalance } from '../context/balanceContext'

const Header = () => {
  const agentRole = 'agent'
  const { authUser } = useAuth()
  const { balance } = useBalance()
  const { navActive, setNavActive } = useContext(NavContext)
  const activateNav = () => {
    setNavActive(!navActive)
  }

  // const userData = useApiData(`${base_url}/api/register/${authUser.id}`, token)

  return (
    <header>
      <div className="header-left">
        <div className={`header-logo ${navActive ? 'deactive' : ''}`}>
          {navActive ? (
            <img src="/images/logo-short.png" alt="DigiFlex" />
          ) : (
            <img src="/images/logo.png" alt="DigiFlex" />
          )}
        </div>
        <button className="header-btn" onClick={activateNav}>
          <i className="fa-solid fa-bars fs-5"></i>
        </button>
      </div>

      <div className="d-flex gap-3 align-items-center">
        {authUser.role === agentRole && (
          <span className="fs-8">
            Balance: {balance ? `₹ ${balance}` : 'loading...'}
          </span>
        )}
        <button className="header-btn fs-8">
          <i className="fa-solid fa-user me-2"></i>
          <span>{authUser.username}</span>
        </button>
      </div>
    </header>
  )
}

export default Header
