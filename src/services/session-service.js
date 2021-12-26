import axios from 'axios'
import { baseURL } from './../config'
const SessionService = {
  setSession: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/login/store_session',
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      data: request,
    }
    return await axios(options)
      .then((res) => {
        console.log(res)
        return res.data
      })
      .catch((err) => {
        console.log(err)
        return null
      })
  },
  clearSession: async function () {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/login/clear_session',
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    }
    return await axios(options)
      .then((res) => {
        console.log(res)
        return res.data
      })
      .catch((err) => {
        console.log(err)
        return null
      })
  },
  getSession: async function () {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/login/get_session',
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    }
    return await axios(options)
      .then((res) => {
        console.log(res)
        return res.data
      })
      .catch((err) => {
        console.log(err)
        return null
      })
  },
}

export default SessionService
