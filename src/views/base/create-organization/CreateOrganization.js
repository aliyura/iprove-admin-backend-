import React from 'react'
import './CreateOrganization.css'
import { useForm } from 'react-hook-form'
import { getUserDetails } from 'src/auth'
import { useAlert } from 'react-alert'
import { useEffect, useState } from 'react'
import AdministrationService from 'src/services/administration-service'

const CreateOrganization = () => {
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

    request.accounttype = currentUser.accounttype

    console.log(request)
    AdministrationService.createOrganization(request).then((response) => {
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
            window.location.href = '#/status?state=1&msg=Organization Created Successfully'
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
                    <h4 className="pb-2">Create Organization</h4>
                    <form method="POST" name="form" onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          placeholder=" Name"
                          className="form-control"
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
                          required={true}
                          name="mobile"
                          {...register('mobile')}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          placeholder=" Username"
                          className="form-control"
                          required={true}
                          name="username"
                          {...register('username')}
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
                        {isLoading ? (
                          <button type="button" className="btn btn-primary  ms-1">
                            Please Wait...
                          </button>
                        ) : (
                          <button type="submit" className="btn btn-primary  ms-1">
                            Create Organization
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

export default CreateOrganization
