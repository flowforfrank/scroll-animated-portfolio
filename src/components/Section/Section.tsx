import React from 'react'

import './section.scss'

export type SectionProps = {
  title: string
  description: string
}

export const Section = ({ title, description }: SectionProps) => {
  return (
    <React.Fragment>
      <h2 className="section-title">{title}</h2>
      <p
        className="section-content"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </React.Fragment>
  )
}
