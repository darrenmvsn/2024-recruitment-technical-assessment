import React from 'react'
import "./Header.css"
const Header = ({clickLogo}) => {
  return (
    <>
    <img alt="landing page graphic" fetchpriority="high" width="1000" height="500" decoding="async" data-nimg="1" style={{color:'transparent', width:'100%', height:'auto'}} src="https://unilectives.devsoc.app/_next/static/media/navbar.473c44fb.svg"/>
    <div className="container mx-44  text-justify">
        
        <h3 >DevSoc presents</h3>
        <h1 className={`mt-5 justify-center font-bold md:text-7xl text-4xl ${!clickLogo && 'text-unilectives-blue'}`}>
          unilectives.
        </h1>
        <h3 className='mt-5 font-bold'>Your one-stop for UNSW course and elective reviews.</h3>
    </div>
    </>
  )
  
}

export default Header