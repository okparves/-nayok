import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nameData, setData] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> setData(data))
  }, []);
  // const nayok = [{name:'Sakib', age: 44},{name:"Jasim", age: 122},{name:"Manna", age: 100},{name:"Omar sani", age:60},{name:"Dipjol", age: 70}];
  return (
    <div className="App">

      <AddMovie></AddMovie>

      {
        nameData.slice(0,5).map(nk => <Nayok name={nk.name} age={nk.email}></Nayok>)
      }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>  
      </header>
    </div>
  );
}

function AddMovie(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return(
    <div>
      <button onClick = {handleClick}>Add Movies</button>
      <p>Movies added = {count}</p>
      <Movies count = {count}></Movies>
    </div>
  )
}

function Movies(props){
  return(
    <div>
      <p>Movies count = {props.count}</p>
    </div>
  )
}


function Nayok(props){
  const nayokStyle = {
    border: '1px solid red',
    backgroundColor: 'tomato',
    margin: '20px'
  }
  return(
    <div style={nayokStyle}>
      <h1>Ami {props.name}</h1>
      <h4>Email:{props.age}</h4>
    </div>
  )
}

export default App;
