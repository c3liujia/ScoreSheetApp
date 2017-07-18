import React from "react";
import TeamStat from "./TeamStat.js";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      quarter: 1
    };
    this.incQuarter = this.incQuarter.bind(this);
  }

  incQuarter(increment) {
      var currentQuarter = this.state.quarter;
      currentQuarter += increment;
      if (currentQuarter === 5){
          currentQuarter = 4;
      }
      else if (currentQuarter === 0){
          currentQuarter = 1;
      }
      console.log("changing quarter to ", currentQuarter);
      this.setState({quarter:currentQuarter});
  }


  render() {
    return (
      <div id="sheet">
        <div id="score-section">
          <div id="logo">
            Logo here
          </div>
          <TeamStat section="Team A" teamName="Mumba" quarter={this.state.quarter}/>
          <TeamStat section="Team B" teamName="Silver Knights Basketballllll Cluubbbbbbbbbbbbb"
                    quarter={this.state.quarter}/>
        </div>
        <div id="info-section">
          <div id="LogoImage">
            <h1>LOGO IMAGE HERE</h1>
          </div>
          <div id="Host">
            <div class="line-form flexed-row">
              <p>Date: </p>
              <input type="text" class="input-line" />
            </div>
            <div class="line-form flexed-row">
              <p>Host: </p>
              <input type="text" class="input-line" />
            </div>
            <div class="line-form flexed-row">
              <p>City:  </p>
              <input type="text" class="input-line" />
            </div>
            <div class="line-form flexed-row">
              <p>Gym: </p>
              <input type="text" class="input-line" />
            </div>
          </div>
            <div id="Group">
                <div class="line-form flexed-row">
                    <p>Group: </p>
                    <input type="text" class="input-line" />
                </div>
            </div>
        </div>
          <div id="setQuarter" class="flexed-row">
              <div class="flex-column">
                  <p>Quarter</p>
                  <h2>{this.state.quarter}</h2>
              </div>
              <div class="flex-column">
                  <form>
                      <button type="button" onClick={()=>this.incQuarter(1)}>+</button>
                  </form>
                  <form>
                    <button type="button" onClick={()=>this.incQuarter(-1)}>-</button>
                  </form>
              </div>
          </div>
      </div>
    );
  }
}
