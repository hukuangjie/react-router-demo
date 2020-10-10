import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        }
    }
    render() {
        return (<h2>list-page --{'>'} {this.state.id}</h2>);
    }
    componentDidMount() {
        let tempId = this.props.match.params.id
        this.setState({
            id: tempId
        })
    }
}

export default List;