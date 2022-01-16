import React from 'react'
import { Link } from 'react-router-dom'
import { cilPencil, cilWallet } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useEffect, useState } from 'react'
import { getUserDetails } from 'src/auth'
import Loader from 'src/components/utils/loader/Loader'
import AdministrationService from 'src/services/administration-service'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
const OrganizationProfile = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [walletBalance, setWalletBalance] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false)
  const [isResetingKeys, setIsResentingKeys] = useState(false)
  const { register, handleSubmit } = useForm()
  const alert = useAlert()

  const fetchWalletBalance = () => {
    setIsLoading(true)
    AdministrationService.getWalletBalance().then((response) => {
      setIsLoading(false)
      if (response == null) {
        setWalletBalance(0)
      } else {
        if (response.success && response.payload != null) {
          setWalletBalance(response.payload.balance)
        } else {
          setWalletBalance(0)
          console.log(response.message)
        }
      }
    })
  }

  const onUpdateProfile = (request) => {
    setIsUpdatingProfile(true)
    console.log(request)
    AdministrationService.updateProfile(request).then((response) => {
      setIsUpdatingProfile(false)
      if (response == null) {
        alert.show('Request Failed', {
          timeout: 20000,
          type: 'error',
        })
      } else {
        if (response.success && response.payload != null) {
          alert.show(response.message, {
            timeout: 20000,
            type: 'success',
          })
          if (response.success && response.payload != null) {
            window.location.href = '#/status?state=1&msg=Profile Updated Successfully'
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

  const onResetKeys = (request) => {
    setIsResentingKeys(true)
    console.log(request)
    AdministrationService.resetKeys(request).then((response) => {
      setIsResentingKeys(false)
      if (response == null) {
        alert.show('Request Failed', {
          timeout: 20000,
          type: 'error',
        })
      } else {
        if (response.success && response.payload != null) {
          currentUser.name = request.name
          currentUser.email = request.email
          currentUser.mobile = request.mobile
          currentUser.address = request.address

          localStorage.setItem('SESSION', JSON.stringify(currentUser))
          setCurrentUser(currentUser)

          alert.show(response.message, {
            timeout: 20000,
            type: 'success',
          })
          if (response.success && response.payload != null) {
            window.location.href = '#/status?state=1&msg=Keys Resetted Successful'
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
    setCurrentUser(getUserDetails())
    fetchWalletBalance()
  }, [])

  return (
    <>
      {currentUser != null ? (
        <section>
          <div className="container py-2">
            <div className="row">
              {currentUser.accounttype !== 'INDIVIDUAL' ? (
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="p-3 mb-3 row">
                        <h5>{currentUser.name}</h5>
                        <p>Abuja, Nigeria</p>
                      </div>
                      <hr />
                      <h4>Wallet Balance</h4>
                      <h2 className="text-muted mb-1">{isLoading ? '...' : walletBalance}</h2>
                      <hr />
                      <br />
                      <Link to="/account/change-password" className="btn btn-primary ms-1">
                        {' '}
                        <CIcon icon={cilPencil} /> Reset Password
                      </Link>

                      <Link to="/fund/wallet" className="btn btn-primary native ms-1">
                        {' '}
                        <CIcon icon={cilWallet} /> Fund Wallet
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{currentUser.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{currentUser.email}</p>
                      </div>
                    </div>

                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{currentUser.mobile}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{currentUser.address}</p>
                      </div>
                    </div>

                    {currentUser.accounttype !== 'INDIVIDUAL' ? (
                      <>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Organization Id</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{currentUser.organizationid}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Secret Key</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{currentUser.secretkey}</p>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-4 mb-md-0">
                      <div className="card mb-4 mb-lg-0">
                        <div className="card-body p-4">
                          <h4 className="pb-2">Edit Profile</h4>
                          <form method="POST" name="form" onSubmit={handleSubmit(onUpdateProfile)}>
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                placeholder=" Name"
                                className="form-control"
                                defaultValue={currentUser.name}
                                required={true}
                                name="name"
                                {...register('name')}
                              />
                            </div>
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                placeholder=" Email"
                                className="form-control"
                                defaultValue={currentUser.email}
                                required={true}
                                name="email"
                                {...register('email')}
                              />
                            </div>
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                placeholder=" Phone"
                                className="form-control"
                                defaultValue={currentUser.mobile}
                                required={true}
                                name="mobile"
                                {...register('mobile')}
                              />
                            </div>

                            <div className="form-group mb-3">
                              <input
                                type="text"
                                placeholder=" Address"
                                className="form-control"
                                defaultValue={currentUser.address}
                                required={true}
                                name="address"
                                {...register('address')}
                              />
                            </div>

                            <div className="form-group mb-3">
                              {isUpdatingProfile ? (
                                <button type="button" className="btn btn-primary  ms-1">
                                  Please Wait...
                                </button>
                              ) : (
                                <button type="submit" className="btn btn-primary  ms-1">
                                  Save Changes
                                </button>
                              )}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {currentUser.accounttype !== 'INDIVIDUAL' ? (
                    <div className="col-md-6">
                      <div className="card mb-4 mb-md-0 p-4">
                        <h4 className="pb-2">Reset Secret Key</h4>
                        <form method="POST" name="form" onSubmit={handleSubmit(onResetKeys)}>
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              placeholder=" Organization id"
                              className="form-control disabled"
                              readOnly
                              defaultValue={currentUser.organizationid}
                              required={true}
                              name="organizationid"
                              {...register('organizationid')}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              placeholder=" Secret Key"
                              className="form-control disabled"
                              readOnly
                              defaultValue={currentUser.secretkey}
                              required={true}
                              name="secretkey"
                              {...register('secretkey')}
                            />
                          </div>
                          <div className="form-group mb-3">
                            <input
                              type="password"
                              placeholder=" Password"
                              className="form-control"
                              required={true}
                              name="password"
                              {...register('password')}
                            />
                          </div>
                          <div className="form-group mb-3">
                            {isResetingKeys ? (
                              <button type="button" className="btn btn-primary  ms-1">
                                Please Wait...
                              </button>
                            ) : (
                              <button type="submit" className="btn btn-primary  ms-1">
                                Reset Keys
                              </button>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
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

export default OrganizationProfile
