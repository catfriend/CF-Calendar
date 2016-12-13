import React, { PropTypes } from 'react'

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

// const propTypes = {
//   events: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onEventClick: PropTypes.func.isRequired
// }

export default Object.assign(EventList, propTypes)
