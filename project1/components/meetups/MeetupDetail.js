import React from 'react'
import classes from './MeetupDetail.module.css'

const MeetupDetail = (details) => {

  return (
    <section className={classes.detail}>
        <img src={details.image} alt={details.title}/>
        <h1>{details.title}</h1>
        <address>{details.title}</address>
        <p>{details.description}</p>
    </section>
  )
}

export default MeetupDetail