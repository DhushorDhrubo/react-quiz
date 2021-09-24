import React from 'react'
import Nav from './Nav'
import '../styles/Layout.css'

function Layout({children}) {
    return (
        <>
            <Nav/>
            <main className='main'>
               <div className='container'>
                        {children}
              </div>
            </main>
        </>
    )
}

export default Layout
