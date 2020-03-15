import React from 'react';
import axios from 'axios';
import './App.css';

import Button from './components/DarkModeButton';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        //console.log(res.data);
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div className="App">
        <h1>sprint</h1>
        <Button />
        <div className='card-container'>
          {this.state.data.map((e) => {
            return (
              <Card key={e.id} name={e.name} country={e.country} searches={e.searches}/>
            )
          })}
        </div>
        
      </div>
    );
  }
}

export default App;