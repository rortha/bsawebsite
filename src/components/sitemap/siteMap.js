import React, { Component } from 'react';
import './siteMap.css';

const winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    mapArray = [
        0,((winWidth*-1)+(winWidth*.07)),((winWidth*-2)+(winWidth*.12)),((winWidth*-3)+(winWidth*.20))
    ];




//console.log(winHeight, winWidth, currentScreen, mapArray[currentScreen-1]);

class Sitemap extends Component {
    constructor(props) {
        super(props);
        this.state = {currentScreen: 4};
      }


    manualMap(e) {
        //currentScreen = this.
        if ((parseInt(e.currentTarget.dataset.id, 10)) !== this.state.currentScreen) {
            this.moveSection(e);
        } 


      };

    moveSection(e) {
        this.setState({
            currentScreen: (parseInt(e.currentTarget.dataset.id, 10))
          });
        const moveTo = (parseInt(e.currentTarget.dataset.id, 10));
        if(moveTo <= 4) {
            this.refs.map.style.top= 0;
            this.refs.map.style.left= mapArray[moveTo-1]+"px";
        }
        else{
            this.refs.map.style.top= ((-1*winHeight)+(winWidth*.10))+"px";
            this.refs.map.style.left= mapArray[moveTo-5]+"px";
         }
        

    };

  render() {
    return (
        <React.Fragment>
        <header>
        <div className="leftLinks navBlock">
              <div className="navLinks" data-id="1" onClick={this.manualMap.bind(this)}>about</div>
              <div className="navLinks" data-id="2" onClick={this.manualMap.bind(this)}>mumbo jumbo</div>
              <div className="navLinks" data-id="3" onClick={this.manualMap.bind(this)}>resources</div>
              <div className="navLinks" data-id="4" onClick={this.manualMap.bind(this)}>news</div>
        </div>
        <div className="navLogo navBlock"></div>
        <div className="rightLinks navBlock">
                <div className="navLinks" data-id="5" onClick={this.manualMap.bind(this)}>strategy</div>
                <div className="navLinks" data-id="6" onClick={this.manualMap.bind(this)}>contact</div>
                <div className="navLinks" data-id="7" onClick={this.manualMap.bind(this)}>join us</div>
                <div className="navLinks" data-id="8" onClick={this.manualMap.bind(this)}>donate</div>
          </div>
      </header>
      <div className="viewFinder" style={{"height" : winHeight, "width" : winWidth}}>
        <div className="mapHolder" ref="map" style={{"height" : (winHeight*2), "width" : (winWidth*4), "left":(mapArray[3]+"px")}}>
            <div className="mapResources mapBlocks wT" style={{"height" : winHeight, "width" : (winWidth*4)}}>
                <div className ="mapItem map1" data-id="1" onClick={this.manualMap.bind(this)} style={{"height" : winHeight, "width" : winWidth}}><h1>Who we are</h1></div>
                <div className ="mapItem map2 blkT" data-id="2" onClick={this.manualMap.bind(this)} style={{"height" : winHeight, "width" : winWidth}}><h1>Mumbo Jumbo</h1></div>
                <div className ="mapItem map3" data-id="3" onClick={this.manualMap.bind(this)} style={{"height" : winHeight, "width" : winWidth}}><h1>Resources & Guides</h1></div>
                <div className ="mapItem map4" data-id="4" onClick={this.manualMap.bind(this)} style={{"height" : winHeight, "width" : winWidth}}><h1>Features</h1></div>
            </div>
            <div className="mapActions mapBlocks wT" style={{"height" : winHeight, "width" : (winWidth*4)}}>
                <div className ="mapItem map5" data-id="5" onClick={this.manualMap.bind(this)} style={{"height" : winHeight, "width" : winWidth}}><h1>Our Strategy</h1></div>
                <div className ="mapItem map6 blkT" data-id="6" onClick={this.manualMap.bind(this)} style={{"height" : winHeight, "width" : winWidth}}><h1>Contact</h1></div>
                <div className ="mapItem map7" data-id="7" onClick={this.manualMap.bind(this)} style={{"height" : winHeight, "width" : winWidth}}><h1>Join Us</h1></div>
                <div className ="mapItem map8 blkT" data-id="8" onClick={this.manualMap.bind(this)} style={{"height" : winHeight, "width" : winWidth}}><h1>Donate</h1></div>
            </div>
            
        </div>

      </div>
      </React.Fragment>
    );

  }
}

export default Sitemap;
