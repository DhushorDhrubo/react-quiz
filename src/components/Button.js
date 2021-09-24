import React from 'react'
import '../styles/Button.css'

function Button({className,children}) {
    return (
        <div className={`${className} button`}>
        {children}
      </div>
    )
}

export default Button
