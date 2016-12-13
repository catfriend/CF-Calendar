const event = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        id: action.id,
        name: action.name,
        description: action.description,
        time: action.tags || [],
      }
    default:
      return state
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [
        ...state,
        event(undefined, action)
      ]
    default:
      return state
  }
}

export default events
