
import React from 'react'

const Task = ({tittle,description}) => {
  return (
    <div className="task">
<div>
    <p>{tittle}</p>
    <span>{description}</span>
</div>
<button>-</button>

    </div>
  )
}

export default Task