import {
  ADD_TODO,
  DELETE_TODO,
  CHANGE_STATE,
  UPDATE_TODO
} from '../types/actionTypes'

export const reducer = (state, { type, payload }) => {

  switch (type) {
    case ADD_TODO:
      const id = state.todos.length === 0 
        ? 1 
        : state.todos[state.todos.length - 1].id + 1

      const afterAdd = [
        ...state.todos,
        {
          id,
          title: payload.title,
          isCompleted: false
        }
      ]

      saveStateInLocalStorage(afterAdd)

      return {
        ...state,
        todos: afterAdd
      }

    case DELETE_TODO:
      const afterDelete = state.todos.filter(todo => todo.id !== payload)
      saveStateInLocalStorage(afterDelete)

      return {
        ...state,
        todos: afterDelete
      }

    case CHANGE_STATE:

      const updatedStatus = state.todos.map(todo => {
        if (todo.id === payload) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })

      saveStateInLocalStorage(updatedStatus)

      return {
        ...state,
        todos: updatedStatus
      }
    
    case UPDATE_TODO:
      const updatedTitle = state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo = {
            ...todo,
            title: payload.title
          }
        }
        return todo
      })

      saveStateInLocalStorage(updatedTitle)

      return {
        ...state,
        todos: updatedTitle
      }

    default:
      return state
  }
}

function saveStateInLocalStorage (state) {
  window.localStorage.setItem('todos', JSON.stringify(state))
}