import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    return (
      <div className='Card'>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <button
          className="button" 
          onClick={() => this.props.deleteCard(this.props.listId, this.props.id)}>delete
        </button>
      </div>
    )
  }
}

