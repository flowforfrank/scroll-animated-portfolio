import React, { useState } from 'react'

import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'


// import './App.css'

export const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Hero />
      <Projects />
      <Contact />
    </React.Fragment>
  )
}
