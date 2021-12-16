import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilCreditCard, cilLockLocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from './../../assets/images/avatars/8.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const logout = () => {
  localStorage.removeItem('SESSION')
  window.location.href = '#/login'
}

const AppHeaderDropdown = () => {
  const [count, setCount] = useState(0)

  const init = () => {
    setInterval(() => {
      var counter = 0
      let storedService = localStorage.getItem('SELECTED_SERVICE')
      if (storedService != null) {
        var services = JSON.parse(storedService)
        var selectedKeys = Object.keys(services)
        selectedKeys.forEach((key) => {
          if (services[key] === true) {
            counter = counter + 1
          }
        })
        setCount(counter)
      }
    }, 1000)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <CDropdown variant="nav-item">
      <Link to="#/checkout">
        <CBadge color="secondary" className="ms-2 notification-counter">
          {count}
        </CBadge>
      </Link>
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Manage Account</CDropdownHeader>
        <CDropdownItem href="#/profile">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#/checkout">
          <CIcon icon={cilCreditCard} className="me-2" />
          Checkout
          <CBadge color="secondary" className="ms-2">
            {count}
          </CBadge>
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={logout}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
