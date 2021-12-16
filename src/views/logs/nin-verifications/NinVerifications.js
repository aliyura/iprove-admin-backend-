import React from 'react'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { baseURL } from 'src/config'
import { getUserOrganizationId, getUserSecretKey } from 'src/auth'
import StatusMessage from 'src/components/utils/status/StatusMessage'
import Loader from 'src/components/utils/loader/Loader'
import './NinVerifications.css'

const NinVerifications = () => {
  const [result, setResult] = useState(null)
  const [readyState, setReadyState] = useState(0)
  const [statusMessage, setStatusMessage] = useState('Oops! No Data Found')
  const isMounted = useRef(false)

  const fetchLogs = () => {
    const url = `${baseURL}/identity/api/v1/nin/verification_logs`
    const headers = {
      'secret-key': getUserSecretKey(),
      'org-id': getUserOrganizationId(),
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

  useEffect(() => {
    isMounted.current = true

    fetchLogs()
    return () => (isMounted.current = false)
  }, [])

  return (
    <>
      {readyState === 0 ? (
        <Loader />
      ) : readyState === 1 && result != null ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"> S/N</th>
              <th scope="col">Action</th>
              <th scope="col">Request/Response</th>
              <th scope="col">Transaction Status</th>
              <th scope="col">Transaction Date</th>
            </tr>
          </thead>
          <tbody>
            {result.payload.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{item.action}</td>
                  <td>{item.message}</td>
                  <td className={`${item.status === 'Success' ? 'success' : 'failed'}`}>
                    {item.status}
                  </td>
                  <td>{item.time}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <StatusMessage message={statusMessage} />
      )}
    </>
  )
}

export default NinVerifications
