"use client";

import { BsFillFuelPumpFill } from "react-icons/bs";
import styles from "./content.module.css"
import { MdCarRepair } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";

export default function Content() {
  const a = 5;

  return (
    <>
      <div className={styles.wraper}>
        <button className={styles.options}>
          <BsFillFuelPumpFill className={styles.icon + " " + styles.fuellogo} />
          <h2>FUEL</h2>
        </button>
        <button className={styles.options}>
          <MdCarRepair className={styles.icon} />
          <h2>REPAIR</h2>
        </button>
        <button className={styles.options}>
          <FaHandsHelping className={styles.icon} />
          <h2>REPAIR</h2>
        </button>
      </div>
      <div className="content">


      </div>
    </>
  )
}