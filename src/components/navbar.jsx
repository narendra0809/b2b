import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

import { useAuth } from '../context/authContext'
import { NavContext } from '../context/navContext'

import './navbar.css'
import NavLinkDropdown from './navLinkDropdown'

const Navbar = () => {
  const adminRole = 'admin'
  const { authUser, logout } = useAuth()
  const { navActive } = useContext(NavContext)

  return (
    <nav className={navActive ? 'active' : ''}>
      <div className="nav-links">
        <NavLink to={'/dashboard'} className="nav-link">
          <i className="fa-solid fa-gauge nav-icons"></i>
          <span className="no-display">Dashboard</span>
        </NavLink>
        {authUser.role === adminRole && (
          <NavLinkDropdown title={'Settings'} iconClass={'fa-solid fa-gear'}>
            <NavLink to="/destinations" className="nav-dropdown-link">
              <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
              Destinations
            </NavLink>
            <NavLink to="/hotels" className="nav-dropdown-link">
              <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
              Hotels
            </NavLink>
            <NavLink to="/sightseeing" className="nav-dropdown-link">
              <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
              Sightseeing
            </NavLink>
            <NavLink to="/transportation" className="nav-dropdown-link">
              <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
              Transportation
            </NavLink>
          </NavLinkDropdown>
        )}
        {authUser.role === adminRole && (
          <NavLink to={'/taxes'} className="nav-link">
            <i className="fa-solid fa-file-invoice nav-icons"></i>
            <span className="no-display">Taxes</span>
          </NavLink>
        )}
        {authUser.role === adminRole && (
          <NavLinkDropdown title={'Manage'} iconClass={'fa-solid fa-gear'}>
            <NavLink to="/agents" className="nav-dropdown-link">
              <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
              Agents
            </NavLink>
            <NavLink to="/staff" className="nav-dropdown-link">
              <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
              Staff
            </NavLink>
          </NavLinkDropdown>
        )}

        {authUser.role === adminRole && (
          <NavLink to={'/all-accounts'} className="nav-link">
            <i className="fa-solid fa-file-invoice-dollar nav-icons"></i>
            <span className="no-display">All Accounts</span>
          </NavLink>
        )}
        <NavLink to={'/banking'} className="nav-link">
          <i className="fa-solid fa-piggy-bank nav-icons"></i>
          <span className="no-display">Banking</span>
        </NavLink>

        {authUser.role === adminRole && (
          <NavLink to={'/agent-wallets'} className="nav-link">
            <i className="fa-solid fa-file-invoice-dollar nav-icons"></i>
            <span className="no-display">Agent Wallets</span>
          </NavLink>
        )}

        <NavLink to={'/customers'} className="nav-link">
          <i className="fa-solid fa-user nav-icons"></i>
          <span className="no-display">Customers</span>
        </NavLink>
        <NavLink to={'/final-customers'} className="nav-link">
          <i className="fa-regular fa-user nav-icons"></i>
          <span className="no-display">Final Customers</span>
        </NavLink>
        <NavLink to={'/confirmation-list'} className="nav-link">
          <i className="fa-solid fa-list-ul nav-icons"></i>
          <span className="no-display">Confirmation List</span>
        </NavLink>
        <NavLinkDropdown
          title={'Price'}
          iconClass={'fa-solid fa-indian-rupee-sign'}
        >
          <NavLink to="/room-price" className="nav-dropdown-link">
            <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
            Room Price
          </NavLink>
          <NavLink to="/transport-price" className="nav-dropdown-link">
            <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
            Transport Price
          </NavLink>
          <NavLink to="/sightseeing-price" className="nav-dropdown-link">
            <i className="fa-solid fa-chevron-right nav-dropdown-icons"></i>
            Sightseeing Price
          </NavLink>
        </NavLinkDropdown>
        <NavLink to={'/wallet'} className="nav-link">
          <i className="fa-brands fa-google-wallet nav-icons"></i>
          <span className="no-display">Wallet</span>
        </NavLink>
        <NavLink to={'/payments'} className="nav-link">
          <i className="fa-regular fa-credit-card nav-icons"></i>
          <span className="no-display">Payments</span>
        </NavLink>
        <NavLink to={'/change-password'} className="nav-link">
          <i className="fa-solid fa-key nav-icons"></i>
          <span className="no-display">Change Password</span>
        </NavLink>
        <NavLink to={'/change-profile'} className="nav-link">
          <i className="fa-solid fa-user-pen nav-icons"></i>
          <span className="no-display">Change Profile</span>
        </NavLink>

        <button type="button" className={`nav-link`} onClick={logout}>
          <i className="fa-solid fa-power-off nav-icons"></i>
          <span className="no-display">Logout</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
