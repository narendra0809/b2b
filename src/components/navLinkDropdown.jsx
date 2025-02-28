import { Children, useState } from 'react'

const NavLinkDropdown = ({ title, iconClass, children }) => {
  const [navDropdown, setNavDropdown] = useState(false)

  const handleDropdown = () => {
    setNavDropdown(!navDropdown)
  }

  const isSubActive = () => {
    return Children.toArray(children).some(
      (child) => child.props && child.props.isActive && child.props.isActive()
    )
  }

  return (
    <div className="nav-link-dropdown-cont">
      <button
        className={`nav-link nav-dropdown-btn ${isSubActive() ? 'active' : ''}`}
        onClick={handleDropdown}
      >
        <div className="nav-dropdown-title">
          <i className={`${iconClass} nav-icons`}></i>
          <span className="no-display">{title}</span>
        </div>
        <i className="fa-solid fa-chevron-right nav-dropdown-icons no-display"></i>
      </button>
      <div className={`nav-link-dropdown-menu ${navDropdown ? 'active' : ''}`}>
        <div className="nav-dropdown-link-cont">{children}</div>
      </div>
    </div>
  )
}

export default NavLinkDropdown
