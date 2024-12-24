import React, { useState } from 'react'
import "./Home.css"
import TodoInput from '../../components/todoInput';
import Todolist from '../../components/todolist';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const Home =()=> {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }

  const navigate = useNavigate();

  const singOutFun =()=>{
signOut(auth)
   .then(()=>{

    navigate("/login")

   })
  
  }

 



  return (
    <div className="main-container">


<div className='main-child-todo'></div>

      <div className="center-container">

      <button onClick ={singOutFun} className='btn-todo'>LogOut</button>
        <TodoInput addList={addList}/>

        <h1 className="app-heading">Task</h1>

        <hr style={{color:"black"}}/>

        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
  )
}

export default Home;