import React from 'react'

import './button.scss'

export type ButtonProps = {
    children: React.ReactNode
    onClick: React.MouseEventHandler<HTMLButtonElement>
    className?: string
    styles?: React.CSSProperties
}

export const Button = ({
    children,
    onClick,
    className,
    styles
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={className}
            style={styles}
        >
            {children}
        </button>
    )
}
