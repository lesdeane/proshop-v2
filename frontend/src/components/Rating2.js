import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating2 = ( { value, item, text } ) => {

  let x = 1

  return (
    <div className='rating' key={Math.random()}>

      {(() => {

          const options = [];

          while (x <= value) {
            options.push(<span key={Math.random()}><FaStar /></span>)
            x++
          }

          if ((value % 1) > 0) {
            options.push(<span key={Math.random()}><FaStarHalfAlt /></span>)
            x++
          }

          x--

          while (x < 5) {
            options.push(<span key={Math.random()}><FaRegStar /></span>)
            x++
          }

          options.push(<span className="rating-text" key={Math.random()}>{ text && text }</span>)

          return options;

        })()}

    </div>
  )

}
export default Rating2