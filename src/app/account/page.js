"use client";

import styles from "./account.module.css"
import Image from 'next/image'
import { useContext, useState } from 'react';
import { UserContext } from "@/context/userContext";
import Form from "@/components/form/form";

export default function page() {
    const [edit, setEdit] = useState(false);
    const {user} = useContext(UserContext);

    if(!user) {
        return <main className={styles.main}>
            <div className={styles.container}>
                <h1 className=" text-white">PLEASE LOGIN</h1>
            </div>
        </main>
    }

    function toggle() {
        setEdit(prev=>!prev);
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.imgc}>
                    <Image className={styles.img} src={user?.image} height={100} width={100} alt='profile image'/>
                </div>
                <div className={styles.card}>    
                    <Form/>
                </div>
            </div>
        </main>
    )
}
