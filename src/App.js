import React, { Component } from "react";
import Plaintext from "./components/Plaintext";
import Ciphertext from "./components/Ciphertext";
import Shift from "./components/Shift";
import Paper from "@material-ui/core/Paper";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plainText: "",
      cipherText: "",
      shift: 0,
    };
  }

  render() {
    const encrypt = (c) => {
      if (c == " ") return c;
      if (c.charCodeAt() === 122) return "a";
      if (c.charCodeAt() === 90) return "A";
      return String.fromCharCode(c.charCodeAt(0) + this.state.shift);
    };
    const decrypt = (c) => {
      if (c.charCodeAt() === 97) return "a";
      if (c.charCodeAt() === 65) return "A";
      if (c == " ") return c;
      return String.fromCharCode(c.charCodeAt(0) - this.state.shift);
    };
    return (
      <div className="container">
        <center>
          <h1>Caesar's Cipher</h1>
        </center>
        <Shift
          shiftSelect={(val) => this.setState({ shift: val })}
          value={this.state.shift}
        ></Shift>
        <Paper elevation={10} className="child-container">
          <Plaintext
            value={this.state.plainText}
            onChange={(value) => {
              let final = value
                .split("")
                .map((c) => encrypt(c))
                .join("");
              this.setState({ cipherText: final, plainText: value });
            }}
          ></Plaintext>
          <Ciphertext
            onChange={(value) => {
              let final = value
                .split("")
                .map((c) => decrypt(c))
                .join("");
              this.setState({ plainText: final, cipherText: value });
            }}
            value={this.state.cipherText}
          ></Ciphertext>
        </Paper>
      </div>
    );
  }
}

export default Main;
