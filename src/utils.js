function gen4() {
  return Math.random().toString(16).slice(-4)
}

export const generateUUID = () => {
  return 'iProve'.concat([gen4(), gen4(), gen4(), gen4(), gen4(), gen4(), gen4(), gen4()].join(''))
}

export const getParams = function (param) {
  const url = window.location.href
  var params = url.substring(url.lastIndexOf('?') + 1)
  var absParams = {}
  if (params.includes('&')) {
    params = params.split('&')
  } else {
    params = params.split()
  }

  params.forEach((param) => {
    if (param.includes('=')) {
      let val = param.split('=')
      absParams[val[0]] = val[1]
    }
  })
  return absParams[param]
}
