import React from "react";
import FoulCount from "./FoulCount.js";

export default class StatsRow extends React.Component {
  constructor() {
    super();

    this.changeTeamName = this.changeTeamName.bind(this);
    this.changeTeamColor = this.changeTeamColor.bind(this);
    this.state = {
        teamId: "Team A",
        teamNameObj : null,
        teamColorObj : null
    };

  }

  componentWillMount(){
      this.setState({teamNameObj : <div contentEditable="true"> {this.props.teamName} </div>})
      this.setState({teamColorObj : <input class="input-color" type="text" onKeyUp={this.changeTeamColor} defaultValue = {this.props.teamColor} />})
}

  changeTitle(title) {
    this.setState({title});
  }

  changeTeamName(e){
      var event = e;
      var target = e.target;
      if (event.key == 'Enter') {
          target.blur();
      }
      console.log("TODO: send team name change to parent component to ", target.value);
  }

  changeTeamColor(e){
      var event = e;
      var target = e.target;
      if (event.key == 'Enter') {
          target.blur();
      }
      console.log("TODO: send team color change to parent component to ", target.value);
    }

  render() {
    return (
      <div class="stats-row flexed-row">
          <div class="name-col top-row flexed-row">
              <div class="team-name-box">
                  <h1>{this.state.teamId}</h1>
                  {this.state.teamNameObj}
              </div>
              <div class="flex-column">
                  <div>
                      <b>Color:</b>
                  </div>
                  <div>
                      {this.state.teamColorObj}
                  </div>
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
              <div class="quarter-fouls"><span>Fouls: </span><FoulCount foulCount = {this.props.q1Fouls}/></div>
          </div>
          <div class="quarter-col top-row">
              <p>Quarter 2</p>
              <div class="quarter-fouls"><span>Fouls: </span><FoulCount foulCount = {this.props.q2Fouls}/></div>
          </div>
          <div class="quarter-col top-row">
              <p>Quarter 3</p>
              <div class="quarter-fouls"><span>Fouls: </span><FoulCount foulCount = {this.props.q3Fouls}/></div>
          </div>
          <div class="quarter-col top-row">
              <p>Quarter 4</p>
              <div class="quarter-fouls"><span>Fouls: </span><FoulCount foulCount = {this.props.q4Fouls}/></div>
          </div>
          <div class="total-col top-row">
              <p>Total</p>
          </div>
      </div>
    );
  }
}
