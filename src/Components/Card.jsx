import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="card-img" />
      <h3>{props.text}</h3>
      <p>
        Learning web development is a gradual process that requires patience, consistency, and curiosity. 
      </p>
      <button>More</button>
    </div>
  )
}

export default Card
