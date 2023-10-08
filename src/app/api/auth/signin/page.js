import React from 'react';
import "./index.css";
import { getServerSession } from 'next-auth';
import { options } from '../[...nextauth]/options';
import { redirect } from 'next/navigation';
import {Sora} from 'next/font/google'
import Button from './Button';
import Image from 'next/image';

const lilitaOne=Sora({ subsets: ['latin'], weight: "800" });

export default async function page() {

  const session = await getServerSession(options);
  const user = session?.user || null;
  if (user) {
    redirect('/');
  }

  return (
    <main className='signin'>
      <div className="User _card relative">
          <h1>User</h1>
          <div className='imgc'>
            <Image className='limg' src="/assets/usr.png" height={400} width={400} />
          </div>
          <Button>Sign In</Button>
      </div>
      <div className="mechanic _card">
          <h1>Mechanic</h1>
          <div className='imgc'>
            <Image className='limg' src="/assets/mech.png" height={400} width={400} />
          </div>
          <Button>Sign In</Button>
      </div>
    </main>
  )
}