import React from 'react';
import Card from '../Card/Card';
import './List.css';

export default class List extends React.Component {
  addCard = () => {
    const cardId = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'][Math.ceil(Math.random() * 13)]
    this.props.addCard(this.props.id, cardId)
  }
  
  render() {
    return (
      <section className='List'>
        <header className='List-header'>
          {this.props.header}
        </header>
        <button onClick={this.addCard}>
          Add Random Card
        </button>
        <div className='List-cards'>
          {this.props.cards.map((card, i) => {
            return < Card
              title={card.title}
              content={card.content}
              key={card.id + '-' + i}
              deleteCard={this.props.deleteCard}
              listId={this.props.id}
              id={card.id}
            />
          })}
        </div>
      </section>
    );
  }
};



