import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()

  function handleClick() {
    var sessionData = {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiTm8gMTJDIEFkZXdhbGUgU3RyZWV0LCBBamFoLCBMYWdvcywgTmlnZXJpYSIsInNlY3JldGtleSI6bnVsbCwibGV2ZWwiOm51bGwsInVzZXJfbmFtZSI6ImFkbWluQGlwcm92ZS5uZyIsImFjY291bnR0eXBlIjoiQURNSU4iLCJtb2JpbGUiOiIwODAwMDAwMDAwMCIsInV1aWQiOiIzYjJiZWYwZDViZDExMWVjYTkyZmJkNjBjMjc5NWI0OSIsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwiY2xpZW50X2lkIjoiaXByb3ZlLWNsaWVudCIsIm9yZ2FuaXphdGlvbmlkIjpudWxsLCJwbGFpbiI6bnVsbCwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5hbWUiOiJpUHJvdmUgTmlnZXJpYSIsImlkIjoxLCJqdGkiOiIzZjNiODE2MS02MDE1LTQxNGYtYmY4ZS1jYzYyMDY4NmFlMTEiLCJlbWFpbCI6ImFkbWluQGlwcm92ZS5uZyIsInN1YnVuaXF1ZWlkIjpudWxsLCJzdGF0dXMiOiJBQyIsImlzZW5hYmxlZCI6dHJ1ZX0.XOssrgjRK0bMZWh7sTlr8AZ7oYG1CzPDurUJrCW4rUw',
      token_type: 'bearer',
      refresh_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiTm8gMTJDIEFkZXdhbGUgU3RyZWV0LCBBamFoLCBMYWdvcywgTmlnZXJpYSIsInNlY3JldGtleSI6bnVsbCwibGV2ZWwiOm51bGwsInVzZXJfbmFtZSI6ImFkbWluQGlwcm92ZS5uZyIsImFjY291bnR0eXBlIjoiQURNSU4iLCJtb2JpbGUiOiIwODAwMDAwMDAwMCIsInV1aWQiOiIzYjJiZWYwZDViZDExMWVjYTkyZmJkNjBjMjc5NWI0OSIsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwiY2xpZW50X2lkIjoiaXByb3ZlLWNsaWVudCIsIm9yZ2FuaXphdGlvbmlkIjpudWxsLCJwbGFpbiI6bnVsbCwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImF0aSI6IjNmM2I4MTYxLTYwMTUtNDE0Zi1iZjhlLWNjNjIwNjg2YWUxMSIsIm5hbWUiOiJpUHJvdmUgTmlnZXJpYSIsImlkIjoxLCJleHAiOjE2NDIwNTI2MzcsImp0aSI6IjEzNzNiMTFmLWVhMTctNGUwYi1iYmRiLTg5Nzc3NjNhMWI4MSIsImVtYWlsIjoiYWRtaW5AaXByb3ZlLm5nIiwic3VidW5pcXVlaWQiOm51bGwsInN0YXR1cyI6IkFDIiwiaXNlbmFibGVkIjp0cnVlfQ.yxuyhuAK-Kpbnb__dMiK5u9ZTy17fOHtE2lDtEowUmM',
      scope: 'read write',
      address: 'No 12C Adewale Street, Ajah, Lagos, Nigeria',
      secretkey: '84999c4f11cb7e9d2c406e3b51f7908e',
      level: null,
      accounttype: 'ADMIN',
      mobile: '08000000000',
      uuid: '3b2bef0d5bd111eca92fbd60c2795b49',
      organizationid: 'librallaw',
      plain: null,
      name: 'iProve Nigeria',
      id: 1,
      email: 'admin@iprove.ng',
      subuniqueid: null,
      status: 'AC',
      isenabled: true,
      jti: '960dde02-dd39-4eb4-b8f9-8d5e7ae7b18f',
    }

    localStorage.setItem('SESSION', JSON.stringify(sessionData))
    history.push('/dashboard')
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={handleClick}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
