import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import AccountMenu from '../../components/account-menu'
import AddressView from '../../components/account/address-view'
import Layout from '../../components/layout'
import { selectUser } from '../../slices/userSlice'

function Profile() {
  const user = useSelector(selectUser)
  const cities = [`${user.userData.address.city}`, 'Mandalay', 'Kalaw']

  const states = [`${user.userData.address.region}`, 'Daw Pon', 'San Chaung']

  const [fullname, setFullname] = useState(
    `${user.userData.firstname} ${user.userData.lastname}`,
  )
  const [userPhoneNumber, setUserPhoneNumber] = useState(
    user.userData.phoneNumber,
  )
  const [userEmail, setUserEmail] = useState(user.userData.email)
  const [userPassword, setUserPassword] = useState('xxxxxxxx')

  const [city, SetCity] = useState(user.userData.address.city)

  console.log(city)
  const [region, setRegion] = useState(user.userData.address.region)
  return (
    <div>
      <div className="bg-secondary">
        <div className="container">
          <div className="row py-4 px-2">
            <nav aria-label="breadcrumb col-12">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  My Profile
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-lg-3">
            <AccountMenu current="profile" />
          </div>
          <div className="col-lg-9">
            <div className="row g-3">
              <div className="col-lg-9">
                <div className="card border-0 shadow-sm mb-3">
                  <div className="card-body">
                    <h4 className="card-title fw-semibold mt-2 mb-3">
                      Profile
                    </h4>
                    <form className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label">Your Name</label>
                        <input
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Password</label>
                        <input
                          value={userPassword}
                          type="password"
                          className="form-control bg-light"
                          disabled
                        />
                        <button
                          type="button"
                          className="btn btn-sm btn-link float-end p-0 text-decoration-none"
                        >
                          Change password
                        </button>
                      </div>
                      <div className="col-md-12 mt-0">
                        <label className="form-label">Phone</label>
                        <div className="input-group">
                          <div>
                            <select className="form-select rounded-0 rounded-start bg-light">
                              <option>+251</option>
                            </select>
                          </div>
                          <input
                            value={userPhoneNumber}
                            onChange={(e) => setUserPhoneNumber(e.target.value)}
                            type="tel"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">Email</label>
                        <input
                          value={userEmail}
                          type="email"
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-12">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" />
                          <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" />
                          <label className="form-check-label">Female</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">City</label>
                        <select value={city} className="form-select">
                          {cities.map((e, i) => {
                            return <option key={i}>{e}</option>
                          })}
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">States</label>
                        <select value={region} className="form-select">
                          {states.map((e, i) => {
                            return <option key={i}>{e}</option>
                          })}
                        </select>
                      </div>

                      <div className="col-md-12 mt-4">
                        <button className="btn btn-primary float-end">
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="card border-0 shadow-sm">
                  <div className="p-3 d-flex border-bottom">
                    <h5 className="my-auto fw-semibold">Addresses</h5>
                    <button className="btn btn-sm btn-secondary text-primary ms-auto">
                      <FontAwesomeIcon icon={['fas', 'plus']} />
                      &nbsp;Add new
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      <div className="col">
                        <AddressView />
                      </div>
                      <div className="col">
                        <AddressView />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

Profile.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>
}

export default Profile
