import React from "react";
import StatsRow from "./StatsRow.js";

export default class FoulCount extends React.Component {
  constructor() {
    super();
      this.state = {
          fouls: 0,
          foulsText: "",
          noFoulsText: "1 2 3 4"
    };

  }

  render() {
      var marked = [];
      var unmarked =[];
      for (var i = 1; i <= this.props.foulCount; i++) {
          if (i < 5) {
              marked.push(<span class="marked">{i}</span>);
          }
      }
      for (var j = this.props.foulCount+1; j < 5; j++) {
          unmarked.push(<span>{j}</span>);
      }
    return (
        <p>
            {marked}
            {unmarked}
        </p>
    );
  }
}
