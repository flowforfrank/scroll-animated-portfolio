import { useState } from 'react'

import { Button } from '@components/Button'

import { config } from '@config'
import { scrollTo,classNames } from '@utils'

import './hero.scss'

export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const {
    title,
    subTitle,
    navigation,
    heroCTA
  } = config

  const scroll = (index: number) => {
    scrollTo('section', index)
    setMenuOpen(false)
  }

  const toggleMenu = () => setMenuOpen(!menuOpen)

  setTimeout(() => {
    setMounted(true)
  }, 700)

  return (
    <section className="hero">
      <div className="container">
        <div className="logo">
          <img
            src="/assets/img/logo.svg"
            alt="logo"
            width="75"
            height="30"
          />
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <strong>{subTitle}</strong>

        <div
          className={classNames([
            'hamburger',
            menuOpen && 'close',
            !mounted && 'animate-in'
          ])}
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
        <div className="curtain" />
      </div>
    </section>
  )
}
