module.exports = global.config = {
  baseURL: 'http://localhost:8082',
  publicKey: 'FLWPUBK-2270da1d89b4bb467c42b015a07f7e2f-X',
  verification: {
    identity: {
      price: 800,
      page: '/nin/verification',
      title: 'Verify Identity',
    },
    address: {
      price: 800,
      page: '/address/verification',
      title: 'Verify Address',
    },
    business: {
      price: 800,
      page: '/business/verification',
      title: 'Verify Business',
    },
    guarantor: {
      price: 800,
      page: '/guarantor/verification',
      title: 'Verify Guarantor',
    },
    property: {
      price: 800,
      page: '/property/verification',
      title: 'Verify Property',
    },
    employment: {
      price: 800,
      page: '/employment/verification',
      title: 'Verify Employment',
    },
  },
}
//'https://testapi.iprove.ng',
