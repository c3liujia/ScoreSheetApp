import React from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import ScoreOptions from "./ScoreOptions.js";

export default class ScoreElement extends React.Component {
  constructor() {
    super();
    this.state = {
        clicked: false,
        xCoord: 0,
        yCoord: 0,
        removed: false
    };
    this.onClick = this.onClick.bind(this);
    this.exitOptions = this.exitOptions.bind(this);
  }

  componentDidMount(){

  }

  onClick(e){
      e.stopPropagation();
      var eventRect = e.target.getBoundingClientRect();
      var docTop = window.pageYOffset;
      //console.log("state ", this)
      this.setState({clicked : true});
      console.log("eventRect: ", eventRect);

      this.setState({xCoord :  eventRect.left + 5 });
      this.setState({yCoord :  eventRect.top + docTop +(1.6 * docTop)});//workaround

  }

  exitOptions(e){
      e.stopPropagation();
      this.setState({clicked: false});
  }

  thisRemoved(e){
      console.log(this, " has been removed. Call props to subtract from total");
      this.props.removeScore(this.props.quarter, this.props.score, e);
      this.setState({removed: true});
      this.exitOptions(e);
  }

  render() {
      var options = {
          "Remove" : this.thisRemoved.bind(this),
          "exit": this.exitOptions.bind(this)
      }

    return (
        <div>
            {this.state.removed === false ?
                <div>
                    <p className={this.props.className}
                       onClick={this.onClick}>{this.props.score}</p>
                    {this.state.clicked ?
                        <ScoreOptions exit={this.exitOptions}
                                      xCoord={this.state.xCoord} yCoord={this.state.yCoord}
                                      optionList={options}/> :
                        null
                    }
                </div> :
                null
            }
        </div>
        )
  }
}
