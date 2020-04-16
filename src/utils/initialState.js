let initialState

if (window.localStorage.getItem('todos') !== null) {
  initialState = {
    todos: JSON.parse(window.localStorage.getItem('todos'))
  }
} else {
  initialState = {
    todos: []
  }
}

export default initialState