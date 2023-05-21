// Write your code here.
import './index.css'

const CardItem = props => {
  const {eachCard} = props
  const {title, description, imgUrl, className} = eachCard
  return (
    <li className={`cards ${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img className="card-imgs" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
