import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
import { Container, Form, Label, Input, Button, FormGroup } from 'reactstrap'

const TaskForm = ({ addTodo }) => {
  const [form, setForm] = useState({
    title: ''
  })

  const handleChange = event => {
    setForm({
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (form.title !== '' && form.title !== undefined) {
      addTodo(form)
      setForm({ title: '' })
    }
  }

  return (
    <Container className='p-4 text-center d-flex justify-content-center'>
      <Form onSubmit={handleSubmit} className='task-form'>
        <FormGroup>
          <Label htmlFor='title'>Título</Label>
          <Input 
            type='text' 
            name='title' 
            className='text-center' 
            value={form.title} 
            onChange={handleChange} 
          />
        </FormGroup>
        <Button type='submit' color='primary' size='sm'>Guardar tarea</Button>
      </Form>
    </Container>
  )
}

const mapDispatchToProps = {
  addTodo
}

export default connect(null, mapDispatchToProps)(TaskForm)