import React, { PropTypes } from 'react'

const Event = ({name, description, location, time}) =>
  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <p>{location}</p>
    <p>Event Start <time datetime="{time.start}">{time.start}</time>.</p>
    <p>Event End <time datetime="{time.end}">{time.end}</time>.</p>
  </div>

  const propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    location: React.PropTypes.string.isRequired,
    time: React.PropTypes.string.isRequired
  }

export default Object.assign(Event, { propTypes })
