import React, {Component} from 'react'
import Apply from './Apply'

export default class ListBack extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            color1: '',
            color2: '',
            backgroundUrl: '',
            edit: false
        }
    }

    toggleEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    render() {
        return (
            <div className="backgroundlist">
                {this.props.backgrounds.map(background => {
                    console.log(background)
                    return (
                        <div key={background.id}>   
                            <span>{background.user}</span>
                            <button className="listbutton" onClick={this.props.updateBackground}>Edit</button>
                            <button className="listbutton" onClick={this.props.deleteBackground}>Delete</button>
                            <Apply className="listbutton"/>
                        </div>
                    )
                })}
            </div>
        )
    }
}