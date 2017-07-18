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
         <div class="timeOut">
             <div class="flexed-row" style={{height:"25%"}}>
                 <h3>Time Outs</h3>
             </div>
             <div class="flexed-row" style={{height:"25%"}}>
                 <MarkedElement content={1} defaultClass={"boxes"} clickedClass={"marked"} boxes={2} clickedAction={null}/>
                 <MarkedElement content={2} defaultClass={"boxes"} clickedClass={"marked"} boxes={2} clickedAction={null}/>
             </div>
             <div class="flexed-row" style={{height:"25%"}}>
                <MarkedElement content={1} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={null}/>
                <MarkedElement content={2} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={null}/>
                <MarkedElement content={3} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={null}/>
            </div>
             <div class="flexed-row" style={{height:"25%"}}>
                 <MarkedElement content={""} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={null}/>
                 <MarkedElement content={""} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={null}/>
                 <MarkedElement content={""} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={null}/>
             </div>
         </div>
      )
  }
}
