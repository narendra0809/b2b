import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <p className="footer-copyright">
        Copyright &copy; 2024. All rights reserved.
      </p>
      <ul className="footer-links">
        <li>
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/terms-and-conditions" className="footer-link">
            Terms and Conditions
          </Link>
        </li>
        <li>
          <Link to="/refund-policy" className="footer-link">
            Refund Policy
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
