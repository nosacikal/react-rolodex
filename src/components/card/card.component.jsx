import './card.styles.css'
const Card = (props) => {
  return (
    <div className='card__container'>
      <img
        src={`https://robohash.org/${props.item.id}?set=set2&size=180x180`}
        alt=''
      />
      <h2>{props.item.name}</h2>
      <p>{props.item.email}</p>
    </div>
  )
}

export default Card
