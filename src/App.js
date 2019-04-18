import React from 'react';
import './App.css';
import store from './store';
import List from './Components/List/List';

export default class App extends React.Component {
  state = {
    lists: store.lists,
    allCards: store.allCards
  }

  deleteCard = (listId, cardId) => {
    const updatedList = this.state.lists.find(list => list.id === listId)
    updatedList.cardIds = updatedList.cardIds.filter(id => id !== cardId)
    this.setState({
      lists: this.state.lists.map(list => list.id === listId ? updatedList : list)
    });
  }

  addCard = (listId, cardId) => {
    const updatedList = this.state.lists.find(list => list.id === listId)
    updatedList.cardIds = [...updatedList.cardIds, cardId]

    this.setState({
      lists: this.state.lists.map(list => list.id === listId ? updatedList : list)
    })
  }

  render() {
    return (
      <main className='App'>
        <header>
          <h1>Trelloyes</h1>
          <div className="App-list">
            {this.state.lists.map(list => {
              return < List
                key={list.id}
                header={list.header}
                cards={list.cardIds.map(id => {
                  const cardObj = this.state.allCards[id]
                  cardObj.id = id
                  return cardObj
                })}
                deleteCard={this.deleteCard}
                addCard={this.addCard}
                id={list.id}
              />
            })}
          </div>
        </header>
      </main>
    );
  }
}
