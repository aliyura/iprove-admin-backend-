import axios from 'axios'
import { getUserOrganizationId, getUserSecretKey, getUserToken } from 'src/auth'
import { baseURL } from 'src/config'
const AdministrationService = {
  createOrganization: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/account/create',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
        Authorization: 'Bearer ' + getUserToken(),
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

  updateProfile: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/account/update',
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
        Authorization: 'Bearer ' + getUserToken(),
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
  resetKeys: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/account/reset_keys',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
        Authorization: 'Bearer ' + getUserToken(),
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
  resetPassword: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/account/password/reset',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
        Authorization: 'Bearer ' + getUserToken(),
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

  walletFund: async function (request) {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/wallet/fund',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
        Authorization: 'Bearer ' + getUserToken(),
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

  getWalletBalance: async function () {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/wallet/balance',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
        Authorization: 'Bearer ' + getUserToken(),
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

  getActiveOrganizations: async function () {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/get_all_active',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
        Authorization: 'Bearer ' + getUserToken(),
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
  getInActiveOrganizations: async function () {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/get_all_inactive',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
        Authorization: 'Bearer ' + getUserToken(),
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
  getAllOrganizations: async function () {
    //inspect the value
    const options = {
      url: baseURL + '/administration/api/v1/organization/get_all',
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'secret-key': getUserSecretKey(),
        'org-id': getUserOrganizationId(),
        Authorization: 'Bearer ' + getUserToken(),
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

export default AdministrationService
