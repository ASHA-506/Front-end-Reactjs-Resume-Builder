import React from 'react'
import './AboutBuilder.css'
import aboutImage from '../assets/about-builder.png'

function AboutBuilder() {
  return (
    <section className="about-builder">

      <h2>What's AI rBuilder</h2>

      <div className="about-content">

        {/* LEFT SIDE */}

        <div className="about-text">

          <p>
            An AI rBuilder is a web application that helps users create
            professional resumes quickly and efficiently using artificial
            intelligence. Traditional resume creation can be time-consuming
            and difficult, especially for freshers who may not know the
            correct format or keywords required for modern recruitment
            systems.
          </p>

          <p>
            The system can suggest job-specific keywords, professional
            summaries, and skill recommendations to make the resume more
            effective and ATS (Applicant Tracking System) friendly.
          </p>

          <p>
            The main goal of the AI rBuilder is to simplify the resume
            creation process and help job seekers build professional,
            well-structured resumes in a few minutes. Users can edit
            content, preview their resume, and download it in formats
            such as PDF.
          </p>

          <p>
            This type of system is especially useful for students and
            fresh graduates who want to create high-quality resumes that
            increase their chances of getting hired.
          </p>

        </div>


        {/* RIGHT SIDE */}

        <div className="about-image">

          <img
            src={aboutImage}
            alt="AI Resume Builder"
          />

        </div>

      </div>

    </section>
  )
}

export default AboutBuilder