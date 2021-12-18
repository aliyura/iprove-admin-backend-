import React from 'react'
import Loader from 'src/components/utils/loader/Loader'
import { useEffect, useState } from 'react'
import { getParams } from 'src/utils'
import StatusMessage from 'src/components/utils/status/StatusMessage'
import CIcon from '@coreui/icons-react'
import { cilCheck, cilInfo, cilWarning } from '@coreui/icons'
import { Link } from 'react-router-dom'

const Status = () => {
  var [message, setMessage] = useState('Something Went Wrong')
  var [state, setState] = useState(1)
  var redirect = '/dashboard'

  const init = () => {
    let state = getParams('state')
    let message = getParams('msg')
    setState(state)
    setMessage(message)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <section>
        <div className="container py-2">
          <div className="row justify-content-center text-center">
            <div className="main">
              {message === null ? (
                <Loader />
              ) : (
                <>
                  <div className="centered-text">
                    {state === '1' ? (
                      <CIcon className="info-icon" icon={cilInfo} customClassName="nav-icon" />
                    ) : (
                      <CIcon className="warn-icon" icon={cilWarning} customClassName="nav-icon" />
                    )}
                    <h2>{message}</h2>
                    <Link className="btn btn-primary" to={redirect}>
                      <CIcon icon={cilCheck} /> &nbsp; Okay, Thanks
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Status
