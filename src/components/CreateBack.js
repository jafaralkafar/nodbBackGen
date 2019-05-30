import React, {Component} from 'react'

export default class CreateBack extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: '',
            color1: '#ffffff',
            color2: '#ffffff',
            backgroundUrl: ''
        }
    }

    handleClick = () => {
        let newBackground = this.state
        this.props.createBackground(newBackground)
        
    }

    handleChange = e => {
        let {value, name} = e.target

        this.setState({
            [name]: value
        })
        
    }
    
    handleColorChange1 = e => {
        let {value} = e.target
        
        this.setState({
            color1: value
        })
    }

    handleColorChange2 = e => {
        let {value} = e.target

        this.setState({
            color2: value
        })
        
    }
    // might be easier to just create a box to show the gradient
    

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
                        onChange={this.handleColorChange1}/>
                    <input 
                        type="color" 
                        name="color2"
                        value={this.state.color2}
                        onChange={this.handleColorChange2}/>
                </div>
                <input 
                    type="text" 
                    name="backgroundUrl" 
                    placeholder="Background Image"
                    value={this.state.backgroundUrl}
                    onChange={this.handleChange}/>
                <br />
                <button onClick={this.handleClick}>Add</button>
            </section>
        )
    }
}