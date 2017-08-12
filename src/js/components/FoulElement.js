import React from "react";

export default class FoulElement extends React.Component {
  constructor() {
    super();
    this.state = {
        clickedClass: "",
        currentClass:"",
        width : "inherit",
        marked: false,
        display: null,
        quarter:null
    };
  }

  componentWillMount(){
      this.setState({currentClass:this.props.defaultClass});
      if (this.props.boxes > 0){
          var splits = 100/this.props.boxes;
          this.setState({width:splits+"%"});
          this.setState({display:this.props.content});
          this.setState({quarter:this.props.quarter});
      }

  }

  onClick(){
      if (this.state.currentClass === this.props.defaultClass){
          this.setState({currentClass:this.props.clickedClass});
          this.setState({marked:true});
          this.setState({display:this.props.quarter});
          this.setState({quarter:this.props.quarter});
      }
      else{
          this.setState({currentClass:this.props.defaultClass});
          this.setState({marked:false});
          this.setState({display:this.props.content});
      }
      this.props.clickedAction(this);
  }

  render() {
    return (
        <p className = {this.state.currentClass} style={{width :this.state.width}}
        onClick={()=>this.onClick()}>{this.state.display}</p>
    );
  }
}
