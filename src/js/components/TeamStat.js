import React from "react";
import StatsRow from "./StatsRow.js";
import PlayerRow from "./PlayerRow.js";
import TimeOut from "./TimeOut.js";
import Signature from "./Signature.js";
import TeamScore from "./TeamScore.js";

export default class TeamStat extends React.Component {
  constructor() {
    super();
    this.state = {
        teamName: "Welcome",
        score: 0,
        q1Fouls: 0,
        q2Fouls: 0,
        q3Fouls: 0,
        q4Fouls: 0
    };
      this.addScore = this.addScore.bind(this);
      this.addFoul = this.addFoul.bind(this);
      this.changeTeamName = this.changeTeamName.bind(this);
  }

  changeTitle(title) {
    this.setState({title});
  }

  addScore(increment){
      var currentScore = this.state.score;
      currentScore += increment;
      this.setState({score:currentScore});
  }

  addFoul(increment, quarter){
      var currentFoul;
      if (quarter === 1){
          console.log("adding ",increment," to ", quarter);
          currentFoul = this.state.q1Fouls;
          currentFoul += increment;
          this.setState({q1Fouls:currentFoul});
          console.log("q1 ",this.state.q1Fouls);
      }
      else if (quarter === 2){
          console.log("adding ",increment," to ", quarter);
          currentFoul = this.state.q2Fouls;
          currentFoul += increment;
          this.setState({q2Fouls:currentFoul});
      }
      else if (quarter === 3){
          console.log("adding ",increment," to ", quarter);
          currentFoul = this.state.q3Fouls;
          currentFoul += increment;
          this.setState({q3Fouls:currentFoul});
      }
      else {
          console.log("adding ",increment," to ", quarter);
          currentFoul = this.state.q4Fouls;
          currentFoul += increment;
          this.setState({q4Fouls:currentFoul});
      }
  }

  changeTeamName(e){

  }

  render() {
    return (
      <div class="team-section">
          <div class = "team-top-section">
              <StatsRow teamName={this.props.teamName}
                        q1Fouls={this.state.q1Fouls}
                        q2Fouls={this.state.q2Fouls}
                        q3Fouls={this.state.q3Fouls}
                        q4Fouls={this.state.q4Fouls}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              <PlayerRow playerName={""} playerNumber=""
                         addTeamScore={this.addScore} addTeamFoul={this.addFoul} quarter={this.props.quarter}/>
              </div>
          <div class="team-bottom-section">
              <div class="flexed-row">
                <TimeOut/>
                  <div class="bottom-right-section">
                      <Signature/>
                      <TeamScore score={this.state.score}/>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}
