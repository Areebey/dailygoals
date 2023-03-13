
import React from 'react'
import Task from './Task';




function Home() {
  return (
    <div className="container">
        <h1>Daily Goals</h1>

        <form>
            <input type="text" placeholder='Title' />
            <textarea  id="" placeholder='Description'></textarea>

            <button type="submit">ADD</button>
        </form>

        <Task/>
    </div>
  )
}

export default Home;