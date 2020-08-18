import React, {useState} from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Title from './Title/Title';
import UserInput from './UserInput/UserInput';
import List from './List/List';

function App() {
  const [todo, setToDo] = useState(
    []
  );
  return (
    <>
      <NavBar />
      <Title />
      <UserInput myfunction={setToDo} todo={todo} />
      {
        todo.map((val,i) => {
          const str=`Task ${i}`;
          return <List id = {i} key={i} number={str} todo={val.subject} todos={todo} setTodo={setToDo} myfunction={setToDo}/>
        })
      }
    </>
  );
}

export default App;
