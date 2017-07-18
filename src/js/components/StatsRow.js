import React from "react";
import FoulCount from "./FoulCount.js";

export default class StatsRow extends React.Component {
  constructor() {
    super();
    this.state = {
        teamId: "Team A",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div class="stats-row flexed-row">
          <div class="name-col top-row flexed-row">
              <div class="team-name-box">
                  <h1>{this.state.teamId}</h1>
                  <p>{this.props.teamName}</p>
              </div>
              <div>
                  <b>Color:</b>
                  <p>White</p>
              </div>
          </div>
          <div class="jersey-number-col top-row">
              <b>No.</b>
          </div>
          <div class="participation-col top-row">
              <p>Equal Participation</p>
          </div>
          <div class="foul-col top-row">
              <p>Fouls</p>
          </div>
          <div class="quarter-col top-row">
              <p>Quarter 1</p>
              <div class="quarter-fouls">Fouls: <FoulCount foulCount = {this.props.q1Fouls}/></div>
              quarter: {this.props.q1Fouls}
          </div>
          <div class="quarter-col top-row">
              <p>Quarter 2</p>
              <div class="quarter-fouls">Fouls: <FoulCount foulCount = {this.props.q2Fouls}/></div>
          </div>
          <div class="quarter-col top-row">
              <p>Quarter 3</p>
              <div class="quarter-fouls">Fouls: <FoulCount foulCount = {this.props.q3Fouls}/></div>
          </div>
          <div class="quarter-col top-row">
              <p>Quarter 4</p>
              <div class="quarter-fouls">Fouls: <FoulCount foulCount = {this.props.q4Fouls}/></div>
          </div>
          <div class="total-col top-row">
              <p>Total</p>
          </div>
      </div>
    );
  }
}
