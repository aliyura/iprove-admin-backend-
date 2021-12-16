export const getUserDetails = () => {
  var user = localStorage.getItem('SESSION')
  if (user != null) {
    return JSON.parse(user)
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
