import { useState } from 'react'

import { Button } from '../Button/index.ts'

import { config } from '../../../config.ts'
import './hero.scss'

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const {
    title,
    subTitle,
    navigation,
    heroCTA
  } = config

  const scroll = (index: number) => {
    document
      .querySelectorAll('section')[index]
      .scrollIntoView({ behavior: 'smooth' })

    setMenuOpen(false)
  }

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <section className="hero">
      <img
        src="/assets/img/logo.svg"
        alt="logo"
        width="75"
        height="30"
        className="logo"
      />
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <strong>{subTitle}</strong>

      <div
        className={menuOpen ? 'hamburger close' : 'hamburger'}
        onClick={toggleMenu}
      >
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
        <span className="slice"></span>
      </div>
      <ul className={menuOpen ? 'menu visible' : 'menu'}>
        {navigation.map((link, index) => (
          <li
            className="menu-item"
            key={index}
            onClick={() => scroll(index + 1)}
          >
            {link}
          </li>
        ))}
      </ul>
      <Button onClick={() => scroll(1)}>{heroCTA}</Button>
    </section>
  )
}
