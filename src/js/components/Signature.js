import React from "react";
import MarkedElement from "./MarkedElement.js";

export default class PlayerRow extends React.Component {
  constructor() {
    super();
    this.state = {
        none:0
    };
  }

  render() {
      return (
         <div class="flexed-row">
             <div class="coach-section">
                 <p>Coach Name</p>
             </div>
             <div class="coach-section">
                 <p>Signature</p>
             </div>
         </div>
      )
  }
}
