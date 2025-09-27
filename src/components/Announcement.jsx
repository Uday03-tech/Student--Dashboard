import React, { Component } from "react";

class Announcement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      announcement: "⚡ New Batch starts from October 1st, 2025!"
    };
  }

  render() {
    return (
      <div className="container mb-4">
        <div className="alert alert-info">{this.state.announcement}</div>
      </div>
    );
  }
}

export default Announcement;
