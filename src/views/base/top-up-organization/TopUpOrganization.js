import React from 'react'
import { useForm } from 'react-hook-form'
import { useAlert } from 'react-alert'
import { useEffect, useState } from 'react'
import AdministrationService from 'src/services/administration-service'
import { getUserDetails } from 'src/auth'

const TopUpOrganization = () => {
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const alert = useAlert()

  const getUser = () => {
    var user = getUserDetails()
    if (user != null) setCurrentUser(user)
  }

  const onSubmit = (request) => {
    setIsLoading(true)
    request.organizationid = currentUser.organizationid
    console.log(request)

    AdministrationService.walletFund(request).then((response) => {
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
            window.location.href = '#/status?state=1&msg=Wallet Credited Successfully'
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
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 mb-md-0">
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body p-4">
                    <h4 className="pb-2">Fund Wallet </h4>
                    <form method="POST" name="form" onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          placeholder=" organization Id"
                          className="form-control disabled"
                          readOnly
                          hidden
                          defaultValue={currentUser != null ? currentUser.organizationid : ''}
                          required={true}
                          name="organizationid"
                          {...register('organizationid')}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          placeholder=" Amount"
                          className="form-control"
                          required={true}
                          name="amount"
                          {...register('amount')}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          placeholder=" Password"
                          className="form-control"
                          required={true}
                          name="password"
                          {...register('password')}
                        />
                      </div>

                      <div className="form-group mb-3">
                        {isLoading ? (
                          <button type="button" className="btn btn-primary  ms-1">
                            Please Wait...
                          </button>
                        ) : (
                          <button type="submit" className="btn btn-primary  ms-1">
                            Top Up
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TopUpOrganization
