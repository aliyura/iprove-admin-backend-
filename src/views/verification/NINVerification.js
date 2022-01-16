import { cilArrowRight, cilReload } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getUserDetails } from 'src/auth'
import Loader from 'src/components/utils/loader/Loader'
import IdentityService from 'src/services/identity-service'
import { useAlert } from 'react-alert'

const NINVerification = () => {
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
      if (selectedVerifications['identity'].status === 'open') {
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
              selectedVerifications['identity'].status = 'closed'
              selectedVerifications['identity'].selected = false
              selectedServices['identity'] = false
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
        alert.show('Oops! NIN Verification no longer active in your subscriptions', {
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
                      <h4 className="pb-2">Verify NIN</h4>
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
                            name="middlename"
                            placeholder=" Middlename"
                            className="form-control"
                            required={true}
                            {...register('middlename')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="surname"
                            placeholder=" Surname"
                            className="form-control"
                            required={true}
                            {...register('surname')}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="phonenumber"
                            placeholder=" Phone Number"
                            className="form-control"
                            {...register('phonenumber')}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="birthdate"
                            placeholder=" Birthdate(dd-mm-yyyy)"
                            className="form-control"
                            {...register('birthdate')}
                          />
                        </div>

                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="nin"
                            placeholder=" nin"
                            className="form-control"
                            {...register('nin')}
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

export default NINVerification
