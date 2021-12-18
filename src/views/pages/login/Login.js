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
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiTm8gMTBDIEFkZXdhbGUgU3RyZWV0LCBBamFoLCBMYWdvcywgTmlnZXJpYSIsInNlY3JldGtleSI6Ijg0OTk5YzRmMTFjYjdlOWQyYzQwNmUzYjUxZjc5MDhlIiwibGV2ZWwiOm51bGwsInVzZXJfbmFtZSI6ImFkbWluQGlwcm92ZS5uZyIsImFjY291bnR0eXBlIjoiQURNSU4iLCJtb2JpbGUiOiIwODAwMDAwMDAwMCIsInV1aWQiOiJlNzkxYTQ1YTVlZjYxMWVjOWE5MDMzOThmMGNmYjNjMyIsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwiY2xpZW50X2lkIjoiaXByb3ZlLWNsaWVudCIsIm9yZ2FuaXphdGlvbmlkIjoibGlicmFsbGF3IiwicGxhaW4iOm51bGwsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJuYW1lIjoiaVByb3ZlIE5pZ2VyaWEiLCJpZCI6MSwianRpIjoiNzlkZTRhZDItOTMyMi00YWM1LTgyOTAtOTM2N2NlNDM3MjI5IiwiZW1haWwiOiJhZG1pbkBpcHJvdmUubmciLCJzdWJ1bmlxdWVpZCI6bnVsbCwic3RhdHVzIjoiQUMiLCJpc2VuYWJsZWQiOnRydWV9.xXeL4Z5nxSm4geABPIuuj0Q-WxSo7XAixAvqaRKI4YE',
      token_type: 'bearer',
      refresh_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZGRyZXNzIjoiTm8gMTBDIEFkZXdhbGUgU3RyZWV0LCBBamFoLCBMYWdvcywgTmlnZXJpYSIsInNlY3JldGtleSI6Ijg0OTk5YzRmMTFjYjdlOWQyYzQwNmUzYjUxZjc5MDhlIiwibGV2ZWwiOm51bGwsInVzZXJfbmFtZSI6ImFkbWluQGlwcm92ZS5uZyIsImFjY291bnR0eXBlIjoiQURNSU4iLCJtb2JpbGUiOiIwODAwMDAwMDAwMCIsInV1aWQiOiJlNzkxYTQ1YTVlZjYxMWVjOWE5MDMzOThmMGNmYjNjMyIsImF1dGhvcml0aWVzIjpbIlVTRVIiXSwiY2xpZW50X2lkIjoiaXByb3ZlLWNsaWVudCIsIm9yZ2FuaXphdGlvbmlkIjoibGlicmFsbGF3IiwicGxhaW4iOm51bGwsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJhdGkiOiI3OWRlNGFkMi05MzIyLTRhYzUtODI5MC05MzY3Y2U0MzcyMjkiLCJuYW1lIjoiaVByb3ZlIE5pZ2VyaWEiLCJpZCI6MSwiZXhwIjoxNjQyMzk4NTQ3LCJqdGkiOiI0NDlmOWIxNS1iMzgyLTRiMTctOTI4My02NmE4NzMxMzczZGEiLCJlbWFpbCI6ImFkbWluQGlwcm92ZS5uZyIsInN1YnVuaXF1ZWlkIjpudWxsLCJzdGF0dXMiOiJBQyIsImlzZW5hYmxlZCI6dHJ1ZX0.nDeLDCn_k4HyATfTV-n-pR1COTDeZOwKeNjrCkTfdzM',
      scope: 'read write',
      address: 'No 10C Adewale Street, Ajah, Lagos, Nigeria',
      secretkey: '84999c4f11cb7e9d2c406e3b51f7908e',
      level: null,
      accounttype: 'ADMIN',
      mobile: '08000000000',
      uuid: 'e791a45a5ef611ec9a903398f0cfb3c3',
      organizationid: 'librallaw',
      plain: null,
      name: 'iProve Nigeria',
      id: 1,
      email: 'admin@iprove.ng',
      subuniqueid: null,
      status: 'AC',
      isenabled: true,
      jti: '79de4ad2-9322-4ac5-8290-9367ce437229',
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
              <CCard
                className="text-white bg-primary py-5 login-container native"
                style={{ width: '44%' }}
              >
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
