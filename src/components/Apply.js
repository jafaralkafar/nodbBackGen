import React, {Component} from 'react'

export default class extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            color1: '',
            color2: '',
            backgroundUrl: ''
        }
    }

    

    render() {
        return (
            <button className="listbutton" onClick={this.props.setIndex}>Apply</button>
        )
    }
}