import logo from './logo.svg';
import './App.css';
import {Input, Button} from './components/input';
import { useState } from 'react';
import TextField from '@mui/material/TextField';

function App() {

  const [text, setText] = useState("")
  const [list, setlist] = useState([])

  let add = () => {
    setlist([...list, text]);
    setText("")
    console.log(list)
  }
  let deleteAll = () => {
    setlist([]);
  }

  let deleteItem = (i) => {
    list.splice(i, 1);
    setlist([...list]);
    console.log(list)
  }

  let edit = (i) => {
    let a = prompt("text", list[i])
    list[i] = a
    setlist([...list]);
  }


  return (
    <div className="App-header">
      <header className='t_head'>
      <h1>Todo App</h1>
        <div>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{backgroundColor:"white"}}/>
          <Input value={text} onChange={(e) => setText(e.target.value)} label="Enter a value" />
          <Button className="addBtn" onClick={add} label="Add" />
          <Button onClick={deleteAll} label="Delete All" />
        </div>
        {/* <p>{text}</p> */}
        <ul style={{padding: '0px'}}>
          {list.map((e, i) => {
            return <li key={i} className='t_list'>{e}
            <span  className="t_listBtn">
            <Button onClick={() => edit(i)} label="Edit" />
            <Button onClick={() => deleteItem(i)} label="Delete" />
            </span>
            </li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;