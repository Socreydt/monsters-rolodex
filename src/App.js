import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.componet';

import './App.css';

class App extends Component{
  // Constructor runs first before anything is called.
  // This is a life cycle method, like "OnInit"
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  

  // This is a life cycle method, it's like "OnLoad"
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}));
  }

  // This is a function of the class 'App'
  // We use functions, like this because we can use it other places. We can now call this function in different areas
  // Write code onces and reuse it somewhere else
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  // This is a life cycle method, like the ability to "Paint" the screen
  render(){

    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1> Monsters Rolodex </h1>
        
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}


export default App;
