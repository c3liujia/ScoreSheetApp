import React from "react";
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import { Button, Popover, PopoverTitle, PopoverContent } from 'reactstrap';

export default class ScoreOptions extends React.Component {
  constructor() {
    super();
    this.state = {
        clicked: false,
        options: [],
        focus: true
    };
      this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentWillMount(){
      var options = this.props.optionList;
      var optionsArray = [];
      var newElement;
      for (var i in options){
          newElement = <p onClick={this.props.optionList[i]}>{i}</p>
          optionsArray.push(newElement);
      }
      this.setState({options:optionsArray});
  }


  componentDidMount() {
      document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
  }

  handleClickOutside(e) {
      const domNode = ReactDOM.findDOMNode(this);
      if ((!domNode || !domNode.contains(event.target))) {
          this.setState({
              focus : false
          });
          document.removeEventListener('click', this.handleClickOutside.bind(this), true);
          this.props.optionList["exit"](e);
      }
  }
  render() {
      var contentMenuStyle = {
          position: 'absolute',
          borderStyle: 'solid',
          borderWidth: '1px 1px 1px 1px',
          left: this.props.xCoord ? this.props.xCoord : 0,
          top: this.props.yCoord ? this.props.yCoord : 0
      };

    return (
        <div class="score-options" style={contentMenuStyle}>
            {this.state.options}
        </div>
    )
  }
}
