import React, { useState } from 'react'
import { deleteTodo, changeState, updateTask } from '../redux/actions'
import { FormGroup, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'

const Task = ({ id, title, isCompleted, deleteTodo, changeState, updateTask }) => {
  const [edit, setEdit] = useState()
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

  const handleEdit = task => {
    setForm(task)
    setEdit(!edit)
  }

  return edit ? (
    <>
      <p>Editando:</p>
      <FormGroup>
        <Input
          type='text'
          name='title'
          className='text-center edit-input'
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
      <div key={id} className='p-4'>
        <p className={isCompleted ? 'isCompleted' : 'task'}>{title}</p>
        <Button
          size='sm'
          outline
          type='button'
          color='primary'
          className='mr-3'
          onClick={() => handleEdit({ id, title, isCompleted })}
        >Editar</Button>
        <Button
          size='sm'
          outline
          type='button'
          color={isCompleted ? 'secondary' : 'success'}
          className='mr-3'
          onClick={() => changeState(id)}
        >&#10003;</Button>
        <Button
          size='sm'
          outline type='button'
          color='danger'
          onClick={() => deleteTodo(id)}
        >X</Button>
      </div>
    )
}

const mapDispatchToProps = {
  deleteTodo,
  changeState,
  updateTask
}

export default connect(null, mapDispatchToProps)(Task)