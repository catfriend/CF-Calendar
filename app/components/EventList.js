import React, { PropTypes } from 'react'
import Event from './Event'

const EventList = ({ events, onEventClick }) =>
  <ul>
  {events.map((event) => {
    <Event
      key={event.id}
      {...event} //spread operator imports everything from event
      onClick={onEventClick}
    />
  })}
  </ul>

const propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
  }).isRequired).isRequired,
  onEventClick: PropTypes.func.isRequired
}

export default Object.assign(EventList, { propTypes })
