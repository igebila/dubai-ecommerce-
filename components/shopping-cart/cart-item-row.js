import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromBasket } from '../../slices/basketSlice'

function CartItemRow({
  id,
  image,
  category,
  price,
  description,
  rating,
  name,
}) {
  const dispatch = useDispatch()
  const getQtyInput = () => {
    const [input, setInput] = useState(1)

    return (
      <div className="input-group input-group-sm" style={{ width: 100 }}>
        <button
          onClick={() => {
            if (input > 0) {
              setInput(input - 1)
            }
          }}
          className="btn btn-outline-primary"
          type="button"
        >
          <FontAwesomeIcon icon={['fas', 'minus']} />
        </button>
        <input
          value={input}
          type="text"
          className="form-control text-center border-primary"
          placeholder=""
          size="2"
          min={0}
        />
        <button
          onClick={() => setInput(input + 1)}
          className="btn btn-outline-primary"
          type="button"
        >
          <FontAwesomeIcon icon={['fas', 'plus']} />
        </button>
      </div>
    )
  }

  return (
    <tr>
      <td scope="row">
        <div className="hstack">
          <img
            className="rounded"
            src={image}
            width={80}
            height={80}
            alt="Product image."
            style={{ objectFit: 'cover' }}
          />
          <div className="ms-3">
            <span className="h5">
              <Link legacyBehavior href={`/product/${id}`}>
                <a className="link-dark text-decoration-none">{name}</a>
              </Link>
            </span>
            <small className="d-flex text-muted" style={{ fontSize: 12 }}>
              <span>Medium</span>
              ,&nbsp;
              <span>White</span>
            </small>
          </div>
        </div>
      </td>
      <td>
        <h6 className="mb-0">{price}$</h6>
      </td>
      <td>
        <div className="d-flex">
          <div>{getQtyInput()}</div>
        </div>
      </td>
      <td>
        <button
          onClick={() => {
            dispatch(removeFromBasket({id}))
          }}
          className="btn btn-sm btn-danger"
          type="button"
        >
          <FontAwesomeIcon icon={['fas', 'trash-alt']} />
        </button>
      </td>
    </tr>
  )
}

export default CartItemRow
