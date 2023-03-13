
import React, { useState } from 'react'
import Task from './Task';




function Home() {
   const [tasks,setTasks]=useState([]);
   const [tittle,setTittle]=useState("");
   const [description,setDescription]=useState("");
console.log(tittle,description)


const submitHandler = (e) =>{
      e.preventDefault();
        
      setTasks([...tasks , {tittle,description}]);
};
  return (
    <div className="container">
        <h1>Daily Goals</h1>

        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Title' value={tittle} 
              onChange={(e)=> setTittle (e.target.value)}/>

            <textarea  id="" placeholder='Description' value={description} 
              onChange={(e)=> setDescription(e.target.value)}></textarea>

            <button type="submit">ADD</button>
        </form>

        {tasks.map((item,index) => (
        <Task key={index} tittle={item.tittle} description={item.description} />
        ))}
            
    </div>
  )
}

export default Home;