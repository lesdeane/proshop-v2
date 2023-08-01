import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

import { Fragment } from "react";

const Rating2 = ( { value, text } ) => {

  let x = 1

  return (
    <div className='rating'>

      {(() => {

          const options = [];

          while (x <= value) {
            options.push(<span><FaStar /></span>)
            x++
          }

          if ((value % 1) > 0) {
            options.push(<span><FaStarHalfAlt /></span>)
            x++
          }

          x--

          while (x < 5) {
            options.push(<span><FaRegStar /></span>)
            x++
          }

          options.push(<span className="rating-text">{ text && text }</span>)

          return options;

        })()}

    </div>
  )

}
export default Rating2