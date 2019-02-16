import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Topics from './Topics'
import GetInvolved from './GetInvolved'
import Sponsor from './Sponsor'
import Update from './Update'

class App extends Component {
  render () {
    return (

      <Router>

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

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/topics' component={Topics} />
          <Route path='/getinvolved' component={GetInvolved} />
          <Route path='/sponsors' component={Sponsor} />
          <Route path='/updates' component={Update} />
        </div>
      </Router>

    )
  }
}

export default App
