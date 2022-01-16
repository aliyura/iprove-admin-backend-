import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilLockUnlocked, cilNotes, cilSpeedometer, cilUser } from '@coreui/icons'
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
    name: 'Manage Verifications',
  },
  {
    component: CNavItem,
    name: 'Verification',
    to: '/verification/list',
  },
  {
    component: CNavItem,
    name: 'NIN Verification Logs',
    to: '/nin/verifications',
  },
  {
    component: CNavItem,
    name: 'Address Verification Logs',
    to: '/address/verifications',
  },

  {
    component: CNavItem,
    name: 'Business Verification Logs',
    to: '/business/verifications',
  },
  {
    component: CNavItem,
    name: 'Guarantor Verification Logs',
    to: '/guarantor/verifications',
  },
  {
    component: CNavItem,
    name: 'Property Verification Logs',
    to: '/property/verifications',
  },

  {
    component: CNavItem,
    name: 'Employment Verification Logs',
    to: '/employment/verifications',
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
    ],
  },
]

export default _nav
