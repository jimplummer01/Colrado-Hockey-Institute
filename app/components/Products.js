import React from 'react'

const Products = () => {
  return (
    <div className="singlePage">
      <div id="products">
        <div id="productsHeader">
          <h1>Colorado Hockey Institute Products</h1>
        </div>
        <div className='singlePageContent'>
          <p>Colorado Hockey Institute products help coaches stay organized, 
            and help with tracking and analyzing statistics and athletic performance. 
            The entire product line can be seen listed below.
          </p>
          <h2>Hockey Stats Tracker Premium</h2>
          <div className="productInfo">
              <div className="productText">
              <p>
              The Hockey Stats Tracker will help you track your hockey team and player 
              statistics including goals, assists, plus/minus, goaltender statistics, 
              power play and penalty kill statistics and much more. 
              Version 6 now includes support for Corsi, Fenwick, and other advanced 
              statistics, charts, and analytics. Requires Microsoft Excel 2016. 
              Learn more about the Hockey Stats Tracker by reading the full description 
              of what is included in the Hockey Stats Tracker. 
              </p>
              <p>Download the features overview.</p>
              <a>Buy the Stats Tracker Premium Edition now</a>
              <p className="excelDisclaimer">Microsoft Excel must be purchased separately.</p>
            </div>
            <div>
              <img src="images/HockeyStatsTrackerPremium.png" />
            </div>
          </div>
          <h2>Goalie Stats and Analytics</h2>
          <div className="productInfo">
              <div className="productText">
              <p>
              The Goalie Stats and Analytics product provides capabilities that have never been available until now for tracking and analyzing goaltender season performance. With this groundbreaking product you will able to analyze goalie performance from the perspective of shot location on the ice as well as save/goal location on the net. We have broken down the ice and the net into zones where you can visualize goalie save percentage, goals against, rebound control, shot distance, and more. Collection of stats is made easy with the stats collector built on Excel for the mobile devices and tablets, (such as the iPad). Read the full product description to learn more about the Goalie Stats and Analytics product.
              </p>
              <p>Download the Goalie Analytics features overview.</p>
              <a>Buy the Goalie Stats and Analytics now</a>
              <p className="excelDisclaimer">Microsoft Excel must be purchased separately.</p>
            </div>
            <div>
              <img src="images/GoalieStats.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products