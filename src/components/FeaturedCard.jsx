import React from 'react'
import "./featured.css"
import{BsFillHouseFill} from "react-icons/bs"
import {MdFamilyRestroom ,MdApartment} from "react-icons/md"
import {GiOfficeChair} from "react-icons/gi"
import{SiAndroidstudio} from "react-icons/si"

export const FeaturedCard = () => {


    const featured=[
        {
          cover: MdFamilyRestroom,
          name: "Family House",
          total: "122 Property",
        },
        {
          cover: BsFillHouseFill,
          name: "House & Villa",
          total: "155 Property",
        },
        {
          cover: MdApartment,
          name: "Apartment",
          total: "300 Property",
        },
        {
          cover: GiOfficeChair,
          name: "Office & Studio",
          total: "80 Property",
        },
        {
          cover: SiAndroidstudio,
          name: "Villa & Condo",
          total: "80 Property",
        },
      ]




  return (
    <>
       
        <div className="content grid5 mtop">
           {featured.map((items,index)=>(
            <div className="box" key={index}>
                <items.cover fontSize='45px'/>
                <h4>{items.name}</h4>
                <label>{items.total}</label>

            </div>
           ))}
        </div>
    </>
  )
}
