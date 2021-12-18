import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilInfo } from '@coreui/icons'

const StatusMessage = (props) => {
  return (
    <div className="centered-text">
      <CIcon className="info-icon" icon={cilInfo} customClassName="nav-icon" />
      <h2>Opps! No Data Found</h2>
    </div>
  )
}

export default StatusMessage
