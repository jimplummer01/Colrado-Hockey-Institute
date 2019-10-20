import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Products from './Products'

const Root = () => {
  return (
    <BrowserRouter>
    <div className="layout">
      <div id="main">
        <div id="mainHeader">
        <h1>COLORADO HOCKEY INSTITUTE</h1>
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
          <Link>Articles</Link>
          <Link>Blog</Link>
          <Link>Videos</Link>
          <Link>Downloads</Link>
          <Link>About Us</Link>
          <Link>Contact</Link>
        </nav> 
        <img src='images/header.png' id="headerImg"/> 
        <h1 id="slogan">Organizing coaches for success</h1>
      </div>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Products} />      
    </div>
    </BrowserRouter>
  )
}

export default Root
