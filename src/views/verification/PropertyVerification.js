import { cilArrowRight, cilReload } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getUserDetails } from 'src/auth'
import Loader from 'src/components/utils/loader/Loader'
import IdentityService from 'src/services/identity-service'
import { useAlert } from 'react-alert'

const PropertyVerification = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const alert = useAlert()

  const getUser = () => {
    var user = getUserDetails()
    if (user != null) setCurrentUser(user)
  }

  const onSubmit = (request) => {
    setIsLoading(true)
    IdentityService.verifyProperty(request).then((response) => {
      setIsLoading(false)
      if (response == null) {
        alert.show('Request Failed', {
          timeout: 20000,
          type: 'error',
        })
      } else {
        if (response.success) {
          alert.show(response.message, {
            timeout: 20000,
            type: 'success',
          })
          if (response.success) {
            window.location.href = '#/property/verifications'
          }
        } else {
          alert.show(response.message, {
            timeout: 20000,
            type: 'error',
          })
        }
      }
    })
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
                      <h4 className="pb-2">Property Verification</h4>
                      <form method="POST" name="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="propertyname"
                            placeholder=" Property Name"
                            className="form-control"
                            required={true}
                            {...register('propertyname')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <select
                            name="propertytype"
                            className="form-control"
                            required={true}
                            {...register('propertytype')}
                          >
                            <option>Land</option>
                            <option>House</option>
                            <option>Car</option>
                          </select>
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="contactpersonname"
                            placeholder=" Contact Person Name"
                            className="form-control"
                            required={true}
                            {...register('contactpersonname')}
                          />
                        </div>
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            name="contactpersonphone"
                            placeholder=" contact Person Phone"
                            className="form-control"
                            required={true}
                            {...register('contactpersonphone')}
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
                            name="address"
                            placeholder=" Property Address"
                            className="form-control"
                            required={true}
                            {...register('address')}
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

export default PropertyVerification
