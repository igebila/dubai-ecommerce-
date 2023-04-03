import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../slices/basketSlice'

function ProductGridCard({
  price,
  name,
  image,
  brand,
  rating,
  description,
  category,
  id,
}) {
  const dispatch = useDispatch()
  console.log(name)
  let percentOff
  let offPrice = `${price}Ks`

  // if (off && off > 0) {
  //   percentOff = (
  //     <div
  //       className="badge bg-dark opacity-75 py-2 text-white position-absolute"
  //       style={{ top: '0.5rem', right: '0.5rem' }}
  //     >
  //       {off}% OFF
  //     </div>
  //   )

  //   offPrice = (
  //     <>
  //       {/* {price - (off * price) / 100}Ks&nbsp; */}
  //       <del className="text-muted small fw-normal">{price}Ks</del>
  //     </>
  //   )
  // }
  return (
    <div className="card h-100 border-0 shadow-sm">
      <Link legacyBehavior href={`/product/${id}`}>
        <a>
          <div className="ratio ratio-1x1">
            <img
              className="card-img-top "
              src={image}
              alt="Product image."
              style={{ objectFit: 'cover' }}
            />
          </div>
          {percentOff}
        </a>
      </Link>
      <div className="card-body">
        <div className="vstack gap-2">
          <Link legacyBehavior href="/product/1">
            <a className="text-dark text-decoration-none">{name}</a>
          </Link>

          <h6 className="fw-semibold">{offPrice}</h6>

          <div className="hstack gap-2">
            <button className="btn btn-secondary text-primary flex-grow-1 d-md-block d-lg-none">
              <FontAwesomeIcon icon={['fas', 'cart-plus']} />
              &nbsp;Add to card
            </button>
            <button className="btn btn-outline-secondary text-primary border d-md-block d-lg-none">
              <FontAwesomeIcon icon={['far', 'heart']} />
            </button>

            <button
              onClick={() => {
                const product = {
                  name,
                  id,
                  image,
                  category,
                  price,
                  description,
                  rating,
                }
                dispatch(addToBasket(product))
              }}
              className="btn btn-sm btn-secondary text-primary flex-grow-1 d-none d-lg-block"
            >
              <FontAwesomeIcon icon={['fas', 'cart-plus']} />
              &nbsp;Add to card
            </button>
            <button className="btn btn-sm btn-outline-secondary text-primary border d-none d-lg-block">
              <FontAwesomeIcon icon={['far', 'heart']} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGridCard
