import axios from '../utils/axios'
import AccountMenu from '../../components/account-menu'
import CurrentOrderCard from '../../components/account/current-order-card'
import Layout from '../../components/layout'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../slices/userSlice'

function CurrentOrders() {
  const user = useSelector(selectUser)

  const [orderDetails, setOrderDetails] = useState([])
  useEffect(() => {
    axios.get('/api/users/order').then((res) => {
      setOrderDetails(res.data)
      console.log(res.data)
    })
  }, [])

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
                  Current Orders
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-lg-3">
            <AccountMenu current="current-orders" />
          </div>
          <div className="col-lg-9">
            {orderDetails.map((order) => (
              <CurrentOrderCard
                key={order.orderID}
                street={order.address.street}
                city={order.address.city}
                region={order.address.region}
                total={order.total}
                status={order.status}
                date={order.createdAt}
                items={order.items}
              />
            ))}

            {/* <CurrentOrderCard id={10002} /> */}
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

CurrentOrders.getLayout = (page) => {
  return <Layout simpleHeader>{page}</Layout>
}

export default CurrentOrders
