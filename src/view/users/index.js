import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: []
    };
  }


  componentDidMount(props) {

  }

  render() {
    const { content } = this.state
    return(
      <div className="User">
          1
      </div>
    )
  }
}

export default Topic;
