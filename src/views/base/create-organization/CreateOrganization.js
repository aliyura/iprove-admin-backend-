import React from 'react'
import './CreateOrganization.css'

const CreateOrganization = () => {
  return (
    <>
      <section>
        <div className="container py-2">
          <div className="row">
            <div className="col-md-6">
              <div className="card mb-4 mb-md-0">
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body p-4">
                    <h4 className="pb-2">Create Organisation</h4>
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
                          Create Organization
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

export default CreateOrganization
