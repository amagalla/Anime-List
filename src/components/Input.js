import React, { Component } from 'react'

class Input extends Component {
    constructor() {
        super();
        this.state = {
            show: "nothing is showing"
        }
    }

    componentDidMount() {
        fetch('/getAllShows')
            // .then(res => res.json())
            .then(res => console.log(res))
            .then(data => this.setState({ show: data }))
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
                    <ul>
                        <li>{this.state.show}</li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Input;