import React from 'react'
import '../styles/Form.css'
function Form({children,className,...rest}) {
    return (
        <>
             <form className={`${className} form`} action="#" {...rest}>
             {children}
             </form>
        </>
    )
}

export default Form
