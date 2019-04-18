import React from 'react';
import Card from '../Card/Card';
import './List.css';

export default class List extends React.Component {

  render() {
    return (
      <section className='List'>
        <header className='List-header'>
          {this.props.header}
        </header>
        <div className='List-cards'>
          {this.props.cards.map((card, i) => {
            return < Card
              title={card.title}
              content={card.content}
              key={i}
            />
          })}
        </div>
      </section>
    );
  }
};



