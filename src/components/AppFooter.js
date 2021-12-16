import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://iprove.ng" target="_blank" rel="noopener noreferrer">
          iProve
        </a>
        <span className="ms-1">&copy; 2021 Bello Kano Limited.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
