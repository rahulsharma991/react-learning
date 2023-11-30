import React from "react";

export default class User extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0,
            userInfo: {
                name: 'dummy',
                location: 'India'
            }
        }
    }
   async componentDidMount() {
        const data = await fetch('https://api.github.com/users/rahulsharma991');
        console.log(data);
        const json = await data.json();
        console.log(json)
        this.setState({
            userInfo: json
        })

    }
    componentDidUpdate() {
        console.log('state changed and updated')
    }
    updateCount() {
       return this.setState({
            count: this.state.count+ 1
        })
    }
    render() {
        return (
            <div>
            {/* <div>{this.props.data}</div> */}
            <p>{this.state.userInfo.name}</p>
            <p>{this.state.userInfo.location}</p>
            <h1>count: {this.state.count}</h1>
            <button onClick={() => this.updateCount()}>Update state</button>
            </div>
        )
    }
}