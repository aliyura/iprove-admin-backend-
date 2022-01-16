import axios from 'axios'
import { getUserOrganizationId, getUserSecretKey } from 'src/auth'
import { baseURL } from 'src/config'
const IdentityService = {
  getNINById: async function (nin) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/nin/details/get_by_id/' + nin,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
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

  getNINByPhoneNumber: async function (phoneNumber) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/nin/details/get_by_phonenumber/' + phoneNumber,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
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

  getNINByPhoneNumber: async function (phoneNumber) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/nin/details/get_by_phonenumber/' + phoneNumber,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
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

  getNINByDocumentId: async function (documentId) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/nin/details/get_by_document/' + documentId,
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
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

  getNINByBioData: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/nin/details/get_by_biodata',
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
  getNINByFingerprint: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/identity/api/v1/nin/details/get_by_fingerprint',
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
