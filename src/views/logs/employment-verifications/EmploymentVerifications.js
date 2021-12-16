import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from 'src/config'
import { getUserOrganizationId, getUserSecretKey } from 'src/auth'
import StatusMessage from 'src/components/utils/status/StatusMessage'
import Loader from 'src/components/utils/loader/Loader'
import './EmploymentVerifications.css'

const EmploymentVerifications = () => {
  const [result, setResult] = useState(null)
  const [readyState, setReadyState] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [statusMessage, setStatusMessage] = useState('Oops! No Data Found')
  const fetchLogs = (page) => {
    ///////
    setReadyState(0)
    setCurrentPage(page)

    const url = `${baseURL}/identity/api/v1/employment/get_verifications?page=${currentPage}`
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
                <th scope="col">Employer Name</th>
                <th scope="col">Employer Email</th>
                <th scope="col">Employer Phone</th>
                <th scope="col">Job Title</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Employee Phone</th>
                <th scope="col">Status</th>
                <th scope="col">Start Date</th>
                <th scope="col">Initiated Date</th>
              </tr>
            </thead>
            <tbody>
              {result.payload.content.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.employername}</td>
                    <td>{item.employeremail}</td>
                    <td>{item.employerphone}</td>
                    <td>{item.jobtitle}</td>
                    <td>{`${item.employee.firstname} ${item.employee.lastname}`}</td>
                    <td>{item.employee.phone}</td>
                    <td className={`${item.status}`}>{item.status}</td>
                    <td>{item.startdate}</td>
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

export default EmploymentVerifications
