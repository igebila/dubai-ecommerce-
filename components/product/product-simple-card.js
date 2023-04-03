import Link from 'next/link'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

function ProductSimpleCard({
  price,
  name,
  image,
  brand,
  rating,
  description,
  category,
  id
}) {
  return (
    <div className="card h-100 border-0 shadow-sm">
      <div className="ratio ratio-1x1">
        <img
          className="card-img-top"
          src={image}
          alt="Product image."
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="card-body">
        <Link  legacyBehavior href={`/product/${id}`}>
          <a className="mb-1 text-dark text-decoration-none stretched-link">
            {name}
          </a>
        </Link>

        <Rater total={5} rating={rating} />

        <h6 className="mb-0 fw-semibold mt-2">{price}</h6>
      </div>
    </div>
  )
}

export default ProductSimpleCard
