import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../utils/axios'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import ProductGridCard from '../../components/product/product-grid-card'
import ReactPaginate from 'react-paginate'

function ExploreProducts() {
  const [products, setProducts] = useState([])
  const timesExecuted = useRef(0)
  const router = useRouter()
  const { search } = router.query
  console.log(search)
  useEffect(() => {
    if (timesExecuted.current < 2) {
      axios
        .get(`api/search?q=${search}`)
        .then((res) => {
          setProducts(res.data)
        })
        .catch((err) => {
          console.log(err.response.data)
        })
      console.log('Effect executed')
      timesExecuted.current += 1
    }
  }, [products, timesExecuted])
  const [pageNumber, setPageNumber] = useState(0)

  const itemsPerPage = 12
  const pagesVisited = pageNumber * itemsPerPage
  const displayItems = products
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((product) => {
      return (
        <div className="col">
          <ProductGridCard
            key={product.id}
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
    })

  const pageCount = Math.ceil(products.length / itemsPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }
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
                  Phones & Tablets
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-lg-3">
            <div className="accordion shadow-sm rounded">
              <div className="accordion-item border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                  >
                    Categories
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body pt-2">
                    <div className="vstack gap-2">
                      <a
                        href="#"
                        className="fw-medium link-dark text-decoration-none"
                      >
                        Phones & Tablets
                      </a>
                      <a
                        href="#"
                        className="fw-medium link-dark text-decoration-none"
                      >
                        Laptops & PC
                      </a>
                      <a
                        href="#"
                        className="fw-medium link-dark text-decoration-none"
                      >
                        Monitors
                      </a>
                      <a
                        href="#"
                        className="fw-medium link-dark text-decoration-none"
                      >
                        Game Controllers
                      </a>
                      <a
                        href="#"
                        className="fw-medium link-dark text-decoration-none"
                      >
                        Cables & Chargers
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-bottom">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                  >
                    Brands
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body pt-2">
                    <div className="vstack gap-2">
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">Apple</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          50
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">Samsung</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          100
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">Sony</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          30
                        </span>
                      </div>
                      <div className="d-flex gap-2">
                        <input type="checkbox" className="form-check-input" />
                        <label className="fw-medium flex-grow-1">AOC</label>
                        <span className="badge bg-default rounded-pill my-auto mb-0 text-dark">
                          60
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button fw-bold"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                  >
                    Price Range
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body pt-0">
                    <form className="row g-3">
                      <div className="col-6">
                        <label className="form-label">Min</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-6">
                        <label className="form-label">Max</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100">Apply</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hstack justify-content-between mb-3">
              <span className="text-dark">{products.length} Items found</span>
              <div className="btn-group" role="group">
                <button className="btn btn-outline-dark">
                  <FontAwesomeIcon icon={['fas', 'sort-amount-up']} />
                </button>
                <button className="btn btn-outline-dark">
                  <FontAwesomeIcon icon={['fas', 'th-list']} />
                </button>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
              {displayItems}
            </div>
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={'pagination'}
              previousClassName={'pagination__prev'}
              nextClassName={'pagination__next'}
              breakClassName={'pagination__break'}
              pageClassName={'pagination__page'}
              activeClassName={'pagination__page--active'}
            />

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreProducts
