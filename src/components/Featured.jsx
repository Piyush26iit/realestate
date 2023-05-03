import React from 'react'
import { FeaturedCard } from './FeaturedCard'

export const Featured = () => {
  return (
    <>
        <section className="featured background">
            <div className="container">
            <div className="heading">
        <h1 style={{color:'#000'}}>Featured Property Types</h1>
        <p>Find all type proprties</p>
         </div>
            </div>
     <FeaturedCard/>
        </section>
    </>
  )
}
