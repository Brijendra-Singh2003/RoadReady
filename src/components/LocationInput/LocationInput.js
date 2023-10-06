"use client";

import {useEffect, useState} from 'react'
import { BiCurrentLocation } from "react-icons/bi"
import styles from "./LocationInput.module.css"

export default function LocationInput() {
    const [location, setLocation] = useState({
        latitude: 0,
        longitude: 0
    });

    function getLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const userLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                };
                setLocation(userLocation);
            });
        } else {
        console.log("Geolocation is not available in this browser.");
        }
    }
  return (
    <label htmlFor="location" className={styles.location}>
        <BiCurrentLocation onClick={getLocation} className={styles.pin} />
        <input id="location" type="text" placeholder="search location" value={location.latitude} className={styles.locInput} />
    </label>
  )
}