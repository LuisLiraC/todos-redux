import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_STATE,
  UPDATE_TODO
} from '../types/actionTypes'

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload
})

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload
})

export const changeState = (payload) => ({
  type: CHANGE_STATE,
  payload
})

export const updateTask = (payload) => ({
  type: UPDATE_TODO,
  payload
})