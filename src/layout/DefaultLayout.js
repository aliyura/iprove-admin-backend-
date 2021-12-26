import React from 'react'
import { getUserDetails, isAuthenticated } from 'src/auth'
import { useEffect, useState } from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { getParams } from 'src/utils'
import Loader from 'src/components/utils/loader/Loader'

const DefaultLayout = () => {
  const [session, setSession] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const init = () => {
    setIsLoading(true)
    var param = getParams()
    if (param != null) {
      let user = JSON.parse(param['?user'])
      localStorage.setItem('SESSION', JSON.stringify(user))
      setSession(user)
    } else {
      var user = getUserDetails()
      setSession(user)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    init()
  }, [])

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  } else {
    if (session !== null) {
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
    }
  }
}

export default DefaultLayout
