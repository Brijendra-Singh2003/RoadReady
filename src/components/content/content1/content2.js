"use client"

import { MdOutlineLocationOn } from "react-icons/md"
import "./content1.css"

import React from 'react'

export default function Content2() {
  var myarray=[["Bajaj Bike point","Bhubneswar","4.9km","12min"],["Hero repair point","Bhubneswar","7.9km","22min"],["Mechanic point","Cuttack","15.9km","32min"],["Bajaj Bike point","Bhubneswar","4.9km","12min"],["Hero repair point","Bhubneswar","7.9km","22min"],["Mechanic point","Cuttack","15.9km","32min"],["Bajaj Bike point","Bhubneswar","4.9km","12min"],["Hero repair point","Bhubneswar","7.9km","22min"],["Mechanic point","Cuttack","15.9km","32min"]]
  return (
    <>
    <div className="main">
    <div className="content">
                {
                    myarray.map((e, i) => {
                        return (
                            <div key={i} className="content-child">
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
    </>
  )
}
