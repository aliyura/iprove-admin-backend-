import axios from 'axios'
import { getUserOrganizationId, getUserSecretKey } from 'src/auth'
import { baseURL } from 'src/config'
const IdentityService = {
  verifyAddress: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/address/request_verification',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
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
  verifyBusiness: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/business/request_verification',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
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

  verifyGuarantor: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/guarantor/request_verification',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
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
  verifyProperty: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/property/request_verification',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
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
  verifyEmployment: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/employment/request_verification',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
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
}

export default IdentityService
