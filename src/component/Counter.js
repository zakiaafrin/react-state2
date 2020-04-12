import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        // this.count = 10;
        this.state = {
            count: 10,
            color: 'black'
        }
    }

    decrease = () => {
        // this.count = this.count - 1;
        // console.log(this.count);
        this.setState({ count: this.state.count - 1 });

        if (this.state.count <= 5) {
            this.setState({
                color: "red",
            });
        } else {
            this.setState({
                color: "black",
            });
        }
    }

    increase = () => {
        // this.count = this.count + 1;
        // console.log(this.count);
        this.setState({ count: this.state.count + 1 });

        if (this.state.count >= 15) {
            this.setState({
                color: "green",
            });
        } else {
            this.setState({
                color: "black",
            });
        }
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.color }}>
                    <span onClick={this.decrease}> - </span> {this.state.count}
                    <span onClick={this.increase}> + </span>
                </h1>
            </div >
        );
    }
}
export default Counter;