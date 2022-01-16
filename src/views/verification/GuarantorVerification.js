import { cilArrowRight, cilReload } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getUserDetails } from 'src/auth'
import Loader from 'src/components/utils/loader/Loader'
import IdentityService from 'src/services/identity-service'
import { useAlert } from 'react-alert'

const GuarantorVerification = () => {
  const SELECTED_SERVICES = 'SELECTED_SERVICES'
  const SELECTED_VERIFICATIONS = 'SELECTED_VERIFICATIONS'
  //get stored services
  const storedServices = localStorage.getItem(SELECTED_SERVICES)
  const storedVerifications = localStorage.getItem(SELECTED_VERIFICATIONS)
  //prepare selected services
  const selectedServices = storedVerifications !== null ? JSON.parse(storedServices) : null
  const selectedVerifications =
    storedVerifications !== null ? JSON.parse(storedVerifications) : null
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const alert = useAlert()

  const getUser = () => {
    var user = getUserDetails()
    if (user != null) setCurrentUser(user)
  }

  const onSubmit = (request) => {
    if (selectedVerifications !== null) {
      if (selectedVerifications['guarantor'].status === 'open') {
        setIsLoading(true)
        IdentityService.verifyGuarantor(request).then((response) => {
          setIsLoading(false)
          if (response == null) {
            alert.show('Request Failed', {
              timeout: 20000,
              type: 'error',
            })
          } else {
            if (response.success && response.payload != null) {
              //close this verification
              selectedVerifications['guarantor'].status = 'closed'
              selectedVerifications['guarantor'].selected = false
              selectedServices['guarantor'] = false
              localStorage.setItem(SELECTED_SERVICES, JSON.stringify(selectedServices))
              localStorage.setItem(SELECTED_VERIFICATIONS, JSON.stringify(selectedVerifications))

              alert.show(response.message, {
                timeout: 20000,
                type: 'success',
              })
              if (response.success && response.payload != null) {
                window.location.href = '#/guarantor/verifications'
              }
            } else {
              alert.show(response.message, {
                timeout: 20000,
                type: 'error',
              })
            }
          }
        })
      } else {
        alert.show('Oops! Guarantor Verification no longer active in your subscriptions', {
          timeout: 20000,
          type: 'error',
        })
      }
    } else {
      alert.show('Oops! You have not subscribe to this service ', {
        timeout: 20000,
        type: 'error',
      })
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <>
      <section>
        <div className="container py-2">
          <div className="row justify-content-center text-center">
            <div className="col-md-6">
              <div className="card mb-4 mb-md-0">
                <div className="card mb-4 mb-lg-0">
                  {currentUser != null ? (
                    <div className="card-body p-4">
                      <h4 className="pb-2">Guarantor Verification</h4>
                      <form method="POST" name="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="firstname"
                            placeholder=" Firstname"
                            className="form-control"
                            required={true}
                            {...register('firstname')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="lastname"
                            placeholder=" Lastname"
                            className="form-control"
                            required={true}
                            {...register('lastname')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="tel"
                            name="phone"
                            placeholder=" Phone Number"
                            className="form-control"
                            required={true}
                            {...register('phonenumber')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <select name="idtype" className="form-control" {...register('idtype')}>
                            <option>National Id Card</option>
                            <option>International Passport</option>
                            <option>Driver Licence</option>
                          </select>
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="number"
                            name="idnumber"
                            placeholder=" ID Number"
                            className="form-control"
                            required={true}
                            {...register('idnumber')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <select
                            name="state"
                            className="form-control"
                            required={true}
                            {...register('state')}
                          >
                            <option>Select State..</option>
                            <option>Lagos</option>
                            <option>Kano</option>
                          </select>
                        </div>{' '}
                        <div className="form-group mb-3">
                          <select
                            name="lga"
                            className="form-control"
                            required={true}
                            {...register('lga')}
                          >
                            <option>Select Local Govt. Area...</option>
                            <option>Eti-osa</option>
                            <option>Kabo</option>
                          </select>
                        </div>
                        <div className="form-group mb-3">
                          <textarea
                            name="street"
                            placeholder=" Street Name"
                            className="form-control"
                            required={true}
                            {...register('street')}
                          />
                        </div>
                        <div className="form-group mb-3 justify-content-right text-right">
                          {isLoading ? (
                            <button type="button" className="btn btn-primary">
                              <CIcon icon={cilReload} /> &nbsp;Please Wait...
                            </button>
                          ) : (
                            <button type="submit" className="btn btn-primary">
                              <CIcon icon={cilArrowRight} /> &nbsp;Submit Verification
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  ) : (
                    <Loader />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GuarantorVerification
