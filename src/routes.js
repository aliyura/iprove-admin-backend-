import React from 'react'
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const NinVerifications = React.lazy(() => import('./views/logs/nin-verifications/NinVerifications'))
const AddressVerifications = React.lazy(() =>
  import('./views/logs/address-verifications/AddressVerifications'),
)
const BusinessVerifications = React.lazy(() =>
  import('./views/logs/business-verifications/BusinessVerifications'),
)
const GuarantorVerifications = React.lazy(() =>
  import('./views/logs/guarantor-verifications/GuarantorVerifications'),
)
const EmploymentVerifications = React.lazy(() =>
  import('./views/logs/employment-verifications/EmploymentVerifications'),
)
const PropertyVerifications = React.lazy(() =>
  import('./views/logs/property-verifications/PropertyVerifications'),
)
const AllOrganizations = React.lazy(() => import('./views/organization/AllOrganizations'))
const ActiveOrganizations = React.lazy(() => import('./views/organization/ActiveOrganizations'))
const InActiveOrganizations = React.lazy(() => import('./views/organization/InActiveOrganizations'))
const OrganizationProfile = React.lazy(() =>
  import('./views/base/organization-details/OrganizationProfile'),
)
const Checkout = React.lazy(() => import('./views/base/Checkout'))
const CreateOrganization = React.lazy(() =>
  import('./views/base/create-organization/CreateOrganization'),
)
const ChangePassword = React.lazy(() => import('./views/base/change-password/ChangePassword'))
const TopUpOrganization = React.lazy(() =>
  import('./views/base/top-up-organization/TopUpOrganization'),
)
const NINVerification = React.lazy(() => import('./views/verification/NINVerification'))
const AddressVerification = React.lazy(() => import('./views/verification/AddressVerification'))
const BusinessVerification = React.lazy(() => import('./views/verification/BusinessVerification'))
const GuarantorVerification = React.lazy(() => import('./views/verification/GuarantorVerification'))
const EmploymentVerification = React.lazy(() =>
  import('./views/verification/EmploymentVerification'),
)
const PropertyVerification = React.lazy(() => import('./views/verification/PropertyVerification'))

const Status = React.lazy(() => import('./views/base/Status'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/nin/verifications', name: 'ninverifications', component: NinVerifications },
  { path: '/address/verifications', name: 'AddressVerifications', component: AddressVerifications },
  {
    path: '/business/verifications',
    name: 'BusinessVerifications',
    component: BusinessVerifications,
  },
  {
    path: '/guarantor/verifications',
    name: 'GuarantorVerifications',
    component: GuarantorVerifications,
  },
  {
    path: '/property/verifications',
    name: 'PorpertyVerifications',
    component: PropertyVerifications,
  },
  {
    path: '/employment/verifications',
    name: 'EmploymentVerifications',
    component: EmploymentVerifications,
  },
  { path: '/organization/create', name: 'CreateOrganization', component: CreateOrganization },
  { path: '/fund/wallet', name: 'FundWalletOrganization', component: TopUpOrganization },
  { path: '/organization/all', name: 'AllOrganizations', component: AllOrganizations },
  { path: '/organizations/active', name: 'ActiveOrganizations', component: ActiveOrganizations },

  //verifications
  { path: '/nin/verification', name: 'NINVerification', component: NINVerification },
  { path: '/business/verification', name: 'BusinessVerification', component: BusinessVerification },
  {
    path: '/guarantor/verification',
    name: 'GuarantorVerification',
    component: GuarantorVerification,
  },
  {
    path: '/employment/verification',
    name: 'EmploymentVerification',
    component: EmploymentVerification,
  },
  { path: '/property/verification', name: 'PropertyVerification', component: PropertyVerification },
  { path: '/address/verification', name: 'AddressVerification', component: AddressVerification },

  //checkout
  {
    path: '/status',
    name: 'Status',
    component: Status,
  },

  {
    path: '/organizations/inactive',
    name: 'InActiveOrganizations',
    component: InActiveOrganizations,
  },
  { path: '/profile', name: 'Profile', component: OrganizationProfile },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  {
    path: '/account/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
  },
]

export default routes
