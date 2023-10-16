import React from 'react'

import './section.scss'

export type SectionProps = {
  title: string
  description: string,
  headingStyles?: React.CSSProperties,
  contentStyles?: React.CSSProperties
}

export const Section = ({
  title,
  description,
  headingStyles,
  contentStyles
}: SectionProps) => {
  return (
    <React.Fragment>
      <h2
        className="section-title"
        style={headingStyles}
      >
        {title}
      </h2>
      <p
        className="section-content"
        dangerouslySetInnerHTML={{ __html: description }}
        style={contentStyles}
      />
    </React.Fragment>
  )
}
