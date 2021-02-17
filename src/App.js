import react from 'react';
import './App.css';
import {Cardlist} from './component/card-list/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'
class App extends react.Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      SearchField :''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters: users}));
  }
  render(){
    const monsters =this.state.monsters;
    const SearchField = this.state.SearchField;
    const filtermonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase()))
    return( 
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monster' handelchange={e=>this.setState({SearchField: e.target.value})}/>
      <Cardlist monsters={filtermonsters} />
    </div>
        )
  }
}

export default App;
