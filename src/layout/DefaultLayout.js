import React from 'react'
import { isAuthenticated } from 'src/auth'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  if (isAuthenticated()) {
    return (
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <AppContent />
          </div>
          <AppFooter />
        </div>
      </div>
    )
  } else {
    window.location.href = 'https://iprove.ng/auth/login'
    return <></>
  }
}

export default DefaultLayout
