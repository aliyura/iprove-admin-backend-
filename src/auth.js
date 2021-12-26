export const getUserDetails = () => {
  var data = localStorage.getItem('SESSION')
  if (data != null) {
    return JSON.parse(data)
  }
}

export const getUserToken = () => {
  var user = getUserDetails()
  return user != null ? user.access_token : null
}

export const getUserOrganizationId = () => {
  var user = getUserDetails()
  return user != null ? user.organizationid : null
}

export const getUserSecretKey = () => {
  var user = getUserDetails()
  return user != null ? user.secretkey : null
}

export const getUserUniqueId = () => {
  var user = getUserDetails()
  return user != null ? user.uuid : null
}

export const getUserAccountType = () => {
  var user = getUserDetails()
  return user != null ? user.accounttype : null
}

export const isAuthenticated = () => {
  var user = getUserDetails()
  return user != null ? true : false
}
