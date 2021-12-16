import React from 'react'
import './OrganizationDetails.css'
import { Link } from 'react-router-dom'
import { cilPencil, cilWallet } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

const OrganizationDetails = () => {
  return (
    <>
      <section>
        <div className="container py-2">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="p-3 mb-3 row">
                    <h5>MTN Nigeria</h5>
                    <p>Abuja, Nigeria</p>
                  </div>
                  <hr />

                  <h4>Wallet Balance</h4>
                  <h2 className="text-muted mb-1">99</h2>
                  <hr />
                  <h4>Credit Balance</h4>
                  <h2 className="text-muted mb-1">99</h2>
                  <hr />

                  <Link to="/account/change-password" className="btn btn-primary ms-1">
                    {' '}
                    <CIcon icon={cilPencil} /> Reset Password
                  </Link>

                  <Link to="/topup" className="btn btn-primary native ms-1">
                    {' '}
                    <CIcon icon={cilWallet} /> Top Up Credit
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card mb-4 mb-lg-0">
                      <div className="card-body p-4">
                        <h4 className="pb-2">Edit Organisation Profile</h4>
                        <form>
                          <div className="form-group mb-3">
                            <input type="text" placeholder=" Name" className="form-control" />
                          </div>
                          <div className="form-group mb-3">
                            <input type="text" placeholder=" Email" className="form-control" />
                          </div>
                          <div className="form-group mb-3">
                            <input type="text" placeholder=" Phone" className="form-control" />
                          </div>
                          <div className="form-group mb-3">
                            <input type="text" placeholder=" Username" className="form-control" />
                          </div>
                          <div className="form-group mb-3">
                            <button type="button" className="btn btn-primary  ms-1">
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0 p-4">
                    <h4 className="pb-2">Reset Secret Key</h4>
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
                          Reset
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

export default OrganizationDetails
