import { createStore } from 'redux'

const initialSidebarState = {
  sidebarShow: true,
}
const initialServicesState = {
  identity: false,
  address: false,
  business: false,
  property: false,
  guarantor: false,
  employment: false,
}

const changeState = (state = initialSidebarState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...initialSidebarState, ...rest }
    case 'service':
      return { ...initialServicesState, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
