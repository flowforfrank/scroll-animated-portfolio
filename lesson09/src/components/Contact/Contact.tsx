import React, { useRef } from 'react'

import { Button } from '@components/Button'
import { Section } from '@components/Section'

import { config } from '@config'
import { isValidEmail } from '@utils'

import './contact.scss'

export const Contact = () => {
    const emailRef = useRef<null | HTMLInputElement>(null)
    const messageRef = useRef<null | HTMLTextAreaElement>(null)
    
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
        const email = emailRef.current!.value
        const message = messageRef.current!.value
        
        event.preventDefault()
        
        emailRef.current!.classList.remove('error')
        messageRef.current!.classList.remove('error')
        
        if (!isValidEmail(email)) {
            emailRef.current!.classList.add('error')
        }
        
        if (!message) {
            messageRef.current!.classList.add('error')
        }
        
        if (isValidEmail(email) && message) {
            console.log('Send message', email, message)
        }
    }

    return (
        <section className="contact">
            <div className="container">
                <Section
                    title={contactTitle}
                    description={contactDescription}
                />

                <form>
                    <input
                        type="email"
                        placeholder="Your email"
                        ref={emailRef}
                    />
                    <textarea
                        placeholder="Your message"
                        ref={messageRef}
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

                <div className="made">
                    Made with
                    <img
                        src="/assets/icons/heart.svg"
                        alt="Heart"
                        width="25"
                        height="20"
                        loading="lazy"
                        className="heart"
                    />
                </div>
            </div>
        </section>
    )
}
