import styles from "./page.module.css";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdCarRepair, MdLocationPin } from "react-icons/md"
import { FaHandsHelping } from "react-icons/fa"
import LocationInput from "@/components/LocationInput/LocationInput";
// import {  } from "react-icons"

export default function Home() {
    return (
        <main className={styles.main}>
            <LocationInput/>
            <div className={styles.wraper}>
                <button className={styles.options}>
                    <BsFillFuelPumpFill className={styles.icon+" "+styles.fuellogo} />
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
            <div>
                
            </div>
        </main>
    );
}
