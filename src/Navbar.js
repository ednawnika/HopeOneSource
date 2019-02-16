import React, { Component } from 'react'
import { BrowserRouter as Link } from 'react-router-dom'


//NOT IN USE
function Navbar () = (
  
    return (

      <div>
        <h4>
          <Link to='/'>Home</Link>
        </h4>
        <h4>
          <Link to='/about'>The Team</Link>
        </h4>
        <h4>
          <Link to='/getinvolved'>Get Involved</Link>
        </h4>
        <h4>
          <Link to='/sponsors'>Our Sponsors</Link>
        </h4>
        <h4>
          <Link to='/updates'>News & Updates</Link>
        </h4>
      </div>
    )
  }

export default Navbar
