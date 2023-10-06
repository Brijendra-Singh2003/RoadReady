"use client";

import { BsFillFuelPumpFill } from "react-icons/bs";
import styles from "./content.module.css"
import { MdCarRepair } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import Content1 from "./content1/content1";
import { useState } from "react";


export default function Content() {
  const arr = [styles._L,styles._M, styles._R];
  const [a, setA] = useState(0);

  return (
    <>
      <div className={styles.wraper}>
        <button onClick={()=>setA(0)} className={styles.options }>
          <BsFillFuelPumpFill className={styles.icon + " " + styles.fuellogo} />
          <h2>FUEL</h2>
        </button>
        <button onClick={()=>setA(1)} className={styles.options}>
          <MdCarRepair className={styles.icon} />
          <h2>REPAIR</h2>
        </button>
        <button onClick={()=>setA(2)} className={styles.options}>
          <FaHandsHelping className={styles.icon} />
          <h2>REPAIR</h2>
        </button>
      </div>
      <div className={styles.bar+" "+arr[a]}></div>
      <Content1/>
    </>
  )
}