// import logo from './logo.svg';
import './App.css';
import Header from './My_components/Header'
import {ToDos} from "./My_components/ToDos";
import {Footer} from "./My_components/Footer";
import {AddTodo} from "./My_components/AddTodo";
import React, {useState, useEffect} from "react";

{/*We used {} here beacuse we declared export "const" in the repective component */}

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
      initTodo =JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
   
    setToDos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  const addTodo = (title,desc)=>{
    console.log("I am adding this todo",title, desc);
    let sno;
    if (todos.length==0){
      sno=0;
    }
    else  {
      sno=todos[todos.length-1].sno +1;
    }
    const myTodo={
      title:title,
      desc:desc,
      sno:sno
    }
    //adding myTodo:
    setToDos([...todos, myTodo]);
    console.log(myTodo); 
    
  }
  // let todos= 
   const [todos, setToDos] = useState([initTodo]);
   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <Header  Title="My ToDo's List" /> {/* In app.js -> {props.title} */}

    <AddTodo addTodo={addTodo}/>
    <ToDos todos={todos} onDelete={onDelete}/>    {/* to pass the object created above i.e To_Dos, we created a variable 'todos' */}
    <Footer />
    </>
  );
}


export default App;
