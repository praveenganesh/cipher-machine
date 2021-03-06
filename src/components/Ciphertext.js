import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

class Ciphertext extends Component {
  render() {
    return (
      <div className="right">
        <center>
          <h2>Ciphertext</h2>
          <TextField
            multiline
            value={this.props.value}
            rowsMax="10"
            onChange={(e) => this.props.onChange(e.target.value)}
            margin="normal"
            placeholder="Enter ciphertext"
          />
        </center>
      </div>
    );
  }
}

export default Ciphertext;
