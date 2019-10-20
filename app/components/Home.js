import React from 'react'

const Home = () => {
  return (
    <div className="singlePage">
      <div id="home">
        <div id="homeHeader">
          <h1>Plan, track, analyze, improve...</h1>
        </div>
        <div className="singlePageContent">
          <div id='headerContent'>
            <p>Colorado Hockey Institute Organizing Coaches for Success: Our mission is to enable season and on-ice success for coaches and their teams by providing products and services that assist with organizing seasons, organizing teams, preparing for games, communicating with players, communicating with parents, planning practices, managing the bench, and by managing player performance and improvement. The Colorado Hockey Institute hockey stats tracker is one of our premier tools for coaches.</p>
            <div id="pageSections">
              <img src='/images/products.jpeg'/>
              <img src='/images/articles.jpeg'/>
              <img src='/images/about.jpeg'/>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Home