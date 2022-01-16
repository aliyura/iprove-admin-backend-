import { cilCheck, cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import React from 'react'
import { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import Address from 'src/assets/images/address.png'
import Business from 'src/assets/images/business.png'
import Certificate from 'src/assets/images/certificate.png'
import Check from 'src/assets/images/check.png'
import Employment from 'src/assets/images/employment.png'
import Guarantor from 'src/assets/images/guarantor.png'
import Identity from 'src/assets/images/identity.png'
import Property from 'src/assets/images/property.png'
import { verification } from 'src/config'

const VerificationListing = () => {
  const alert = useAlert()
  const [services, setService] = useState({
    check: false,
    identity: false,
    address: false,
    business: false,
    property: false,
    guarantor: false,
    employment: false,
  })
  const [storedServices, setStoredService] = useState({
    check: false,
    identity: false,
    address: false,
    business: false,
    property: false,
    guarantor: false,
    employment: false,
  })
  const [myVerifications, setMyVerifications] = useState(null)
  const SELECTED_SERVICES = 'SELECTED_SERVICES'
  const SELECTED_VERIFICATIONS = 'SELECTED_VERIFICATIONS'
  const [count, setCount] = useState(0)

  const init = () => {
    setInterval(() => {
      var counter = 0
      let storedService = localStorage.getItem(SELECTED_SERVICES)
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

  const thereIsNoActiveService = () => {
    const freshVerificationDump = localStorage.getItem(SELECTED_VERIFICATIONS)
    const freshSelectedVerifications =
      freshVerificationDump !== null ? JSON.parse(freshVerificationDump) : null

    if (freshSelectedVerifications === null) {
      return true
    } else {
      var keys = Object.keys(freshSelectedVerifications)
      var baseStatus = []
      //get active counts
      keys.forEach((key) => {
        baseStatus.push(freshSelectedVerifications[key].status)
      })

      if (baseStatus.includes('open')) {
        return false
      }
      return true
    }
  }

  const select = (key) => {
    if (thereIsNoActiveService()) {
      const selectedVerifications = localStorage.getItem(SELECTED_VERIFICATIONS)
      const selectedServices = localStorage.getItem(SELECTED_SERVICES)
      const mySelectedVerifications =
        selectedVerifications != null ? JSON.parse(selectedVerifications) : verification
      const mySelectedServices = selectedServices != null ? JSON.parse(selectedServices) : services

      console.log(mySelectedVerifications)

      if (!mySelectedVerifications[key]) {
        mySelectedVerifications[key] = verification[key]
      }

      mySelectedServices[key] = true
      mySelectedVerifications[key]['selected'] = true

      setService(mySelectedServices)
      setMyVerifications(mySelectedVerifications)

      localStorage.setItem(SELECTED_SERVICES, JSON.stringify(mySelectedServices))
      localStorage.setItem(SELECTED_VERIFICATIONS, JSON.stringify(mySelectedVerifications))
    } else {
      alert.show('Oops! You have pending paid Verifications', {
        timeout: 20000,
        type: 'error',
      })
    }
  }

  const onSelect = (key) => {
    if (thereIsNoActiveService()) {
      const selectedVerifications = localStorage.getItem(SELECTED_VERIFICATIONS)
      const selectedServices = localStorage.getItem(SELECTED_SERVICES)
      const mySelectedVerifications =
        selectedVerifications !== null ? JSON.parse(selectedVerifications) : verification
      const mySelectedServices = selectedServices !== null ? JSON.parse(selectedServices) : services

      mySelectedServices[key] = false
      mySelectedVerifications[key]['selected'] = false

      setService(mySelectedServices)
      setMyVerifications(mySelectedVerifications)

      localStorage.setItem(SELECTED_SERVICES, JSON.stringify(mySelectedServices))
      localStorage.setItem(SELECTED_VERIFICATIONS, JSON.stringify(mySelectedVerifications))
    } else {
      alert.show('Oops! You have pending paid Verifications', {
        timeout: 20000,
        type: 'error',
      })
    }
  }

  const continueToCheckout = () => {
    var keys = []
    var isSelected = false
    if (myVerifications != null) {
      keys = Object.keys(myVerifications)
    }

    keys.forEach((key) => {
      if (myVerifications[key]) isSelected = true
    })

    if (isSelected) {
      window.location.href = '/#/checkout'
    } else {
      alert.show('No Verification Selected', {
        timeout: 20000,
        type: 'error',
      })
    }
  }

  useEffect(() => {
    var stored = localStorage.getItem(SELECTED_SERVICES)
    if (stored != null) {
      var myVerifications = JSON.parse(stored)
      setStoredService(myVerifications)
      setMyVerifications(myVerifications)
      init()
    }
  }, [])

  return (
    <>
      <CCard className="mb-4 listing-card">
        <CCardBody>
          <CRow>
            <CCol className="widget widget-card">
              <img src={Check} className="todo-icon" alt="check" />
              <h4>{verification.check.title}</h4>
              <h2>₦{verification.check.price}</h2>
              {services.check === true || storedServices['check'] ? (
                <button
                  type="button"
                  onClick={() => onSelect('check')}
                  className="btn btn-primary danger selected "
                >
                  <CIcon icon={cilCheck} /> &nbsp;
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => select('check')}
                  className="btn btn-primary danger "
                >
                  <CIcon icon={cilPlus} /> &nbsp; Select
                </button>
              )}
              &nbsp;
            </CCol>
            <CCol className="widget widget-card">
              <img src={Identity} className="todo-icon" alt="Identity" />
              <h4>{verification.identity.title}</h4>
              <h2>₦{verification.identity.price}</h2>
              {services.identity === true || storedServices['identity'] ? (
                <button
                  type="button"
                  onClick={() => onSelect('identity')}
                  className="btn btn-primary danger selected "
                >
                  <CIcon icon={cilCheck} /> &nbsp;
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => select('identity')}
                  className="btn btn-primary danger "
                >
                  <CIcon icon={cilPlus} /> &nbsp; Select
                </button>
              )}
              &nbsp;
            </CCol>
            <CCol className="widget widget-card">
              <img src={Address} className="todo-icon" alt="Identity" />
              <h4>{verification.address.title}</h4>
              <h2>₦{verification.address.price}</h2>
              {services.address === true || storedServices['address'] ? (
                <button
                  type="button"
                  onClick={() => onSelect('address')}
                  className="btn btn-primary danger selected "
                >
                  <CIcon icon={cilCheck} /> &nbsp;
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => select('address')}
                  className="btn btn-primary danger "
                >
                  <CIcon icon={cilPlus} /> &nbsp; Select
                </button>
              )}
            </CCol>

            <CCol className="widget widget-card">
              <img src={Business} className="todo-icon" alt="Identity" />
              <h4>{verification.business.title}</h4>
              <h2>₦{verification.business.price}</h2>
              {services.business || storedServices['business'] ? (
                <button
                  type="button"
                  onClick={() => onSelect('business')}
                  className="btn btn-primary danger selected"
                >
                  <CIcon icon={cilCheck} /> &nbsp;
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => select('business')}
                  className="btn btn-primary danger "
                >
                  <CIcon icon={cilPlus} /> &nbsp; Select
                </button>
              )}
            </CCol>
          </CRow>
          <CRow>
            <CCol className="widget widget-card">
              <img src={Property} className="todo-icon" alt="Identity" />
              <h4>{verification.property.title}</h4>
              <h2>₦{verification.property.price}</h2>
              {services.property || storedServices['property'] ? (
                <button
                  type="button"
                  onClick={() => onSelect('property')}
                  className="btn btn-primary danger selected "
                >
                  <CIcon icon={cilCheck} /> &nbsp;
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => select('property')}
                  className="btn btn-primary danger "
                >
                  <CIcon icon={cilPlus} /> &nbsp; Select
                </button>
              )}
            </CCol>
            <CCol className="widget widget-card">
              <img src={Guarantor} className="todo-icon" alt="Identity" />
              <h4>{verification.guarantor.title}</h4>
              <h2>₦{verification.guarantor.price}</h2>
              {services.guarantor || storedServices['guarantor'] ? (
                <button
                  type="button"
                  onClick={() => onSelect('guarantor')}
                  className="btn btn-primary danger selected"
                >
                  <CIcon icon={cilCheck} /> &nbsp;
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => select('guarantor')}
                  className="btn btn-primary danger"
                >
                  <CIcon icon={cilPlus} /> &nbsp; Select
                </button>
              )}
            </CCol>

            <CCol className="widget widget-card">
              <img src={Employment} className="todo-icon" alt="Identity" />
              <h4>{verification.employment.title}</h4>
              <h2>₦{verification.employment.price}</h2>
              {services.employment || storedServices['employment'] ? (
                <button
                  type="button"
                  onClick={() => onSelect('employment')}
                  className="btn btn-primary danger selected"
                >
                  <CIcon icon={cilCheck} /> &nbsp;
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => select('employment')}
                  className="btn btn-primary danger "
                >
                  <CIcon icon={cilPlus} /> &nbsp; Select
                </button>
              )}
            </CCol>
            <CCol className="widget widget-card">
              <img height="60" src={Certificate} className="todo-icon" alt="Identity" />
              <h4>{verification.certificate.title}</h4>
              <h2>Comming Soon....</h2>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>

      <div className="row text-right checkout-button">
        <button type="button" className="btn btn-iprove native" onClick={continueToCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </>
  )
}

export default VerificationListing
