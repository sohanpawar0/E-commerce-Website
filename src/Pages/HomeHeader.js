import React from 'react'
import classes from './HomeHeader.module.css'
export default function HomeHeader() {
  return (
    <>
    <section className={classes.banner}>
        <h2>The Generics</h2>        
       <div className={classes.bannerbutton}> 
         <button>Get Our Latest Album</button>
       </div>     
    </section>
   </>
  )
}
