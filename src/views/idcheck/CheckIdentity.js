import React from 'react'
import { Link } from 'react-router-dom'
import { cilPencil, cilWallet } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useEffect, useState } from 'react'
import { getUserDetails } from 'src/auth'
import Loader from 'src/components/utils/loader/Loader'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
import IdentityService from 'src/services/identity-service'
const CheckIdentity = () => {
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
  const [isCheckNinLoading, setCheckNinLoading] = useState(false)
  const [isCheckPhoneLoading, setCheckPhoneLoading] = useState(false)
  const [isCheckDocumentLoading, setCheckDocumentLoading] = useState(false)
  const [isCheckBioLoading, setCheckBioLoading] = useState(false)
  const [isCheckFingerLoading, setCheckFingerLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const alert = useAlert()

  const checkByNin = (request) => {
    if (selectedVerifications !== null) {
      if (selectedVerifications['check'].status === 'open') {
        setCheckNinLoading(true)
        if (request.nin) {
          IdentityService.getNINById(request.nin).then((response) => {
            setCheckNinLoading(false)
            if (response == null) {
              alert.show('Request Failed', {
                timeout: 20000,
                type: 'error',
              })
            } else {
              if (response.success && response.payload != null) {
                var ninDetails = response.payload
                localStorage.setItem('NIN', JSON.stringify(ninDetails))
                alert.show(response.message, {
                  timeout: 20000,
                  type: 'success',
                })
                //close this verification
                selectedVerifications['check'].status = 'closed'
                selectedVerifications['check'].selected = false
                selectedServices['check'] = false
                localStorage.setItem(SELECTED_SERVICES, JSON.stringify(selectedServices))
                localStorage.setItem(SELECTED_VERIFICATIONS, JSON.stringify(selectedVerifications))

                window.location.href = '#/nin/details'
              } else {
                alert.show(response.message, {
                  timeout: 20000,
                  type: 'error',
                })
              }
            }
          })
        } else {
          alert.show('Provide the NIN number', {
            timeout: 20000,
            type: 'error',
          })
        }
      } else {
        alert.show('Oops! NIN Check no longer active in your subscriptions', {
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
  const checkByPhone = (request) => {
    if (selectedVerifications !== null) {
      if (selectedVerifications['check'].status === 'open') {
        console.log(request)
        if (request.phone) {
          setCheckPhoneLoading(true)
          IdentityService.getNINByPhoneNumber(request.phone).then((response) => {
            setCheckPhoneLoading(false)
            if (response == null) {
              alert.show('Request Failed', {
                timeout: 20000,
                type: 'error',
              })
            } else {
              if (response.success && response.payload != null) {
                var ninDetails = response.payload
                localStorage.setItem('NIN', JSON.stringify(ninDetails))
                alert.show(response.message, {
                  timeout: 20000,
                  type: 'success',
                })

                //close this verification
                selectedVerifications['check'].status = 'closed'
                selectedVerifications['check'].selected = false
                selectedServices['check'] = false
                localStorage.setItem(SELECTED_SERVICES, JSON.stringify(selectedServices))
                localStorage.setItem(SELECTED_VERIFICATIONS, JSON.stringify(selectedVerifications))

                window.location.href = '#/nin/details'
              } else {
                alert.show(response.message, {
                  timeout: 20000,
                  type: 'error',
                })
              }
            }
          })
        } else {
          alert.show('Provide the Phone number', {
            timeout: 20000,
            type: 'error',
          })
        }
      } else {
        alert.show('Oops! NIN Check no longer active in your subscriptions', {
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
  const checkByDocument = (request) => {
    if (selectedVerifications !== null) {
      if (selectedVerifications['check'].status === 'open') {
        console.log(request)
        if (request.document) {
          setCheckDocumentLoading(true)
          IdentityService.getNINByDocumentId(request.document).then((response) => {
            setCheckDocumentLoading(false)
            if (response == null) {
              alert.show('Request Failed', {
                timeout: 20000,
                type: 'error',
              })
            } else {
              if (response.success && response.payload != null) {
                var ninDetails = response.payload
                localStorage.setItem('NIN', JSON.stringify(ninDetails))
                alert.show(response.message, {
                  timeout: 20000,
                  type: 'success',
                })
                //close this verification
                selectedVerifications['check'].status = 'closed'
                selectedVerifications['check'].selected = false
                selectedServices['check'] = false
                localStorage.setItem(SELECTED_SERVICES, JSON.stringify(selectedServices))
                localStorage.setItem(SELECTED_VERIFICATIONS, JSON.stringify(selectedVerifications))

                window.location.href = '#/nin/details'
              } else {
                alert.show(response.message, {
                  timeout: 20000,
                  type: 'error',
                })
              }
            }
          })
        } else {
          alert.show('Provide the Document Id', {
            timeout: 20000,
            type: 'error',
          })
        }
      } else {
        alert.show('Oops! NIN Check no longer active in your subscriptions', {
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
  const checkByBioData = (request) => {
    if (selectedVerifications !== null) {
      if (selectedVerifications['check'].status === 'open') {
        console.log(request)
        if (request.firstName && request.lastName) {
          setCheckBioLoading(true)

          var requestPayload = request
          delete requestPayload.nin
          delete requestPayload.file
          delete requestPayload.document
          delete requestPayload.phone
          IdentityService.getNINByBioData(requestPayload).then((response) => {
            setCheckBioLoading(false)
            if (response == null) {
              alert.show('Request Failed', {
                timeout: 20000,
                type: 'error',
              })
            } else {
              if (response.success && response.payload != null) {
                var ninDetails = response.payload
                localStorage.setItem('NIN', JSON.stringify(ninDetails))
                alert.show(response.message, {
                  timeout: 20000,
                  type: 'success',
                })
                //close this verification
                selectedVerifications['check'].status = 'closed'
                selectedVerifications['check'].selected = false
                selectedServices['check'] = false
                localStorage.setItem(SELECTED_SERVICES, JSON.stringify(selectedServices))
                localStorage.setItem(SELECTED_VERIFICATIONS, JSON.stringify(selectedVerifications))

                window.location.href = '#/nin/details'
              } else {
                alert.show(response.message, {
                  timeout: 20000,
                  type: 'error',
                })
              }
            }
          })
        } else {
          alert.show('Provide the Document Id', {
            timeout: 20000,
            type: 'error',
          })
        }
      } else {
        alert.show('Oops! NIN Check no longer active in your subscriptions', {
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
  const checkByFingerprint = (request) => {
    if (selectedVerifications !== null) {
      if (selectedVerifications['check'].status === 'open') {
        console.log(request)

        if (request.file) {
          setCheckFingerLoading(true)

          var file = request.file[0]
          console.log(file)
          var finger = {
            fingerPrintBase64: '',
            fingerPosition: 1,
          }
          getBase64(file).then((data) => {
            finger.fingerPrintBase64 = data.replace('data:image/jpeg;base64,', '')
            IdentityService.getNINByFingerprint(finger).then((response) => {
              setCheckFingerLoading(false)
              if (response == null) {
                alert.show('Request Failed', {
                  timeout: 20000,
                  type: 'error',
                })
              } else {
                if (response.success && response.payload != null) {
                  var ninDetails = response.payload
                  localStorage.setItem('NIN', JSON.stringify(ninDetails))
                  alert.show(response.message, {
                    timeout: 20000,
                    type: 'success',
                  })
                  //close this verification
                  selectedVerifications['check'].status = 'closed'
                  selectedVerifications['check'].selected = false
                  selectedServices['check'] = false
                  localStorage.setItem(SELECTED_SERVICES, JSON.stringify(selectedServices))
                  localStorage.setItem(
                    SELECTED_VERIFICATIONS,
                    JSON.stringify(selectedVerifications),
                  )

                  window.location.href = '#/nin/details'
                } else {
                  alert.show(response.message, {
                    timeout: 20000,
                    type: 'error',
                  })
                }
              }
            })
          })
        } else {
          alert.show('No File Selected', {
            timeout: 20000,
            type: 'error',
          })
        }
      } else {
        alert.show('Oops! NIN Check no longer active in your subscriptions', {
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

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  useEffect(() => {
    setCurrentUser(getUserDetails())
  }, [])

  return (
    <>
      {currentUser != null ? (
        <section>
          <div className="container py-2">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mb-4 mb-md-0">
                      <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-4">
                          <h4 className="pb-2">Check By NIN</h4>
                          <form method="POST" name="form" onSubmit={handleSubmit(checkByNin)}>
                            <div className="form-group mb-3">
                              <input
                                type="number"
                                placeholder=" NIN"
                                className="form-control"
                                required={true}
                                name="nin"
                                {...register('nin')}
                              />
                            </div>
                            {isCheckNinLoading ? (
                              <button type="button" className="btn btn-primary  ms-1">
                                Please Wait...
                              </button>
                            ) : (
                              <button type="submit" className="btn btn-primary  ms-1">
                                Check
                              </button>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 mb-md-0">
                      <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-4">
                          <h4 className="pb-2">Check By Phone Number</h4>
                          <form method="POST" name="form" onSubmit={handleSubmit(checkByPhone)}>
                            <div className="form-group mb-3">
                              <input
                                type="tel"
                                placeholder=" Phone Number"
                                className="form-control"
                                required={true}
                                name="phone"
                                {...register('phone')}
                              />
                            </div>
                            {isCheckPhoneLoading ? (
                              <button type="button" className="btn btn-primary  ms-1">
                                Please Wait...
                              </button>
                            ) : (
                              <button type="submit" className="btn btn-primary  ms-1">
                                Check
                              </button>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 mb-md-0">
                      <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-4">
                          <h4 className="pb-2">Check by Document Number</h4>
                          <form method="POST" name="form" onSubmit={handleSubmit(checkByDocument)}>
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                placeholder=" Document Id"
                                className="form-control"
                                required={true}
                                name="document"
                                {...register('document')}
                              />
                            </div>
                            {isCheckDocumentLoading ? (
                              <button type="button" className="btn btn-primary  ms-1">
                                Please Wait...
                              </button>
                            ) : (
                              <button type="submit" className="btn btn-primary  ms-1">
                                Check
                              </button>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                      <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-4">
                          <h4 className="pb-2">Check by Bio Data</h4>
                          <form method="POST" name="form" onSubmit={handleSubmit(checkByBioData)}>
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                placeholder=" First name"
                                className="form-control"
                                required={true}
                                name="firstName"
                                {...register('firstName')}
                              />
                            </div>
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                placeholder=" Last name"
                                className="form-control"
                                required={true}
                                name="lastName"
                                {...register('lastName')}
                              />
                            </div>

                            <div className="form-group mb-3">
                              <input
                                type="text"
                                placeholder=" Date of Birth (DD-MM-YYYY)"
                                className="form-control"
                                required={true}
                                name="dateOfBirth"
                                {...register('dateOfBirth')}
                              />
                            </div>
                            <div className="form-group mb-3">
                              <select
                                className="form-control"
                                required={true}
                                name="gender"
                                {...register('gender')}
                              >
                                <option value="">Gender</option>
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                              </select>
                            </div>
                            {isCheckBioLoading ? (
                              <button type="button" className="btn btn-primary  ms-1">
                                Please Wait...
                              </button>
                            ) : (
                              <button type="submit" className="btn btn-primary  ms-1">
                                Check
                              </button>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mb-4 mb-md-0">
                      <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-4">
                          <h4 className="pb-2">Check by Finger Print</h4>
                          <form
                            method="POST"
                            name="form"
                            onSubmit={handleSubmit(checkByFingerprint)}
                          >
                            <div className="form-group mb-3">
                              <input
                                type="file"
                                placeholder=" Fingerprint"
                                className="form-control"
                                required={true}
                                accept="image/x-png,image/jpeg"
                                name="file"
                                {...register('file')}
                              />
                            </div>
                            {isCheckFingerLoading ? (
                              <button type="button" className="btn btn-primary  ms-1">
                                Please Wait...
                              </button>
                            ) : (
                              <button type="submit" className="btn btn-primary  ms-1">
                                Check
                              </button>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default CheckIdentity
