import React from "react";
import MarkedElement from "./MarkedElement.js";

export default class PlayerRow extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
      var markedEls = [];
      var unmarkedEls = [];

      for (var i=1; i <= this.props.score; i++) {
          markedEls.push(<MarkedElement content={i} defaultClass={"marked-score"}
                                        clickedClass={"marked-score"} clickedAction={()=>{}}/>
          );
      }
      for (var i=this.props.score+1; i <= 143; i++) {
          unmarkedEls.push(<MarkedElement content={i} defaultClass={"unmarked-score"}
                                          clickedClass={"marked-score"} clickedAction={()=>{}}/>
          );
      }
      return (
         <div>
             <div class="flexed-row score-section">
                 {markedEls}
                 {unmarkedEls}
             </div>
         </div>
      )
  }
}
