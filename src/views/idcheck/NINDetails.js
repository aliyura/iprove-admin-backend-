import React from 'react'
import { useEffect, useState } from 'react'
import { getUserDetails } from 'src/auth'
import Loader from 'src/components/utils/loader/Loader'
import Avatar from 'src/assets/images/avatar.jpg'
import StatusMessage from 'src/components/utils/status/StatusMessage'

const NINDetails = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [nin, setNinDetails] = useState(null)
  const init = () => {
    var nin = localStorage.getItem('NIN')
    if (nin != null) setNinDetails(JSON.parse(nin))
  }
  const PrintElem = () => {
    window.print()
    return true
  }

  useEffect(() => {
    setCurrentUser(getUserDetails())
    init()
  }, [])

  return (
    <>
      {currentUser != null ? (
        nin != null ? (
          <section>
            <div className="container py-2" id="identityDetails">
              <div className="row">
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body nin-details-card">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Title</p>
                          <h6>{nin.title != null ? nin.title : '***'}</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">First Name </p>
                          <h6>{nin.firstname != null ? nin.firstname : '***'}</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Middle name</p>
                          <h6>{nin.middlename != null ? nin.middlename : '***'}</h6>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Surname</p>
                          <h6>{nin.surname != null ? nin.surname : '***'}</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Tracking Id</p>
                          <h6>{nin.trackingId != null ? nin.trackingId : '***'}</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">NIN</p>
                          <h6>{nin.nin != null ? nin.nin : '***'}</h6>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Telephone</p>
                          <h6>{nin.telephoneno != null ? nin.telephoneno : '***'}</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Gender </p>
                          <h6>{nin.gender != null ? nin.gender : '***'}</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Date of Birth</p>
                          <h6>{nin.birthdate != null ? nin.birthdate : '***'}</h6>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Marital Status</p>
                          <h6>****</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Employment Status </p>
                          <h6>***</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Document Id</p>
                          <h6>{nin.trackingId != null ? nin.trackingId : '***'}</h6>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Residential Address</p>
                          <h6>{nin.birthcountry != null ? nin.birthstate : '***'}</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Residential State </p>
                          <h6>{nin.birthstate != null ? nin.birthstate : '***'}</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Residence Status </p>
                          <h6>birth</h6>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Residential Lga</p>
                          <h6>{nin.birthlga != null ? nin.birthlga : '***'}</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Residential Town</p>
                          <h6>*****</h6>
                        </div>
                        <div className="col-sm-3">
                          <p className="mb-0">Nok Postal Code</p>
                          <h6>***</h6>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-native" type="button" onClick={PrintElem}>
                      Print
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4 mb-md-0 mb-5">
                    <div className="card mb-4 mb-lg-0">
                      <div className="card-body p-4">
                        <img
                          src={'data:image/png;base64,' + nin.photo}
                          className="nin-profile"
                          alt="avatar"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card mb-4 mb-md-0">
                    <div className="card mb-4 mb-lg-0">
                      <div className="card-body p-4">
                        <img
                          src={'data:image/png;base64,' + nin.signature}
                          className="nin-profile"
                          alt="avatar"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <StatusMessage />
        )
      ) : (
        <Loader />
      )}
    </>
  )
}

export default NINDetails
