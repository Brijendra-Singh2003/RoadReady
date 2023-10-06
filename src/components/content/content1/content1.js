"use client"

import { MdOutlineLocationOn } from "react-icons/md";
import "./content1.css"



import React from 'react'

export default function Content1() {
    var myarray = [["Vasundara Fuel station", "Bhubaneswar", "5 km", "15 min"], ["Reliance Oil", "Cuttack", "15 km", "37 min"], ["Vasundara Fuel station", "Bhubaneswar", "5 km", "15 min"], ["Reliance Oil", "Cuttack", "15 km", "37 min"], ["Vasundara Fuel station", "Bhubaneswar", "5 km", "15 min"], ["Reliance Oil", "Cuttack", "15 km", "37 min"], ["Vasundara Fuel station", "Bhubaneswar", "5 km", "15 min"], ["Reliance Oil", "Cuttack", "15 km", "37 min"], ["Vasundara Fuel station", "Bhubaneswar", "5 km", "15 min"], ["Reliance Oil", "Cuttack", "15 km", "37 min"], ["Vasundara Fuel station", "Bhubaneswar", "5 km", "15 min"], ["Reliance Oil", "Cuttack", "15 km", "37 min"], ["Vasundara Fuel station", "Bhubaneswar", "5 km", "15 min"], ["Reliance Oil", "Cuttack", "15 km", "37 min"]];
    return (
        <div className="main">
            <div className="content">
                {
                    myarray.map((e) => {
                        return (
                            <>
                                <div className="content-child">
                                    <div className="content-child-name">{e[0]}</div>
                                    <span className="content-child-icon"></span>
                                    <span className="content-child-address"><MdOutlineLocationOn />{e[1]}</span>
                                    <span className="content-child-distance">{e[2]}</span>
                                    <span className="content-child-time">{e[3]}</span>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <img className="content-image" src="/assets/map.jpg" alt="404" />
        </div>
    )
}
