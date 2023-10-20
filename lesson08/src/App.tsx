import React from 'react'

import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export const App = () => {
    return (
        <React.Fragment>
            <Hero />
            <Projects />
            <Contact />
        </React.Fragment>
    )
}
