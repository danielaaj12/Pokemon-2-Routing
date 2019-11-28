import React from 'react';
import '.././style.css';
import { Link } from 'react-router-dom'

function ImageCard(props) {
  const pokemonName = props.card.name;
  return (
    <div className="card__container" key={props.card.id}>
      <h2 className="card__title"> {props.card.name} </h2>
      <Link to={{pathname:`/pokemon/${pokemonName}`, id: pokemonName}} className='card__image'>
        <img id={props.card.id} src={props.card.imageUrl} alt="Cartas Pokemon" />
      </Link>
    </div>

  )
}

export default ImageCard;