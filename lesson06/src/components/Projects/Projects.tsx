import { Button } from '../Button'
import { Section } from '../Section'

import { config } from '../../../config.ts'
import { scrollTo } from '../../utils.ts'

import './projects.scss'

export const Projects = () => {
    const {
        projectsTitle,
        projectsDescription,
        projects,
        projectsCTA
    } = config

    return (
        <section className="project-section">
            <div className="container">
                <Section
                    title={projectsTitle}
                    description={projectsDescription}
                />
                <ul className="projects">
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            style={{
                                background: `linear-gradient(315deg, #000 0%, ${project.background} 100%)`
                            }}
                        >
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
                            <div className="texture" />
                        </li>
                    ))}
                </ul>
                <Button
                    onClick={() => scrollTo('.contact')}
                    className="project-cta"
                >
                    {projectsCTA}
                </Button>
            </div>
        </section>
    )
}
