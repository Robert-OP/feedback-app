import React, { Component } from "react";

class Landing extends Component {
  render() {
    console.log(this.props);

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Emaily</h1>
        <p>Collect feedback from your users</p>
      </div>
    );
  }
}

export default Landing;
