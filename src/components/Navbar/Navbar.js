"use client";

import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import Image from 'next/image';
import Link from 'next/link';
import { useSession, SessionProvider, signIn } from 'next-auth/react';
import { options } from '@/app/api/auth/[...nextauth]/options';
import { useContext } from 'react';
import { UserContext } from '@/context/userContext';
import { signOut } from "next-auth/react"


function Page() {

    const [isOpen, setIsOpen] = useState();
    const {data, status} = useSession(options);
    const {user, setUser} = useContext(UserContext);

    useEffect(()=>{
        setUser(data?.user);
    }, [status]);

    function toggle() {
        setIsOpen(prevState => !prevState);
    }

    return (
        <nav className='nav'>
            <Link href="/" className="logo"><Image src="/assets/ROAD.png" height={100} width={400} /></Link>
            <div className="right">

                {
                    user ? (
                        <a className="login" onClick={()=>signOut('google')}>Log Out</a>
                    ) : (
                    <>
                        <a className="login" onClick={()=>signIn('google')}>Log In</a>
                        <Link href="/api/auth/signin" className="login">Sign Up</Link>
                    </>
                    )
                }
    
                {isOpen ?
                    <>
                        <svg className="svg" onClick={toggle} width="16" height="16" viewBox="0 0 24 24" fill="none" color="white"><path d="m21.1 5.1-2.2-2.2-6.9 7-6.9-7-2.2 2.2 7 6.9-7 6.9 2.2 2.2 6.9-7 6.9 7 2.2-2.2-7-6.9 7-6.9Z" fill="currentColor"></path></svg>

                        <div className="backdrop" onClick={toggle}></div>

                        <div className='dropdown' onClick={toggle}>
                            <li className=' hover:bg-slate-300'><a href='#'>Home</a></li>
                            <li className=' hover:bg-slate-300'><a href='#'>Home</a></li>
                            <li className=' hover:bg-slate-300'><a href='/account'>Account</a></li>
                        </div>
                    </>
                    :
                    <svg className="svg" onClick={toggle} width="16" height="16" viewBox="0 0 24 24" fill="none" color="white"><path d="M2 6h20v3H2V6Z" fill="currentColor"></path>,<path d="M2 15h20v3H2v-3Z" fill="currentColor"></path></svg>}
            </div>
        </nav>
    )
}

export default function Navbar() {
    return <SessionProvider><Page/></SessionProvider>
}