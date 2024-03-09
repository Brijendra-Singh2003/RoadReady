"use client";

import React from 'react'
import {signIn} from "next-auth/react"

export default function Button({children}) {
  return (
    <button onClick={()=>signIn('google')}>{children}</button>
  )
}
