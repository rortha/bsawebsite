import React, { Component } from 'react';
import './navigation.css';


class Navigation extends Component {
  navSelect(e){

    this.Sitemap.manualMap(e)
  }

  render() {
    return (
      <header>
        <Sitemap ref={Sitemap => this.Sitemap = Sitemap} />
        <div className="leftLinks navBlock">
              <div className="navLinks" data-id="1" onClick={this.navSelect.bind(this)}>about</div>
              <div className="navLinks" data-id="2" onClick={this.navSelect.bind(this)}>mumbo jumbo</div>
              <div className="navLinks" data-id="3" onClick={this.navSelect.bind(this)}>resources</div>
              <div className="navLinks" data-id="4" onClick={this.navSelect.bind(this)}>news</div>
        </div>
        <div className="navLogo navBlock"></div>
        <div className="rightLinks navBlock">
                <div className="navLinks" data-id="5" onClick={this.navSelect.bind(this)}>strategy</div>
                <div className="navLinks" data-id="6" onClick={this.navSelect.bind(this)}>contact</div>
                <div className="navLinks" data-id="7" onClick={this.navSelect.bind(this)}>join us</div>
                <div className="navLinks" data-id="8" onClick={this.navSelect.bind(this)}>donate</div>
          </div>
      </header>
    );
  }
}

export default Navigation;
