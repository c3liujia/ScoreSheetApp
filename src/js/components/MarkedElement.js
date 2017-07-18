import React from "react";

export default class MarkedElement extends React.Component {
  constructor() {
    super();
    this.state = {
        clickedClass: "",
        currentClass:"",
        width : "inherit",
        marked: false
    };
  }

  componentWillMount(){
      this.setState({currentClass:this.props.defaultClass});
      if (this.props.boxes > 0){
          var splits = 100/this.props.boxes;
          this.setState({width:splits+"%"});
      }

  }

  onClick(){
      if (this.state.currentClass === this.props.defaultClass){
          this.setState({currentClass:this.props.clickedClass});
          this.setState({marked:true});
      }
      else{
          this.setState({currentClass:this.props.defaultClass});
          this.setState({marked:false});
      }

      this.props.clickedAction(this);
  }

  render() {
    return (
        <p className = {this.state.currentClass} style={{width :this.state.width}}
        onClick={()=>this.onClick()}>{this.props.content}</p>
    );
  }
}
