import { useEffect, useState, useRef } from 'react'

import { Button } from '../Button'
import { Section } from '../Section'

import { config } from '../../../config.ts'
import { interpolate, scrollTo } from '../../utils.ts'

import './projects.scss'

export const Projects = () => {
    const {
        projectsTitle,
        projectsDescription,
        projects,
        projectsCTA
    } = config
    
    const sectionRef = useRef<null | HTMLElement>(null)
    const [animation, setAnimation] = useState({
        heading: {
            opacity: 0,
            transform: 0
        },
        description: {
            opacity: 0,
            transform: 0
        },
        projects: Array(projects.length).fill({
            opacity: 0,
            transform: 0
        }),
        cta: {
            opacity: 0,
            transform: 0
        }
    })
            
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const top = window.scrollY - sectionRef.current!.offsetTop
            
            if (top <= 100) {
                const opacities = {
                    heading: interpolate(top, [-400, 0], [0, 1]),
                    description: interpolate(top, [-300, 0], [0, 1]),
                    projects: [
                        interpolate(top, [-600, -400], [0, 1]),
                        interpolate(top, [-400, -200], [0, 1]),
                        interpolate(top, [-200, 0], [0, 1]),
                        interpolate(top, [-600, -400], [0, 1]),
                        interpolate(top, [-400, -200], [0, 1]),
                        interpolate(top, [-200, 0], [0, 1])
                    ],
                    cta: interpolate(top, [-400, 0], [0, 1]),
                }
                
                const transforms = {
                    heading: interpolate(top, [-400, 0], [20, 0]),
                    description: interpolate(top, [-300, 0], [20, 0]),
                    projects: [
                        interpolate(top, [-600, -400], [30, 0]),
                        interpolate(top, [-400, -200], [30, 0]),
                        interpolate(top, [-200, 0], [30, 0]),
                        interpolate(top, [-600, -400], [30, 0]),
                        interpolate(top, [-400, -200], [30, 0]),
                        interpolate(top, [-200, 0], [30, 0])
                    ],
                    cta: interpolate(top, [-400, 0], [50, 0]),
                }
                
                setAnimation({
                    heading: {
                        opacity: opacities.heading,
                        transform: transforms.heading
                    },
                    description: {
                        opacity: opacities.description,
                        transform: transforms.description
                    },
                    projects: Array(projects.length).fill({
                        opacity: 0,
                        transform: 0
                    }).map((_, index) => ({
                        opacity: opacities.projects[index],
                        transform: transforms.projects[index]
                    })),
                    cta: {
                        opacity: opacities.cta,
                        transform: transforms.cta
                    }
                })
            }
        })
    }, [projects])

    return (
        <section className="project-section" ref={sectionRef}>
            <div className="container">
                <Section
                    title={projectsTitle}
                    description={projectsDescription}
                    headingStyles={{
                        opacity: animation.heading.opacity,
                        transform: `translateX(-${animation.heading.transform}px)`
                    }}
                    contentStyles={{
                        opacity: animation.description.opacity,
                        transform: `translateX(-${animation.description.transform}px)`
                    }}
                />
                <ul className="projects">
                    {projects.map((project, index) => (
                        <li
                            key={index}
                            style={{
                                background: `linear-gradient(315deg, #000 0%, ${project.background} 100%)`,
                                opacity: animation.projects[index].opacity,
                                transform: `translateY(${animation.projects[index].transform}px)`
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
                    styles={{
                        opacity: animation.cta.opacity,
                        transform: `translateY(${animation.cta.transform}px)`
                    }}
                >
                    {projectsCTA}
                </Button>
            </div>
        </section>
    )
}
