import axios from '../utils/axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '../../components/layout'
import { login } from '../../slices/userSlice'

const cities = ['Addis Ababa', 'Gondar', 'Hawassa']

const states = ['Oromiya', 'Amhara', 'Debub']

function SignUp() {
  const router = useRouter()

  const dispatch = useDispatch()
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmpassword, setConfirmPassword] = useState()
  const [phoneNumber, setPhoneNumber] = useState()
  const [city, setCity] = useState('Addis Ababa')
  const [region, setRegion] = useState('Oromiya')

  // useEffect(() => {
  //   console.log({
  //     firstName,
  //     lastName,
  //     email,
  //     password,
  //     confirmpassword,
  //     phoneNumber,
  //     city,
  //     region,
  //   })
  // }, [
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  //   confirmpassword,
  //   phoneNumber,
  //   city,
  //   region,
  // ])

  const SignUser = (e) => {
    console.log({ city: city, region: region })
    if (password === confirmpassword) {
      axios
        .post('api/auth/signup', {
          email: email,
          password: password,
          firstname: firstName,
          lastname: lastName,
          phoneNumber: phoneNumber,
          address: {
            city: city,
            region: region,
          },
        })
        .then((res) => {
          console.log(res.data)
          dispatch(login(res.data))
          localStorage.setItem('ETOKEN', res.data.token)
          router.push({ pathname: '/account/profile' })
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      console.log("Password does not match")
    }
  }
  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Sign Up</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Phone Number</label>
                  <input
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    type="number"
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-select"
                  >
                    {cities.map((e, i) => {
                      return <option key={i}>{e}</option>
                    })}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Region</label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="form-select"
                  >
                    {states.map((e, i) => {
                      return (
                        <option
                          onClick={() => {
                            setRegion(e)
                          }}
                          key={i}
                        >
                          {e}
                        </option>
                      )
                    })}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Confirm Password</label>
                  <input
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="col-md-12 mt-4">
                  <button onClick={SignUser} className="btn btn-primary w-100">
                    Register
                  </button>
                </div>
                <div className="col-md-12">
                  <div className="text-muted bg-light rounded p-3 border small">
                    By clicking the &lsquo;Sign Up&lsquo; button, you confirm
                    that you accept our{' '}
                    <a href="#">Terms of use and Privacy Policy</a>.
                  </div>
                </div>
              </div>
              <hr className="text-muted" />
              <div className="text-center">
                Already have an account?{' '}
                <Link legacyBehavior href="/auth/login">
                  <a className="text-decoration-none fw-medium">Login</a>
                </Link>
              </div>
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

SignUp.getLayout = (page) => {
  return (
    <Layout simpleHeader hideAuth>
      {page}
    </Layout>
  )
}

export default SignUp
