import Card from '../card/card.component'
import './card-list.styles.css'

const CardList = (props) => {
  return (
    <div className='card__list'>
      {props.list.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default CardList
