import './App.css';
import Header from './Components/Header'
import Todos from './Components/Todos';
import { Footer } from './Components/Footer';
import { Add } from './Components/Add';
import { About } from './Components/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todoslist") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todoslist"));
  }

  const addTodo = (title, description) => {
    let sno;
    if (todoslist.length === 0) {
      sno = 0
    } else {
      sno = todoslist[todoslist.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: description
    }
    settodoslist([...todoslist, myTodo]);
  }

  const onDelete = (todo) => {
    settodoslist(todoslist.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }
  const [todoslist, settodoslist] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todoslist", JSON.stringify(todoslist));
  }, [todoslist]) 
  return (
    <>
      <Router>
        <Header title="ToDos' List" searchBar={false} />
        <Routes>
          <Route path="/" element={<Todos todos={todoslist} onDelete={onDelete}/>}/>
          <Route path="/addtodo" element={<Add addTodo={addTodo}/>}/> 
          <Route path="/about" element={<About />}/>
        </Routes>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;