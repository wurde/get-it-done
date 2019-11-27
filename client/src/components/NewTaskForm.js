/**
 * Dependencies
 */

import React, { useState } from 'react';

/**
 * Define component
 */

function NewTaskForm(props) {
  const [task, setTask] = useState('');

  function addTask(e) {
    e.preventDefault();
    const updatedList = [...props.tasks, { description: task }];
    props.setTasks(updatedList);
    localStorage.setItem('tasks', JSON.stringify(updatedList));
    setTask('');
  }

  return (
    <li>
      <form action="post" onSubmit={addTask}>
        <input type="text" name="task" value={task} onChange={e => setTask(e.target.value)}></input>
        <button type="submit">Add</button>
      </form>
    </li>
  )
}

/**
 * Export component
 */

export default NewTaskForm;
