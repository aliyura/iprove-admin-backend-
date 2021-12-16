import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from 'src/config'
import { getUserOrganizationId, getUserSecretKey } from 'src/auth'
import StatusMessage from 'src/components/utils/status/StatusMessage'
import Loader from 'src/components/utils/loader/Loader'
import './BusinessVerifications.css'

const BusinessVerifications = () => {
  const [result, setResult] = useState(null)
  const [readyState, setReadyState] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [statusMessage, setStatusMessage] = useState('Oops! No Data Found')
  const fetchLogs = (page) => {
    ///////
    setReadyState(0)
    setCurrentPage(page)

    const url = `${baseURL}/identity/api/v1/business/get_verifications?page=${currentPage}`
    const headers = {
      'secret-key': getUserSecretKey(),
      'org-id': getUserOrganizationId(),
    }
    ///
    axios
      .get(url, {
        headers: headers,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data)
          setReadyState(1)
          setResult(res.data)
          setStatusMessage(res.data.message)
        } else {
          console.log(res)
          setReadyState(2)
          setStatusMessage(res.data.message)
        }
      })
      .catch((err) => {
        setReadyState(2)
        setStatusMessage(err)
      })
  }

  const onIndexSelected = (e) => {
    e.preventDefault()
    var i = e.target.value
    fetchLogs(i)
  }

  const previousPage = (e) => {
    var page = currentPage
    if (page > 0) {
      page = page - 1
      setCurrentPage(page)
    }
  }

  const nextPage = (e) => {
    var page = currentPage
    if (page < result.payload.totalPages) {
      page = page + 1
      setCurrentPage(page)
    }
  }

  useEffect(() => {
    fetchLogs(0)
  }, [])

  return (
    <>
      {readyState === 0 ? (
        <Loader />
      ) : readyState === 1 && result != null ? (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"> S/N</th>
                <th scope="col">Business Name</th>
                <th scope="col">Business Type</th>
                <th scope="col">RC Number</th>
                <th scope="col">State</th>
                <th scope="col">Local Govt.</th>
                <th scope="col">Street</th>
                <th scope="col">Status</th>
                <th scope="col">Initiated Date</th>
              </tr>
            </thead>
            <tbody>
              {result.payload.content.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.businessname}</td>
                    <td>{item.businesstype}</td>
                    <td>{item.rcnumber}</td>
                    <td>{item.state}</td>
                    <td>{item.lga}</td>
                    <td>{item.street}</td>
                    <td className={`${item.status}`}>{item.status}</td>
                    <td>{item.createddate}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <nav aria-label="Page navigation ">
            <ul className="pagination pagenation-nav">
              <li className={`page-item ${currentPage - 1 <= 0 ? 'disabled' : ''}`}>
                <button type="button" className="page-link " onClick={previousPage}>
                  Previous
                </button>
              </li>
              {[...Array(result.payload.totalPages)].map((x, i) => (
                <li className="page-item" key={i}>
                  <button className="page-link" value={i} onClick={onIndexSelected}>
                    {i}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage + 1 >= result.payload.totalPages ? 'disabled' : ''
                }`}
              >
                <button type="button" className="page-link" onClick={nextPage}>
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </>
      ) : (
        <StatusMessage message={statusMessage} />
      )}
    </>
  )
}

export default BusinessVerifications
