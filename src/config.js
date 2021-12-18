module.exports = global.config = {
  baseURL: 'http://testapi.iprove.ng',
  publicKey: 'FLWPUBK-2270da1d89b4bb467c42b015a07f7e2f-X',
  verification: {
    identity: {
      price: 400,
      page: '/nin/verification',
      title: 'Verify Identity',
      status: 'closed',
      selected: false,
    },
    address: {
      price: 1500,
      page: '/address/verification',
      title: 'Verify Address',
      status: 'closed',
      selected: false,
    },
    business: {
      price: 800,
      page: '/business/verification',
      title: 'Verify Business',
      status: 'closed',
      selected: false,
    },
    guarantor: {
      price: 800,
      page: '/guarantor/verification',
      title: 'Verify Guarantor',
      status: 'closed',
      selected: false,
    },
    property: {
      price: 1000,
      page: '/property/verification',
      title: 'Verify Property',
      status: 'closed',
      selected: false,
    },
    employment: {
      price: 2000,
      page: '/employment/verification',
      title: 'Verify Employment',
      status: 'closed',
      selected: false,
    },
  },
}
//'https://testapi.iprove.ng',
