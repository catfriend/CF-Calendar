import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import events from './Reducer_EventList'

const CalendarApp = combineReducers({
  form: formReducer,
  events
})

export default CalendarApp
