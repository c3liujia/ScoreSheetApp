import React from "react";
import MarkedElement from "./MarkedElement.js";

export default class PlayerRow extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "Lavar"
    };
  }

  changeName(){
      console.log("Change coach name");
  }
  render() {
      return (
         <div class="flexed-row">
             <div class="flexed-row coach-section">
                 <p>Coach Name:</p>
                 <input type="text" onKeyUp={this.changeName} defaultValue = {this.props.coachName} />
             </div>
             <div class="coach-section">
                 <p>Signature:</p>
             </div>
         </div>
      )
  }
}
