import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilNotes, cilSpeedometer, cilUser } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'MAIN',
    },
  },

  {
    component: CNavTitle,
    name: 'Verification',
  },
  {
    component: CNavItem,
    name: 'NIN Verification Logs',
    to: '/nin/verifications',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Address Verification Logs',
    to: '/address/verifications',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Business Verification Logs',
    to: '/business/verifications',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Guarantor Verification Logs',
    to: '/guarantor/verifications',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Property Verification Logs',
    to: '/property/verifications',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Employment Verification Logs',
    to: '/employment/verifications',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Manage Account',
  },
  {
    component: CNavGroup,
    name: 'Account',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Profile',
        to: '/profile',
      },

      {
        component: CNavItem,
        name: 'Change Password',
        to: '/account/change-password',
      },
      {
        component: CNavItem,
        name: 'Logout',
        to: '/login',
      },
    ],
  },
]

export default _nav
