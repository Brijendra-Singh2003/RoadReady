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
                    myarray.map((e, i) => {
                        return (
                            <div key={100+i} className="content-child">
                                <div className="content-child-name">{e[0]}</div>
                                <div className="content-child-detail">
                                <div className="content-child-address"><MdOutlineLocationOn />{e[1]}</div>
                                <div className="content-child-distance">{e[2]}</div>
                                <div className="content-child-time">{e[3]}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <img className="content-image" src="/assets/map.jpg" alt="404" />
        </div>
    )
}
