import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'
import Identity from 'src/assets/images/identity.png'
import Business from 'src/assets/images/business.png'
import Address from 'src/assets/images/address.png'
import Property from 'src/assets/images/property.png'
import Employment from 'src/assets/images/employment.png'
import Guarantor from 'src/assets/images/guarantor.png'
import { cilCheck, cilPlus } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useState, useEffect } from 'react'
import { verification } from 'src/config'
import { useAlert } from 'react-alert'

const TodoWidgets = () => {
  const paymentStatus = localStorage.getItem('PAYMENT_STATUS')
  const alert = useAlert()
  const [services, setService] = useState({
    identity: false,
    address: false,
    business: false,
    property: false,
    guarantor: false,
    employment: false,
  })
  const [storedServices, setStoredService] = useState({
    identity: false,
    address: false,
    business: false,
    property: false,
    guarantor: false,
    employment: false,
  })

  const select = (e) => {
    if (paymentStatus !== 'paid') {
      var selectedServices = { ...services }
      selectedServices[e.target.value] = true
      setService(selectedServices)
      localStorage.setItem('SELECTED_SERVICE', JSON.stringify(selectedServices))
      localStorage.setItem('PAYMENT_STATUS', 'unpaid')
    } else {
      alert.show('Oops! You have pending paid Verifications', {
        timeout: 20000,
        type: 'error',
      })
    }
  }

  const onSelect = (e) => {
    if (paymentStatus !== 'paid') {
      var selectedServices = { ...services }
      selectedServices[e.target.value] = false
      setService(selectedServices)
      localStorage.setItem('SELECTED_SERVICE', JSON.stringify(selectedServices))
    } else {
      alert.show('Oops! You have pending paid Verifications', {
        timeout: 20000,
        type: 'error',
      })
    }
  }

  useEffect(() => {
    var stored = localStorage.getItem('SELECTED_SERVICE')
    if (stored != null) {
      setStoredService(JSON.parse(stored))
      setService(JSON.parse(stored))
    }
  }, [])

  return (
    <CCard className="mb-4 widget native">
      <CCardBody>
        <CRow>
          <CCol className="widget widget-card">
            <img src={Identity} className="todo-icon" alt="Identity" />
            <h4>{verification.identity.title}</h4>
            <h2>₦{verification.identity.price}</h2>
            {services.identity || storedServices['identity'] ? (
              <button
                type="button"
                onClick={onSelect}
                value="identity"
                className="btn btn-primary danger selected "
              >
                <CIcon icon={cilCheck} /> &nbsp;
              </button>
            ) : (
              <button
                type="button"
                onClick={select}
                value="identity"
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
            {services.address || storedServices['address'] ? (
              <button
                type="button"
                onClick={onSelect}
                value="address"
                className="btn btn-primary danger selected "
              >
                <CIcon icon={cilCheck} /> &nbsp;
              </button>
            ) : (
              <button
                type="button"
                onClick={select}
                value="address"
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
                onClick={onSelect}
                value="business"
                className="btn btn-primary danger selected"
              >
                <CIcon icon={cilCheck} /> &nbsp;
              </button>
            ) : (
              <button
                type="button"
                onClick={select}
                value="business"
                className="btn btn-primary danger "
              >
                <CIcon icon={cilPlus} /> &nbsp; Select
              </button>
            )}
          </CCol>
          <CCol className="widget widget-card">
            <img src={Property} className="todo-icon" alt="Identity" />
            <h4>{verification.property.title}</h4>
            <h2>₦{verification.property.price}</h2>
            {services.property || storedServices['property'] ? (
              <button
                type="button"
                onClick={onSelect}
                value="property"
                className="btn btn-primary danger selected "
              >
                <CIcon icon={cilCheck} /> &nbsp;
              </button>
            ) : (
              <button
                type="button"
                onClick={select}
                value="property"
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
                onClick={onSelect}
                value="guarantor"
                className="btn btn-primary danger selected"
              >
                <CIcon icon={cilCheck} /> &nbsp;
              </button>
            ) : (
              <button
                type="button"
                onClick={select}
                value="guarantor"
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
                onClick={onSelect}
                value="employment"
                className="btn btn-primary danger selected"
              >
                <CIcon icon={cilCheck} /> &nbsp;
              </button>
            ) : (
              <button
                type="button"
                onClick={select}
                value="employment"
                className="btn btn-primary danger "
              >
                <CIcon icon={cilPlus} /> &nbsp; Select
              </button>
            )}
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  )
}

export default TodoWidgets
