import React from 'react'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { baseURL } from 'src/config'
import { getUserOrganizationId, getUserSecretKey, getUserToken } from 'src/auth'
import StatusMessage from 'src/components/utils/status/StatusMessage'
import Loader from 'src/components/utils/loader/Loader'
import { cilEyedropper } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'

const ActiveOrganizations = () => {
  const [result, setResult] = useState(null)
  const [readyState, setReadyState] = useState(0)
  const [statusMessage, setStatusMessage] = useState('Oops! No Data Found')
  const [currentPage, setCurrentPage] = useState(0)
  const isMounted = useRef(false)

  const fetchLogs = (page) => {
    ///////
    setReadyState(0)
    setCurrentPage(page)

    const url = `${baseURL}/administration/api/v1/organization/get_all_active`
    const headers = {
      'secret-key': getUserSecretKey(),
      'org-id': getUserOrganizationId(),
      Authorization: `Bearer ${getUserToken()}`,
    }

    axios
      .get(url, {
        headers: headers,
      })
      .then((res) => {
        if (res.data.success) {
          console.log(res.data)
          if (isMounted) {
            setReadyState(1)
            setResult(res.data)
            setStatusMessage(res.data.message)
          }
        } else {
          console.log(res)
          if (isMounted) {
            setReadyState(2)
            setStatusMessage(res.data.message)
          }
          console.log(res.data.message)
        }
      })
      .catch((err) => {
        if (isMounted) {
          setReadyState(2)
          setStatusMessage(err)
        }
        console.log(err)
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
    isMounted.current = true

    fetchLogs(0)
    return () => (isMounted.current = false)
  }, [])

  return (
    <>
      {readyState === 0 ? (
        <Loader />
      ) : readyState === 1 && result != null ? (
        result.payload.total > 0 ? (
          <>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"> S/N</th>

                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Access Level</th>
                  <th scope="col">Date Created</th>
                  <th scope="col">#</th>
                </tr>
              </thead>
              <tbody>
                {result.payload.data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{item.name}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.balance}</td>
                      <td className={`${item.active === '0' ? 'active' : 'pending'}`}>
                        {`${item.active === '0' ? 'Active' : 'InActive'}`}
                      </td>
                      <td>{item.access_level}</td>
                      <td>{item.created_at}</td>
                      <td>
                        <Link to="/organization/details" className="btn btn-primary native ms-1">
                          <CIcon icon={cilEyedropper} /> View
                        </Link>
                      </td>
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
                {[...Array(result.payload.total)].map((x, i) => (
                  <li className="page-item" key={i}>
                    <button className="page-link" value={i} onClick={onIndexSelected}>
                      {i}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage + 1 >= result.payload.total ? 'disabled' : ''
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
        )
      ) : (
        <StatusMessage message={statusMessage} />
      )}
    </>
  )
}

export default ActiveOrganizations
