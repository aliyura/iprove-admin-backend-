import React from 'react'
import './ChangePassword.css'

const ChangePassword = () => {
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
                    <form>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          placeholder=" Current Password"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input type="text" placeholder=" New Password" className="form-control" />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          placeholder=" Confirm Password"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group mb-3">
                        <button type="button" className="btn btn-primary  ms-1">
                          Change
                        </button>
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
