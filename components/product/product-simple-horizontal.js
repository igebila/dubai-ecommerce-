import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../slices/basketSlice'

function ProductSimpleHorizontal({ id, image, price, name,description,rating,category }) {
  const dispatch = useDispatch()
  return (
    <div className="d-flex py-2">
      <div className="flex-shink-0" style={{ height: 80 }}>
        <img
          className="rounded"
          src={image}
          width={80}
          height={80}
          alt="Product image."
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="d-flex flex-column flex-grow-1 ms-3">
        <Link legacyBehavior href={`/product/${id}`}>
          <a className="text-dark text-decoration-none">{name}</a>
        </Link>
        <h6 className="mb-0 fw-semibold">{price} birr</h6>
        <div className="mt-auto">
          <button
            className="btn btn-sm btn-secondary text-primary rounded-3"
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
          >
            <FontAwesomeIcon icon={('fas', 'cart-plus')} />
            &nbsp;Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductSimpleHorizontal
