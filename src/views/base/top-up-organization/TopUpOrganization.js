import React from 'react'
import './TopUpOrganization.css'

const TopUpOrganization = () => {
  return (
    <>
      <section>
        <div className="container py-2">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 mb-md-0">
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body p-4">
                    <h4 className="pb-2">Top Up Organisation</h4>
                    <form>
                      <div className="form-group mb-3">
                        <select className="form-control">
                          <option>Select Organization...</option>
                        </select>
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          placeholder=" Amount of Credit"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input type="text" placeholder=" Password" className="form-control" />
                      </div>

                      <div className="form-group mb-3">
                        <button type="button" className="btn btn-primary  ms-1">
                          Top Up
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

export default TopUpOrganization
