import React from 'react'
import './TeamBanner.css'
import teamImage from '../assets/team-banner.png'

function TeamBanner() {
  return (
    <section className="team-banner">

      <img
        src={teamImage}
        alt="Professional team working together"
      />

    </section>
  )
}

export default TeamBanner