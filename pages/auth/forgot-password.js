import axios from '../utils/axios'
import Link from 'next/link'
import { useState } from 'react'
import Layout from '../../components/layout'

function ForgotPassword() {
  const [reset, setReset] = useState(false)
  const [code, setCode] = useState()
  const [newPassword, setNewPassword] = useState()
  const [password,setPassword] = useState()
  const [email, setEmail] = useState()

  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-3">Forgot Password</h4>
              <div className="row g-3">
                {reset ? (
                  <>
                    <div className="col-md-12">
                      <label className="form-label">Enter The code Code</label>
                      <input
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        type="number"
                        className="form-control"
                        placeholder="here..."
                      />
                    </div>
                    <div className="col-md-12 mt-3" id="Send">
                      <button
                        onClick={() => {
                          axios
                            .post(`/api/auth/confirm-code/${code}`)
                            .then((res) => {
                              console.log(res.data)
                              setCode(res.data)
                              setNewPassword(true)
                            })
                            .catch((err) => {
                              console.log(err.response.data)
                            })
                        }}
                        className="btn btn-primary w-100"
                      >
                        Verify
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-12">
                      <label className="form-label">Your email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        placeholder="name@gmail.com"
                      />
                    </div>
                    <div className="col-md-12 mt-3" id="Send">
                      <button
                        onClick={() => {
                          console.log(email)
                          axios
                            .post('/api/auth/forgot-password', {
                              email: email,
                            })
                            .then((res) => {
                              setReset(true)
                            })
                            .catch((e) => {
                              console.log(e.response.data)
                            })
                        }}
                        className="btn btn-primary w-100"
                      >
                        Send
                      </button>
                    </div>
                  </>
                )}
                {newPassword && (
                  <>
                    <div className="col-md-12">
                      <label className="form-label">New Password</label>
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="email"
                        className="form-control"
                        placeholder="name@gmail.com"
                      />
                    </div>
                    <div className="col-md-12 mt-3" id="Send">
                      <button
                        onClick={() => {
                          axios.post(`/api/auth/change-password/${code.code}`, {
                            newPassword: password,
                          }).then(res => {
                            console.log(res.data)
                            localStorage.setItem('ETOKEN',res.data.token)
                          })
                        }}
                        className="btn btn-primary w-100"
                      >
                        Reset
                      </button>
                    </div>
                  </>
                )}

                <div className="col-md-12">
                  <div className="border border-1 rounded bg-light px-3 py-2 small">
                    we will send a verification code to this email
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-muted my-0" />
            <div className="text-center p-3">
              Don&lsquo;t hanve an account?{' '}
              <Link legacyBehavior href="/auth/sign-up">
                <a className="text-decoration-none fw-medium">Register</a>
              </Link>
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

ForgotPassword.getLayout = (page) => {
  return (
    <Layout simpleHeader hideAuth>
      {page}
    </Layout>
  )
}

export default ForgotPassword
