import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilAppsSettings,
  cilArrowCircleRight,
  cilArrowRight,
  cilBell,
  cilMenu,
  cilMoney,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import Logo from 'src/assets/images/logo.png'
import { getUserDetails } from 'src/auth'
import { useAlert } from 'react-alert'
import { useEffect, useState } from 'react'
import AdministrationService from 'src/services/administration-service'
import Loader from './utils/loader/Loader'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [currentUser, setCurrentUser] = useState(null)
  const [walletBalance, setWalletBalance] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const getUser = () => {
    var user = getUserDetails()
    if (user != null) setCurrentUser(user)
  }

  const fetch = () => {
    setIsLoading(true)
    AdministrationService.getWalletBalance().then((response) => {
      setIsLoading(false)
      if (response == null) {
        setWalletBalance(0)
      } else {
        if (response.success) {
          setWalletBalance(response.payload.balance)
        } else {
          setWalletBalance(0)
          console.log(response.message)
        }
      }
    })
  }

  useEffect(() => {
    getUser()
    fetch()
  }, [])

  return (
    <>
      {currentUser != null ? (
        <>
          <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
              <CHeaderToggler
                className="ps-1"
                onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
              >
                <CIcon icon={cilMenu} size="lg" />
              </CHeaderToggler>
              <CHeaderBrand className="mx-auto d-md-none" to="/">
                <img src={Logo} className="sidebar-logo" alt="logo"></img>
              </CHeaderBrand>
              <CHeaderNav className="d-none d-md-flex me-auto">
                <CNavItem>
                  <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
                    <h5>
                      {currentUser.accountype !== 'INDIVIDUAL' ? (
                        <>
                          Wallet Balance :{' '}
                          <span className="balance-badge">
                            {!isLoading ? walletBalance : '...'}
                          </span>{' '}
                          <Link to="/fund/wallet" type="button" className="btn btn-primary danger">
                            <CIcon icon={cilMoney} />
                            &nbsp; Fund Wallet
                          </Link>
                          <button
                            onClick={() => {
                              window.location.href = 'https://iprove.ng/api'
                            }}
                            className="btn btn-outline outline danger"
                          >
                            <CIcon icon={cilAppsSettings} /> &nbsp; API Documentation
                          </button>
                        </>
                      ) : (
                        <></>
                      )}
                    </h5>
                  </CNavLink>
                </CNavItem>
              </CHeaderNav>
              <CHeaderNav>
                <CNavItem>
                  <CNavLink href="#">
                    <CIcon icon={cilBell} size="lg" />
                  </CNavLink>
                </CNavItem>
              </CHeaderNav>
              <CHeaderNav className="ms-3">
                <AppHeaderDropdown />
              </CHeaderNav>
            </CContainer>
            <CHeaderDivider />
            <CContainer fluid>
              <AppBreadcrumb />
            </CContainer>
          </CHeader>
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default AppHeader
