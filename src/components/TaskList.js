import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteTodo, changeState, updateTask } from '../redux/actions'
import { Container, Button, Input, FormGroup } from 'reactstrap'

const TaskList = ({ todos, deleteTodo, changeState, updateTask }) => {
  const [edit, setEdit] = useState(false)
  const [form, setForm] = useState({
    title: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSave = () => {
    updateTask(form)
    handleClose()
  }

  const handleClose = () => {
    setEdit(!edit)
    setForm({ title: '' })
  }

  const handleEdit = id => {
    const [todo] = todos.filter(todo => todo.id === id)
    setForm({ ...todo })
    setEdit(!edit)
  }

  return (
    <Container className='text-center'>
      {
        edit ? (
          <>
            <p>Editando:</p>
            <FormGroup>
              <Input
                type='text'
                name='title'
                className='text-center'
                value={form.title}
                onChange={handleChange}
              />
            </FormGroup>
            <Button
              size='sm'
              outline
              type='button'
              color='primary'
              className='mr-3'
              onClick={handleSave}
            >Guardar cambios</Button>
            <Button
              size='sm'
              outline
              type='button'
              color='danger'
              onClick={handleClose}
            >Cerrar</Button>
          </>
        ) : (
            <>
              {
                todos.map(todo => (
                  <div key={todo.id} className='p-4'>
                    <p className={todo.isCompleted ? 'isCompleted' : 'task'}>{todo.title}</p>
                    <Button
                      size='sm'
                      outline
                      type='button'
                      color='primary'
                      className='mr-3'
                      onClick={() => handleEdit(todo.id)}
                    >Editar</Button>
                    <Button
                      size='sm'
                      outline
                      type='button'
                      color={todo.isCompleted ? 'secondary' : 'success'}
                      className='mr-3'
                      onClick={() => changeState(todo.id)}
                    >&#10003;</Button>
                    <Button
                      size='sm'
                      outline type='button'
                      color='danger'
                      onClick={() => deleteTodo(todo.id)}
                    >X</Button>
                  </div>
                ))
              }
            </>
          )
      }
    </Container>
  )
}


const mapStateToProps = ({ todos }) => ({ todos })
const mapDispatchToProps = {
  deleteTodo,
  changeState,
  updateTask
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)