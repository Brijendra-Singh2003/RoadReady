"use client";

import { BsFillFuelPumpFill } from "react-icons/bs";
import styles from "./content.module.css"
import { MdCarRepair } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import Content1 from "./content1/content1";
import { useState } from "react";
import Image from "next/image";
import Content2 from "./content2/content2";
import Content3 from "./content3/content3";


export default function Content() {
  const arr = [styles._L,styles._M, styles._R];
  const bgs = ["/assets/fuelBG.jpg", "/assets/repairBG.jpg"]
  const [a, setA] = useState(0);

  return (
    <>
      {a==0 && <Image src="/assets/fuelBG.jpg" height={1440} width={2560} className={styles.bg} />}
      {a==1 && <Image src="/assets/repairBG.jpg" height={1440} width={2560} className={styles.bg} />}
      {a==2 && <Image src="/assets/SelfHelpBG.jpeg" height={1440} width={2560} className={styles.bg} />}
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
          <h2>SUPPORT</h2>
        </button>
      </div>
      <div className={styles.bar+" "+arr[a]}></div>
      {a===0 && <Content1/>}
      {a===1 && <Content2/>}
      {a===2 && <Content3/>}

    </>
  )
}