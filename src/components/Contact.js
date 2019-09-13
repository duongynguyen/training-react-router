import React, { Component } from "react";
import { Prompt } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  onClick = isChecked => {
    this.setState({ isChecked });
  };

  render() {
    return (
      <div className="container">
        This is Contact page
        <div class="row mt-2">
          <button
            type="button"
            class="btn btn-primary mr-2"
            onClick={() => this.onClick(false)}
          >
            Accept
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() => this.onClick(true)}
          >
            Not accept
          </button>
        </div>
        <Prompt
          when={this.state.isChecked}
          message={location =>
            `Are you sure you want to leave? And go to ${location.pathname}`
          }
        />
      </div>
    );
  }
}

export default Contact;
