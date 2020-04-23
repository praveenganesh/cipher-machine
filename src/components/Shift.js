import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class Shift extends Component {
  render() {
    let range = new Array(11).fill().map((_, i) => i);
    return (
      <div className="shift">
        <center>
          <Select
            onChange={(e) => this.props.shiftSelect(e.target.value)}
            autoWidth={true}
            displayEmpty
          >
            <MenuItem disabled>{`${
              this.props.value ? this.props.value : `Enter shift amount`
            }`}</MenuItem>
            {range.map((val, i) => {
              return (
                <MenuItem value={val} key={i} selected>
                  {val}
                </MenuItem>
              );
            })}
          </Select>
        </center>
      </div>
    );
  }
}

export default Shift;
