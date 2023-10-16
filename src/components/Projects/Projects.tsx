import React from 'react'
import { config } from '../../../config.ts'

import { Button } from '../Button/index.ts'
import { Section } from '../Section'

import './projects.scss'

export const Projects = () => {
  const {
    projectsTitle,
    projectsDescription,
    projects,
    projectsCTA
  } = config

  const scroll = () => {
      document
        .querySelector('.contact')!
        .scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="project-section">
      <Section
        title={projectsTitle}
        description={projectsDescription}
      />

      <ul className="projects">
        {projects.map((project, index) => (
          <li key={index} style={{
            background: `linear-gradient(315deg, #000 0%, ${project.background} 100%)`
          }}>
            <a href={project.url}>
              <img
                src={`/assets/icons/${project.icon}.svg`}
                alt={project.icon}
                width="50"
                height="50"
                loading="lazy"
              />

              <b>{project.title}</b>
              <span style={{ color: project.color }}>
                {project.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <Button onClick={scroll} className="project-cta">
        {projectsCTA}
      </Button>
    </section>
  )
}
