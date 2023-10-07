import styles from "./page.module.css";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdCarRepair, MdLocationPin } from "react-icons/md"
import { FaHandsHelping } from "react-icons/fa"
import LocationInput from "@/components/LocationInput/LocationInput";
import Content from "@/components/content/content";
import Footer from "@/components/content/footer/footer";
// import {  } from "react-icons"

export default function Home() {
    return (
        <>
        <main className={styles.main}>
            <LocationInput />
            <Content />
        </main>
        <Footer/>
        </>
    );
}
