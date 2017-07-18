import React from "react";
import ReactDOM from 'react-dom';
import MarkedElement from "./MarkedElement.js";
import ScoreElement from "./ScoreElement.js";
import ScoreOptions from "./ScoreOptions.js";

export default class PlayerRow extends React.Component {
  constructor() {
    super();
    this.state = {
        participation: [],
        quarterClicked: false,
        quarterOptions: null,
        q1Score:[],
        q2Score:[],
        q3Score:[],
        q4Score:[],
        q1TotalScore:0,
        q2TotalScore:0,
        q3TotalScore:0,
        q4TotalScore:0,
        personalFouls: 0
    };
      this.addQuarterScore = this.addQuarterScore.bind(this);
      this.exitOptions = this.exitOptions.bind(this);
      this.removeScore = this.removeScore.bind(this);
      this.addFoul = this.addFoul.bind(this);
  }

  changeTitle(title) {
    this.setState({title});
  }

  addQuarterScore(quarterScoreArray, points, e){
      console.log("adding points");
      var newElement = <ScoreElement score={points} className={""}
                                     removeScore={this.removeScore.bind(this)}
                                     quarter={quarterScoreArray}
                                      clicked={this.scoreClicked}/>;
      quarterScoreArray.push(newElement);
      this.props.addTeamScore(points);
      this.exitOptions(e);
  }

  scoreClicked(el){
      console.log("el ", el);
      for (var i = 0; i < this.state.q1Score.length; i++) {
          if (el === this.state.q1Score[i]){
              console.log("Found match ", el)
          }
      }

  }

  removeScore(quarterArray, scoreEl, e){
      e.stopPropagation();
      console.log("quarterArray ", quarterArray);
      console.log("scoreEl ", scoreEl)
      this.props.addTeamScore(-scoreEl);
  }

  addToScore(quarter, amount){
      this.setState({ [quarter]: amount })
  }

  getTotal(){
      return this.state.q1TotalScore+this.state.q2TotalScore
          +this.state.q3TotalScore+this.state.q4TotalScore;

  }

  quarterClicked(quarter, e){
      e.stopPropagation();
      console.log("Quarter ", quarter, " clicked");
      var quarterArray;
      if (quarter == 1){
          quarterArray = this.state.q1Score;
      }
      else if (quarter == 2){
          quarterArray = this.state.q2Score;
      }
      else if (quarter == 3){
          quarterArray = this.state.q3Score;
      }
      else {
          quarterArray = this.state.q4Score;
      }
      var options = {
          "Add 2" : this.addQuarterScore.bind(this, quarterArray, 2),
          "Add 3": this.addQuarterScore.bind(this, quarterArray, 3),
          "Add 1": this.addQuarterScore.bind(this, quarterArray, 1),
          "exit": this.exitOptions.bind(this),
      }
      var eventRect = e.target.getBoundingClientRect();
      var docTop = window.pageYOffset;
      var optionEl = <ScoreOptions exit={this.exitOptions.bind(this)}
                                   xCoord={eventRect.left + 5}
                                   yCoord={eventRect.top + docTop +(1.6 * docTop)}
                                   optionList = {options}/>;
      this.setState({quarterOptions: optionEl});
      this.setState({quarterClicked:true});

  }

  exitOptions(e){
      e.stopPropagation();
      this.setState({quarterOptions: null})
      this.setState({quarterClicked: false})
  }

  addFoul(obj){
      //var currentFouls = this.state.personalFouls;
      console.log(obj);
      console.log(obj.state.currentClass);
      if (obj.state.marked){
          this.props.addTeamFoul(-1, this.props.quarter);
      }
      else{
          this.props.addTeamFoul(1, this.props.quarter);
      }

  }

  componentWillMount(){
      this.setState({name:this.props.playerName})
      this.setState({number:this.props.playerNumber})
  }
  render() {

      return (
      <div class="flexed-row">
          <div class="name-col top-row fit-name">
              <p>{this.state.name}</p>
          </div>

          <div class="jersey-number-col top-row">
              <p>{this.props.playerNumber}</p>
          </div>
          <div class="participation-col top-row">
              <span class="flexed-row" style={{height: "100%"}}>
                  <MarkedElement content={1} defaultClass={"boxes"} clickedClass={"marked"} boxes={8} clickedAction={(obj)=>{}}/>
                  <MarkedElement content={2} defaultClass={"boxes"} clickedClass={"marked"} boxes={8} clickedAction={(obj)=>{}}/>
                  <MarkedElement content={3} defaultClass={"boxes"} clickedClass={"marked"} boxes={8} clickedAction={(obj)=>{}}/>
                  <MarkedElement content={4} defaultClass={"boxes"} clickedClass={"marked"} boxes={8} clickedAction={(obj)=>{}}/>
                  <MarkedElement content={5} defaultClass={"boxes"} clickedClass={"marked"} boxes={8} clickedAction={(obj)=>{}}/>
                  <MarkedElement content={6} defaultClass={"boxes"} clickedClass={"marked"} boxes={8} clickedAction={(obj)=>{}}/>
                  <MarkedElement content={7} defaultClass={"boxes"} clickedClass={"marked"} boxes={8} clickedAction={(obj)=>{}}/>
                  <MarkedElement content={8} defaultClass={"boxes"} clickedClass={"marked"} boxes={8} clickedAction={(obj)=>{}}/>
              </span>
      </div>
          <div class="foul-col top-row flexed-row">
              <MarkedElement content={1} defaultClass={"boxes"} clickedClass={"marked"} boxes={5} clickedAction={this.addFoul}/>
              <MarkedElement content={2} defaultClass={"boxes"} clickedClass={"marked"} boxes={5} clickedAction={this.addFoul}/>
              <MarkedElement content={3} defaultClass={"boxes"} clickedClass={"marked"} boxes={5} clickedAction={this.addFoul}/>
              <MarkedElement content={4} defaultClass={"boxes"} clickedClass={"marked"} boxes={5} clickedAction={this.addFoul}/>
              <MarkedElement content={5} defaultClass={"boxes"} clickedClass={"marked"} boxes={5} clickedAction={this.addFoul}/>
          </div>
          <div class="quarter-col top-row" onClick={this.quarterClicked.bind(this, 1)}>
              <div class="flexed-row">
              {this.state.q1Score}
              </div>
          </div>
          <div class="quarter-col top-row" onClick={this.quarterClicked.bind(this, 2)}>
              <div class="flexed-row">
                  {this.state.q2Score}
              </div>
          </div>
          <div class="quarter-col top-row" onClick={this.quarterClicked.bind(this, 3)}>
              <div class="flexed-row">
                  {this.state.q3Score}
              </div>
          </div>
          <div class="quarter-col top-row" onClick={this.quarterClicked.bind(this, 4)}>
              <div class="flexed-row">
                  {this.state.q4Score}
              </div>
          </div>
          {this.state.quarterClicked ?
              this.state.quarterOptions :
              null
          }
          <div class="total-col top-row">
              {this.getTotal()}
          </div>
      </div>
    );
  }
}
