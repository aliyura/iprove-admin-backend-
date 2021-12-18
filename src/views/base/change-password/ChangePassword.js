import React from 'react'
import './ChangePassword.css'
import { useForm } from 'react-hook-form'
import { getUserDetails } from 'src/auth'
import { useAlert } from 'react-alert'
import { useEffect, useState } from 'react'
import AdministrationService from 'src/services/administration-service'

const ChangePassword = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm()
  const alert = useAlert()

  const getUser = () => {
    var user = getUserDetails()
    if (user != null) setCurrentUser(user)
  }

  const onSubmit = (request) => {
    if (request.newpassword === request.confirmpassword) {
      delete request.confirmPassword
      setIsLoading(true)

      console.log(request)
      AdministrationService.resetPassword(request).then((response) => {
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
              window.location.href = '#/status?state=1&msg=Password Reset Successful'
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
      alert.show('Confirm Password not Equal', {
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
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 mb-md-0">
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body p-4">
                    <h4 className="pb-2">Reset Password</h4>
                    <form method="POST" name="form" onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group mb-3">
                        <input
                          type="password"
                          placeholder=" Current Password"
                          className="form-control"
                          required={true}
                          name="oldpassword"
                          {...register('oldpassword')}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="password"
                          placeholder=" New Password"
                          className="form-control"
                          required={true}
                          name="newpassword"
                          {...register('newpassword')}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="password"
                          placeholder=" Confirm Password"
                          className="form-control"
                          required={true}
                          name="confirmpassword"
                          {...register('confirmpassword')}
                        />
                      </div>

                      <div className="form-group mb-3">
                        {isLoading ? (
                          <button type="button" className="btn btn-primary  ms-1">
                            Please Wait...
                          </button>
                        ) : (
                          <button type="submit" className="btn btn-primary  ms-1">
                            Change Password
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

export default ChangePassword
