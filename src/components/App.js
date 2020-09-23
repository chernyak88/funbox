import React from 'react';
import './App.scss';
import Card from './Card'

class App extends React.Component {

 constructor() {
		super();
		this.state = {
      title: 'Ты сегодня покормил кота?',
      data: [
        { name: 'с фуа-гра', description: 'Печень утки разварная с артишоками.', options: ['10 порций', 'мышь в подарок'], weight: '0,5' },
        { name: 'с рыбой', description: 'Головы щучьи с чесноком да свежайшая сёмгушка.', options: ['40 порций', '2 мыши в подарок'], weight: '2' },
        { name: 'с курой', description: 'Филе из цыплят с трюфелями в бульоне.', options: ['100 порций', '5 мышей в подарок', 'заказчик доволен'], weight: '5', disabled: true }
      ]
    };
  }

  render() {
    return (
      <div className="app">
          <h1>{this.state.title}</h1>
          <div className="cards">
            {this.state.data.map((entry,index) =>
              <Card  {...entry} key={index}/>
            )}
          </div>
      </div>
    )
  }

}

export default App;