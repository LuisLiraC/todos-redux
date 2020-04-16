import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import Task from './Task'

const TaskList = ({ todos }) => {

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

const mapStateToProps = ({ todos }) => ({ todos })

export default connect(mapStateToProps)(TaskList)