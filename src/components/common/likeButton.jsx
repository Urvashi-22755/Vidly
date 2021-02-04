/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";

class LikeButton extends Component {
  state = {
    likes: 0,
  };

  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i className={classes} aria-hidden="true" onClick={this.props.onClick}>
        <span className="m-2 font-weight-bold">{this.props.likes}</span>
      </i>
    );
  }
}

export default LikeButton;
