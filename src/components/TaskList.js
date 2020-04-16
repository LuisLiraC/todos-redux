import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'reactstrap'
import Task from './Task'

const TaskList = () => {
  const todos = useSelector(state => state.todos)

  return (
    <Container className='text-center'>
      {
        todos.map(todo => (
          <Task key={todo.id} {...todo} />          
        ))
      }
    </Container>
  )
}

export default TaskList