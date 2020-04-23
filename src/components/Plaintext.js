import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

class Plaintext extends Component {
  render() {
    return (
      <div className="left">
        <center>
          <h2>Plaintext</h2>
          <TextField
            multiline
            rowsMax="10"
            value={this.props.value}
            onChange={(e) => this.props.onChange(e.target.value)}
            margin="normal"
            placeholder="Enter plaintext"
          />
        </center>
      </div>
    );
  }
}
export default Plaintext;
