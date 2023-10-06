import React from 'react';
import "./index.css";
import { getServerSession } from 'next-auth';
import { options } from '../[...nextauth]/options';
import { redirect } from 'next/navigation';
import {Sora} from 'next/font/google'

const lilitaOne=Sora({ subsets: ['latin'], weight: "800" });

export default async function page() {

  const session = await getServerSession(options);
  const user = session?.user || null;
  if (user) {
    redirect('/');
  }

  return (
    <main>
    <div className="container">
        signin page
    </div>
    </main>
  )
}

export const metadata = {
  title: "Sign In - CSE Bootcamp 2.0",
  description: "sign in to cse bootcamp 2.0",
};