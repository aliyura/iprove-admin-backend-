import React from 'react'
import Loader from 'src/components/utils/loader/Loader'
import { useEffect, useState } from 'react'
import { getParams } from 'src/utils'
import StatusMessage from 'src/components/utils/status/StatusMessage'

const PaymentRedirection = () => {
  var [status, setStatus] = useState(null)
  // var [ref, setRef] = useState(null)

  const init = () => {
    let status = getParams('status')
    // let ref = getParams('tx_ref')
    setStatus(status)
    // setRef(ref)
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
              {status == null ? (
                <Loader />
              ) : status === 'cancelled' ? (
                <StatusMessage message="Transaction Failed" />
              ) : status === 'success' ? (
                <StatusMessage message="Transaction Successful" />
              ) : (
                <StatusMessage message="Transaction Failed" />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PaymentRedirection
