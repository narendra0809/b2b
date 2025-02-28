import { useContext } from 'react'
import { NavContext } from './context/navContext'

/* -- components -- */
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer'
import BalanceContextProvider from './context/balanceContext'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  /* -- contexts -- */
  const { navActive } = useContext(NavContext)

  return (
    <>
      <BalanceContextProvider>
        <Header />
        <div className="d-flex align-items-stretch">
          <Navbar />
          <main className={navActive ? 'active' : ''}>
            <div className="page-wrapper">
              <Outlet />
            </div>
            <Footer />
          </main>
        </div>
      </BalanceContextProvider>
    </>
  )
}

export default Layout
