"use client";

import React, { useState } from 'react'
import "./Navbar.css"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState();

    function toggle() {
        setIsOpen(prevState => !prevState);
    }

    return (
        <>
            <div className='nav'>
                <div className="logo">RR</div>
                <div className="right">

                    <div className="login">Log In</div>
                    <div className="login">Sign In</div>
        
                    {isOpen ?
                        <>
                            <svg className="svg" onClick={toggle} width="16" height="16" viewBox="0 0 24 24" fill="none" color="white"><path d="m21.1 5.1-2.2-2.2-6.9 7-6.9-7-2.2 2.2 7 6.9-7 6.9 2.2 2.2 6.9-7 6.9 7 2.2-2.2-7-6.9 7-6.9Z" fill="currentColor"></path></svg>

                            <div className="backdrop" onClick={toggle}></div>

                            <div className='dropdown' onClick={toggle}>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>Home</a></li>
                            </div>
                        </>
                        :
                        <svg className="svg" onClick={toggle} width="16" height="16" viewBox="0 0 24 24" fill="none" color="white"><path d="M2 6h20v3H2V6Z" fill="currentColor"></path>,<path d="M2 15h20v3H2v-3Z" fill="currentColor"></path></svg>}
                </div>
            </div>
        </>
    )
}
