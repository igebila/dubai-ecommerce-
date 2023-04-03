import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../../components/layout'
import axios from '../utils/axios'
import { useDispatch } from 'react-redux'
import { login } from '../../slices/userSlice'
import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [empty, setEmpty] = useState(false)
  const dispatch = useDispatch()

  const signIn = async () => {
    if (email && password) {
      await axios
        .post('/api/auth/login', {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data)
          dispatch(login(res.data))
          axios.defaults.headers.common['Authorization'] = res.data.token
          router.push({ pathname: '/account/profile' })
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    } else {
      setEmpty(true)
    }
  }
  const router = useRouter()
  return (
    <div className="container py-3">
      <div className="row my-4">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body px-4">
              <h4 className="card-title fw-bold mt-2 mb-4">Sign In</h4>
              <form className="row g-2">
                <div className="col-md-12">
                  <label className="form-label">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control"
                    placeholder="name@gmail.com"
                  />
                </div>
                <div className="col-md-12">
                  <label className="form-label">Password</label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control"
                  />
                </div>
                <div className="col-md-12">
                  <Link legacyBehavior href="/auth/forgot-password">
                    <a className="text-decoration-none">Forgot password?</a>
                  </Link>
                </div>
                <div className="col-md-12 mt-4">
                  <button
                    type="button"
                    className="btn btn-primary w-100"
                    onClick={signIn}
                  >
                    Login
                  </button>
                </div>
                {empty && (
                  <h6 style={{ textAlign: 'center', color: 'red' }}>
                    Must not be empty
                  </h6>
                )}
                <div className="col-md-12">
                  <div className="row g-2">
                    <div className="col">
                      <hr className="text-muted" />
                    </div>
                    <div className="col-auto align-self-center text-muted">
                      or continue with
                    </div>
                    <div className="col">
                      <hr className="text-muted" />
                    </div>
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="hstack gap-2 justify-content-center">
                    <button className="btn-facebook rounded-circle">
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </button>
                    <button className="btn-google rounded-circle">
                      <FontAwesomeIcon icon={['fab', 'google']} />
                    </button>
                    <button className="btn-apple rounded-circle">
                      <FontAwesomeIcon icon={['fab', 'apple']} />
                    </button>
                  </div>
                </div>
              </form>
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

// Login.getLayout = (page) => {
//   return (
//     <Layout simpleHeader hideAuth>
//       {page}
//     </Layout>
//   )
// }

export default Login
