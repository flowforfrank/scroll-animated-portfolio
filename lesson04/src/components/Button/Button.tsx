import React from 'react'

import './button.scss'

export type ButtonProps = {
    children: React.ReactNode
    onClick: React.MouseEventHandler<HTMLButtonElement>
    className?: string
}

export const Button = ({
    children,
    onClick,
    className
}: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    )
}
