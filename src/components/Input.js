import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      show: [],
    };
  }

  componentDidMount() {
    fetch('/getShow')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ show: data });
        // console.log(this.state.show);
      });
  }

  render() {
    return (
      <>
        <div>
          <form>
            <label>
              Show:
              <input type="text" name="show" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div>
          <ul>{this.state.map(<li>{this.state.show}</li>)}</ul>
        </div>
      </>
    );
  }
}

export default Input;
