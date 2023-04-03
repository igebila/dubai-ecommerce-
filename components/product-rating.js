import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

function ProductRating({ num }) {
  console.log(num)
  const [ratings, setRatings] = useState([{},{}])
  console.log(ratings)

  return (
    <div className="hstack">
      {ratings.map((rating) => (
        <FontAwesomeIcon
          icon={['fas', 'star']}
          size="sm"
          className="text-warning"
        />
      ))}
      {/* 
      <FontAwesomeIcon
        icon={['fas', 'star']}
        size="sm"
        className="text-warning"
      />
      <FontAwesomeIcon
        icon={['fas', 'star']}
        size="sm"
        className="text-warning"
      />
      <FontAwesomeIcon
        icon={['fas', 'star']}
        size="sm"
        className="text-warning"
      />
      <FontAwesomeIcon
        icon={['fas', 'star-half-alt']}
        size="sm"
        className="text-warning"
      /> */}
    </div>
  )
}

export default ProductRating
