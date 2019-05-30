import React, {Component} from 'react'

export default class CreateBack extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            color1: '#FFFFFF',
            color2: '#FFFFFF',
            backgroundUrl: ''
        }
    }

    handleChange = e => {
        let {value, name} = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <section className="create">
                <input 
                    type="text" 
                    name="user" 
                    placeholder="Name"
                    value={this.state.user}
                    onChange={this.handleChange}/>
                <div className="colorinputs">
                    <input 
                        type="color" 
                        name="color1"
                        value={this.state.color1}
                        onChange={this.handleChange}/>
                    <input 
                        type="color" 
                        name="color2"
                        value={this.state.color1}
                        onChange={this.handleChange}/>
                </div>
                <input 
                    type="text" 
                    name="backgroundUrl" 
                    placeholder="Background Image"
                    value={this.state.backgroundUrl}
                    onChange={this.handleChange}/>
                
            </section>
        )
    }
}