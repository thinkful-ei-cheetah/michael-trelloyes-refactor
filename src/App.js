import React from 'react';
import './App.css';
import store from './store';
import List from './Components/List/List';

export default class App extends React.Component {
  state = {
    lists: store.lists,
    allCards: store.allCards
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
                cards={list.cardIds.map(id => this.state.allCards[id])}
              />
            })}
          </div>
        </header>
      </main>
    );
  }
}
