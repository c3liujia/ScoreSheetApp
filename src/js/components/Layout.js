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
            <img src="media/logo.png" alt="Organization logo"/>
          </div>
          <TeamStat section="Team A" teamName="" quarter={this.state.quarter}/>
            <div id="empty-space"/>
          <TeamStat section="Team B" teamName="" quarter={this.state.quarter}/>
        </div>
        <div id="info-section">
          <div id="Logo-image">
              <img src="media/logo.png" alt="Organization logo"/>
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
              <p>Location: </p>
              <input type="text" class="input-line" />
            </div>
          </div>
            <div id="Group">
                <div class="line-form flexed-row">
                    <p>Group: </p>
                    <input type="text" class="input-line" />
                </div>
            </div>
            <div id="Officials">
                <div class="line-form">
                    <p>Official #1: </p>
                    <div class="flexed-row">
                        <span>Name:</span><input type="text" class="input-line" />
                    </div>
                    <div class="flexed-row">
                        <span>No.:</span><input type="text" class="input-line" />
                    </div>
                </div>
                <div class="line-form">
                    <p>Official #2: </p>
                    <div class="flexed-row">
                        <span>Name:</span><input type="text" class="input-line" />
                    </div>
                    <div class="flexed-row">
                        <span>No.:</span><input type="text" class="input-line" />
                    </div>
                </div>
                <div class="line-form">
                    <p>Official #3: </p>
                    <div class="flexed-row">
                        <span>Name:</span><input type="text" class="input-line" />
                    </div>
                    <div class="flexed-row">
                        <span>No.:</span><input type="text" class="input-line" />
                    </div>
                </div>
            </div>
            <div id="Notes">
                <div class="line-form">
                    <h3>Notes:</h3>
                    <textarea autoFocus rows="8"></textarea>
                </div>
            </div>
        </div>
          <div id="setQuarter" class="flexed-row no-print">
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
