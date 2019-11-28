import React from 'react';
import '../style.css'

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.cards = props;
    console.log(this.cards.location.image)
    console.log(this.cards)
  }

  render() {
    
    return(
      <React.Fragment>
        <h1 className="title">{this.cards.match.params.pokemonName}</h1>
        <img image={this.cards.location.image} alt="" />
      </React.Fragment>
      
    )
  }
}

export default Pokemon;