import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import { AppSidebarNav } from './AppSidebarNav'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import Logo from 'src/assets/images/logo.png'

// sidebar nav config
import adminNavigation from '../_admin_corporate_nav'
import userNavigation from '../_individual_user_nav'
import { getUserAccountType } from 'src/auth'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img src={Logo} className="sidebar-logo" alt="logo"></img>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          {getUserAccountType() === 'INDIVIDUAL' ? (
            <AppSidebarNav items={userNavigation} />
          ) : (
            <AppSidebarNav items={adminNavigation} />
          )}
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
