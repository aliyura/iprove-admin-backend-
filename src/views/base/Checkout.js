import { cilArrowRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import { useEffect, useState } from 'react'
import { getUserDetails } from 'src/auth'
import Loader from 'src/components/utils/loader/Loader'
import StatusMessage from 'src/components/utils/status/StatusMessage'
import { verification } from 'src/config'
import { publicKey } from 'src/config'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const storedService = localStorage.getItem('SELECTED_SERVICE')
  const [currentUser, setCurrentUser] = useState(null)
  const [services, setService] = useState(null)
  const [paymentStatus, setPaymentStatus] = useState('unPaid')
  const [serviceKeys, setServiceKeys] = useState([])
  const alert = useAlert()

  var totalAmount = 0
  var orderTitle = ''
  var handleFlutterPayment

  if (storedService != null) {
    var selectedServices = JSON.parse(storedService)
    var keys = Object.keys(selectedServices)
    var currentServices = []
    keys.forEach((item) => {
      if (selectedServices[item] === true) {
        let service = verification[item]
        currentServices.push(service)
      }
    })
    console.log(keys)
    currentServices.forEach((service) => {
      totalAmount += service.price
      orderTitle += service.title + ','
    })

    console.log(currentServices)
    var paymentConfig = {
      public_key: publicKey,
      tx_ref: Date.now(),
      amount: totalAmount,
      currency: 'NGN',
      payment_options: 'card,ussd',
      customer: {
        email: getUserDetails().email,
        phonenumber: getUserDetails().mobile,
        name: getUserDetails().name,
      },
      customizations: {
        title: orderTitle.trimEnd(),
        description: 'Pay for verification on iProve.ng',
        logo: 'https://iprove.ng/static/media/iprove.9b2959ff.png',
      },
    }
  }

  console.log(totalAmount)
  console.log(paymentConfig)
  handleFlutterPayment = useFlutterwave(paymentConfig)

  const pay = () => {
    if (storedService != null) {
      handleFlutterPayment({
        callback: (response) => {
          console.log(response)

          closePaymentModal()
        },
        onClose: () => {
          localStorage.setItem('PAYMENT_STATUS', 'paid')
          setPaymentStatus('paid')
        },
      })
    } else {
      alert.show('No Service Selected', {
        timeout: 20000,
        type: 'error',
      })
    }
  }

  useEffect(() => {
    var paymentStatus = localStorage.getItem('PAYMENT_STATUS')
    if (paymentStatus != null) {
      setPaymentStatus('paid', paymentStatus)
    }

    setCurrentUser(getUserDetails())
    if (storedService != null) {
      setService(JSON.parse(storedService))
      setServiceKeys(Object.keys(JSON.parse(storedService)))
    }
  }, [])

  return (
    <>
      {currentUser != null ? (
        services != null ? (
          <>
            <section>
              <div className="container py-2">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="card mb-4">
                      <div className="card-body">
                        {serviceKeys.map((item, index) => {
                          return services[item] === true ? (
                            <div key={index}>
                              <hr />
                              <div className="row">
                                <div className="col">
                                  <p className="mb-0">Title</p>
                                </div>
                                <div className="col">
                                  <h5 className="text-muted mb-0">{verification[item].title}</h5>
                                </div>
                                <div className="col">
                                  <p className="mb-0">Price</p>
                                </div>
                                <div className="col">
                                  <h5 className="text-muted mb-0">₦{verification[item].price}</h5>
                                </div>
                                <div className="col">
                                  <p className="mb-0">Payment Status</p>
                                </div>
                                <div className="col">
                                  <h5 className="text-muted mb-0">{paymentStatus}</h5>
                                </div>
                                <div className="col">
                                  <p className="mb-0">#</p>
                                </div>
                                <div className="col">
                                  {paymentStatus === 'paid' ? (
                                    <Link
                                      to={verification[item].page}
                                      type="button"
                                      className="btn btn-primary"
                                    >
                                      Verify
                                    </Link>
                                  ) : (
                                    <button
                                      type="button"
                                      disabled
                                      className="btn btn-primary disabled"
                                    >
                                      Pending Payment
                                    </button>
                                  )}
                                </div>
                              </div>
                              <hr />
                            </div>
                          ) : (
                            <div key={index}></div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="justify-content-center text-align-right">
                  {paymentStatus !== 'paid' ? (
                    <button type="submit" className="btn btn-primary" onClick={pay}>
                      <CIcon icon={cilArrowRight} /> &nbsp;Proceed to Payment
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </section>
          </>
        ) : (
          <StatusMessage message="No Data Found" />
        )
      ) : (
        <Loader />
      )}
    </>
  )
}

export default Checkout
