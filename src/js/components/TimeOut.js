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
             <div class="flexed-row boxes" style={{height:"25%"}}>
                 <p>Time Outs</p>
             </div>
             <div class="flexed-row" style={{height:"25%"}}>
                 <MarkedElement content={1} defaultClass={"boxes"} clickedClass={"marked"} boxes={2} clickedAction={()=>{}}/>
                 <MarkedElement content={2} defaultClass={"boxes"} clickedClass={"marked"} boxes={2} clickedAction={()=>{}}/>
             </div>
             <div class="flexed-row" style={{height:"25%"}}>
                <MarkedElement content={1} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={()=>{}}/>
                <MarkedElement content={2} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={()=>{}}/>
                <MarkedElement content={3} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={()=>{}}/>
            </div>
             <div class="flexed-row" style={{height:"26%"}}>
                 <MarkedElement content={""} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={()=>{}}/>
                 <MarkedElement content={""} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={()=>{}}/>
                 <MarkedElement content={""} defaultClass={"boxes"} clickedClass={"marked"} boxes={3} clickedAction={()=>{}}/>
             </div>
         </div>
      )
  }
}
