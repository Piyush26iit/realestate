import React from 'react'
import "./searchbar.css"
import {AiOutlineSearch} from "react-icons/ai"

export const Searchbar = () => {
  return (
    <section className="searchbar">
   
    <div className="container">
    <div className="heading">
        <h1>Search Your Next Home</h1>
        <p>Find new & featured property located in your local city</p>
    </div>
        <form className="flex">
            <div className="box">
                <span>City/Street</span>
                <input type="text" placeholder='Location' />
            </div>
            <div className="box">
                <span>Property Type</span>
                <input type="text" placeholder='Property Type' />
            </div>
            <div className="box">
                <span>Price Range</span>
                <input type="text" placeholder='Price Range' />
            </div>
            <div className="box">
                <h4>Advance Filter</h4>
            </div>
            <button className="btn">
            <AiOutlineSearch fontSize='20px'/>
            </button>
        </form>
    </div>
    </section>
  )
}
