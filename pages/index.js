import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from './utils/axios'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import ProductSimpleCard from '../components/product/product-simple-card'

export default function Home() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios
      .get('/api/product/all')
      .then((res) => {
        console.log(res.data)
        setProducts(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [])
  const list = [1, 2, 3, 4, 5, 6, 7, 8]
  return (
    <div>
      <div className="container py-3">
        <div className="row mb-4">
          <div className="col-12">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              transitionTime={500}
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                  return (
                    <li className="d-inline-block m-2 text-light">
                      <FontAwesomeIcon icon={['fas', 'circle']} size="xs" />
                    </li>
                  )
                }
                return (
                  <li
                    className="d-inline-block m-2 text-light text-opacity-50"
                    onClick={onClickHandler}
                    key={index}
                    role="button"
                    tabIndex={0}
                  >
                    <FontAwesomeIcon icon={['fas', 'circle']} size="xs" />
                  </li>
                )
              }}
            >
              <div className="ratio ratio-21x9">
                <img
                  src="https://dutchuncles.in/wp-content/uploads/2021/04/current-government-schemes-and-programs-Ecommerce-01.jpg"
                  alt="Cover image"
                  className="rounded"
                />
              </div>
              <div className="ratio ratio-21x9">
                <img
                  src="https://img.freepik.com/free-vector/online-shopping-horizontal-banner-illustration_1284-57252.jpg"
                  alt="Cover image"
                  className="rounded"
                />
              </div>
              <div className="ratio ratio-21x9">
                <img
                  src="https://www.creatopy.com/blog/wp-content/uploads/2018/05/animations-e-commerce.png"
                  alt="Cover image"
                  className="rounded"
                />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <figure className="figure card-body mb-0">
                <div
                  className="bg-secondary rounded-circle d-flex mb-2"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon
                    icon={['fas', 'money-bill-alt']}
                    size="lg"
                    className="text-primary m-auto"
                  />
                </div>
                <h5 className="mb-1 fw-bold">Reasonable Price</h5>
                <figcaption className="figure-caption text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <figure className="figure card-body mb-0">
                <div
                  className="bg-secondary rounded-circle d-flex mb-2"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon
                    icon={['fas', 'headset']}
                    size="lg"
                    className="text-primary m-auto"
                  />
                </div>
                <h5 className="mb-1 fw-bold">Customer Support 24/7</h5>
                <figcaption className="figure-caption text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0 shadow-sm">
              <figure className="figure card-body mb-0">
                <div
                  className="bg-secondary rounded-circle d-flex mb-2"
                  style={{ width: 50, height: 50 }}
                >
                  <FontAwesomeIcon
                    icon={['fas', 'truck']}
                    size="lg"
                    className="text-primary m-auto"
                  />
                </div>
                <h5 className="mb-1 fw-bold">Fast Delivery</h5>
                <figcaption className="figure-caption text-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <h4 className="mb-3 fw-semibold">New products</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">
          {products.map((product) => {
            return (
              <div className="col" key={product.productID}>
                <ProductSimpleCard
                  id={product.productID}
                  name={product.name}
                  image={product.image}
                  brand={product.brand}
                  price={product.price}
                  rating={product.rating}
                  description={product.description}
                  category={product.category}

                />
              </div>
            )
          })}

        </div>
      </div>
      <div className="d-flex flex-column align-items-center bg-primary py-5">
        <span className="mb-4 text-light text-opacity-75">
          Subscribe for promotions and wonderful events
        </span>
        <form className="d-flex">
          <div className="me-2">
            <input
              type="email"
              className="form-control"
              placeholder="Your email"
              size="24"
            />
          </div>
          <button className="btn btn-warning">
            <FontAwesomeIcon icon={["fas", "envelope"]} className="me-2" />
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
