import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../utils/axios'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import ProductRating from '../../components/product-rating'
import ProductSimpleHorizontal from '../../components/product/product-simple-horizontal'
import { addToBasket } from '../../slices/basketSlice'
import { useDispatch } from 'react-redux'

function ProductDetail() {
  const dispatch =  useDispatch()
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  const [data, setData] = useState({})
  const [relateds, setRelateds] = useState([])
  useMemo(() => {
    if (id) {
      axios
        .get(`api/product/find/${id}`)
        .then((res) => {
          console.log(res.data)
          setData(res.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
      axios
        .get(`api/product/related/${id}`)
        .then((res) => {
          const firstFive = res.data.slice(0, 5)

          setRelateds(firstFive)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  }, [id])
  console.log(relateds)

  const images = [2, 4, 6, 8, 1]

  return (
    <div className="vstack">
      <div className="bg-secondary">
        <div className="container">
          <div className="row py-4 px-2">
            <nav aria-label="breadcrumb col-12">
              <ol className="breadcrumb mb-1">
                <li className="breadcrumb-item">
                  <a href="#">All Categories</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Electronics</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {data.name}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-white mb-4">
        <div className="container py-4">
          <div className="row gy-3 gx-4">
            <div className="col-lg-5">
              <div className="row">
                <div className="col-12">
                  <div className="ratio ratio-1x1">
                    <img
                      className="rounded"
                      src={data.image}
                      width={300}
                      height={300}
                      alt="Product image."
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-3 d-none d-lg-block">
                <div className="col-12 d-flex justify-content-center">
                  {images.map((e) => {
                    return (
                      <div
                        key={e}
                        style={{ width: 60 }}
                        className="me-2 ratio ratio-1x1"
                      >
                        <img
                          className="rounded"
                          src={`https://source.unsplash.com/random/80x80?random=${Math.floor(
                            Math.random() * 50,
                          )}`}
                          width={60}
                          height={60}
                          alt="Product image."
                          key={e}
                        />
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="d-flex">
                <div className="d-inline h2 mb-0 fw-semibold me-3">
                  {data.name}
                </div>
                <div className="ms-auto">
                  <button
                    className="btn btn-outline-secondary text-primary border"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Add to wish list"
                  >
                    <FontAwesomeIcon icon={['far', 'heart']} size="lg" />
                  </button>
                </div>
              </div>

              <div className="vstack">
                <div className="d-flex mb-3 gap-2">
                  <ProductRating />
                  <span className="text-muted small">150 orders</span>
                  <span className="text-success small">
                    <FontAwesomeIcon icon={['fas', 'check-circle']} />
                    &nbsp;{data.inStock ? 'In Stock' : 'Out Stock'}
                  </span>
                </div>
                <h4 className="fw-semibold">{data.price} birr</h4>
                <p className="fw-light">{data.description}</p>
                <dl className="row mb-0">
                  <dt className="col-sm-3 fw-semibold">Brand#</dt>
                  <dd className="col-sm-9">{data.brand}</dd>
                  <dt className="col-sm-3 fw-semibold">Category</dt>
                  <dd className="col-sm-9">{data.category}</dd>
                  <dt className="col-sm-3 fw-semibold">Reviews</dt>
                  <dd className="col-sm-9">{data.numReviews}</dd>
                </dl>
                <hr className="text-muted" />
                <dl className="row gy-2 mb-4">
                  <dt className="col-12 fw-semibold">Color</dt>
                  <dd className="col-12">
                    <div className="hstack gap-2">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="color1"
                          id="c1"
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="c1"
                        >
                          Red
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="color2"
                          id="c2"
                          checked
                          onChange={() => {}}
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="c2"
                        >
                          Green
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="color3"
                          id="c3"
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="c3"
                        >
                          Blue
                        </label>
                      </div>
                    </div>
                  </dd>

                  <dt className="col-12 fw-semibold">Size</dt>
                  <dd className="col-12">
                    <div className="hstack gap-2">
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="size1"
                          id="s1"
                          checked
                          onChange={() => {}}
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="s1"
                        >
                          Small
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="size2"
                          id="s2"
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="s2"
                        >
                          Medium
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="size3"
                          id="s3"
                        />
                        <label
                          className="form-check-label fw-medium"
                          htmlFor="c3"
                        >
                          Large
                        </label>
                      </div>
                    </div>
                  </dd>
                </dl>

                <div className="d-flex">
                  <a
                    href="#"
                    className="btn btn-primary px-md-4 col col-md-auto me-2"
                  >
                    Buy now
                  </a>
                  <button
                    className="btn btn-outline-primary col col-md-auto"
                    onClick={() => {
                      const product = {
                        name: data.name,
                        id: data.productID,
                        image: data.image,
                        category: data.category,
                        price: data.price,
                        description: data.description,
                        rating: data.rating,
                      }
                      dispatch(addToBasket(product))
                    }}
                  >
                    <FontAwesomeIcon icon={['fas', 'cart-plus']} />
                    &nbsp;Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-3">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div
                className="px-3 d-flex border-bottom overflow-auto"
                style={{ height: 70 }}
              >
                <ul className="nav nav-pills my-auto flex-nowrap">
                  <li className="nav-item">
                    <a href="#" className="nav-link active" aria-current="true">
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Specifications
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <p>
                  Introducing our latest product: the Ultimate Wireless
                  Bluetooth Earbuds! Experience unparalleled freedom and sound
                  quality with our cutting-edge wireless earbuds. Whether you're
                  commuting, working out, or just lounging at home, our earbuds
                  offer the perfect balance of convenience, comfort, and
                  performance. Equipped with advanced Bluetooth 5.0 technology,
                  our earbuds connect seamlessly to your smartphone or other
                  devices. The built-in noise-cancelling technology ensures
                  crystal-clear sound, while the ergonomic design and multiple
                  ear tip sizes provide a comfortable fit for all-day wear. In
                  addition to the superior sound quality and comfort, our
                  earbuds boast an impressive battery life of up to 8 hours on a
                  single charge. Plus, the included charging case provides an
                  additional 24 hours of battery life, ensuring you never run
                  out of juice when you need it most. Order now and experience
                  the ultimate in wireless earbud technology! {data.description}
                </p>
              </div>
              <div className="card-footer py-3">
                <small>
                  <FontAwesomeIcon
                    icon={['fas', 'truck']}
                    className="text-success me-2"
                  />
                  Delivery within 1-2 weeks
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card border-0 shadow-sm">
              <div className="px-3 d-flex border-bottom" style={{ height: 70 }}>
                <h5 className="my-auto fw-semibold">Related products</h5>
              </div>
              <div className="card-body">
                {relateds.map((related) => (
                  <ProductSimpleHorizontal
                    id={related.productID}
                    key={related.productID}
                    name={related.name}
                    price={related.price}
                    category={related.category}
                    rating={related.rating}
                    description={related.description}
                    image={related.image}
                  />
                ))}
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

export default ProductDetail
