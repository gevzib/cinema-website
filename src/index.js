import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {Clock} from './Clock';
import Person from './Person';
import Form from './Form'
import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      cinema: 'A new cinema',
      location: 'A new location',
      film: 'A new film',
      date: '2024-02-02',    
      date2: '2024-02-03', 
      date3: '2024-02-04' ,
      date4: '2024-02-05' ,
      date5: '2024-02-06' ,
      date6: '2024-02-07' ,
      date7: '2024-02-08' 
    };
  }

  render() {
    return (
      <div><br />
        <Form cinema={this.state.cinema} location={this.state.location} film={this.state.film} date={(this.state.date)} 
        date2={(this.state.date2)} date3={(this.state.date3)} date4={(this.state.date4)} date5={(this.state.date5)}
        date6={(this.state.date6)} date7={(this.state.date7)} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
