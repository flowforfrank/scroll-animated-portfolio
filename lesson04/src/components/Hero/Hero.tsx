import { Button } from '../Button'

import { config } from '../../../config.ts'

export const Hero = () => {
    const {
        title,
        subTitle,
        navigation,
        heroCTA
    } = config

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

                <div className="hamburger">
                    <span className="slice"></span>
                    <span className="slice"></span>
                    <span className="slice"></span>
                    <span className="slice"></span>
                </div>
                <ul className="menu">
                    {navigation.map((link, index) => (
                        <li className="menu-item" key={index}>
                            {link}
                        </li>
                    ))}
                </ul>
                <Button onClick={() => {}}>
                    {heroCTA}
                </Button>
            </div>
        </section>
    )
}
