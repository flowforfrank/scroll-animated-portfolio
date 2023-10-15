import React from 'react'
import { config } from '../../../config.ts'

import { Button } from '../Button/index.ts'
import { Section } from '../Section/index.ts'

import './contact.scss'

export const Contact = () => {
  const {
    contactTitle,
    contactDescription,
    socialLinks
  } = config

  const getSocialType = (link: string) => {
    const domain = link
      .split('.')[0]
      .replace('https://', '')

    return domain
  }

  const send = (event: React.MouseEvent) => {
    event.preventDefault()
    console.log('send message')
  }

  return (
    <section className="contact">
      <Section
        title={contactTitle}
        description={contactDescription}
      />

      <form>
        <input
          type="email"
          placeholder="Your email"
        />
        <textarea
          placeholder="Your message"
        />
        <Button onClick={send}>Send</Button>
      </form>

      <ul className="socials">
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link}>
              <img
                src={`/assets/icons/${getSocialType(link)}.svg`}
                alt={getSocialType(link)}
                width="35"
                height="35"
                loading="lazy"
              />
            </a>
          </li>
        ))}
      </ul>

      <div>
        Made with love
        <img
          src="/assets/icons/heart.svg"
          alt="Heart"
          width="25"
          height="20"
          loading="lazy"
          className="heart"
        />
      </div>
    </section>
  )
}
