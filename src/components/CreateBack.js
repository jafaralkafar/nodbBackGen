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

    componentDidUpdate(prevProps) {
        if(prevProps.currentBackground.user !== this.props.currentBackground.user) {
            this.setState({
                user: this.props.currentBackground.user,
                color1: this.props.currentBackground.color1,
                color2: this.props.currentBackground.color2,
                backgroundUrl: this.props.currentBackground.backgroundUrl
            })
        }
    }

    createBackground = () => {
        let newBackground = this.state
        this.props.createBackground(newBackground)

        this.setState({
            user: '',
            color1: '#ffffff',
            color2: '#ffffff',
            backgroundUrl: ''
        })
        
    }

    updateBackground = () => {
        const {id} = this.props.currentBackground
        let { user, color1, color2, backgroundUrl} = this.state
        let updatedBackground = {
            user,
            color1,
            color2,
            backgroundUrl
        }
        this.props.updateBackground(id, updatedBackground)

        this.setState({
            user: '',
            color1: '#ffffff',
            color2: '#ffffff',
            backgroundUrl: ''
        })
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
    

    render() {
        let chooseGradient = "linear-gradient(to right, " + this.state.color1 + ", " + this.state.color2 + ")"
        const {editting} = this.props
        return (
            <section className="create" style={{background: chooseGradient}}>
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
                {editting ? (
                    <button className="listbutton" onClick={this.updateBackground}>Update</button>
                ) : (
                    <button className="listbutton" onClick={this.createBackground}>Add</button>
                )}
            </section>
        )
    }
}