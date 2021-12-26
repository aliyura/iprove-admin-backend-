function gen4() {
  return Math.random().toString(16).slice(-4)
}

export const generateUUID = () => {
  return 'iProve'.concat([gen4(), gen4(), gen4(), gen4(), gen4(), gen4(), gen4(), gen4()].join(''))
}

export const getParams = function () {
  var params = window.location.search
  if (params != null && params !== '') {
    return JSON.parse(
      '{"' + params.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
      function (key, value) {
        return key === '' ? value : decodeURIComponent(value)
      },
    )
  }
  return null
}
export const getParam = function (param) {
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
  var str = absParams[param]
  if (str !== null) {
    str = str.replaceAll('%20', ' ')
    return str
  } else {
    return null
  }
}
