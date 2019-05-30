import React, {Component} from 'react'
import axios from 'axios'

import Header from './Header'
import CreateBack from './CreateBack'
import ListBack from './ListBack'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            completedBackgrounds: [],
            index: 0
        }
    }

    componentDidMount() {
        axios.get('/api/backgrounds')
        .then(res => this.setState({completedBackgrounds: res.data}))
        .catch(err => console.log('error fetching backgrounds: ', err))
        
    }

    createBackground = (newBackground) => {
        axios.post('/api/backgrounds', newBackground)
        .then(res => this.setState({completedBackgrounds: res.data}))
        .catch(err => console.log(err))
    }

    updateBackground = background => {
        axios.put(`/api/backgrounds/${background.id}`, background)
        .then(res => this.setState({completedBackgrounds: res.data}))
        .catch(err => console.log(err))
    }

    deleteBackground = id => {
        axios.delete(`/api/backgrounds/${id}`)
        .then(res => this.setState({completedBackgrounds: res.data}))
        .catch(err => console.log(err))
    }

    setIndex=(id)=> {
        // receiving a background's id, finding the index that matches the id setting the id to the state
        let {completedBackgrounds} = this.state

        let index = completedBackgrounds.findIndex(user => +user.id === +id)
        if (index !== -1){
            this.setState({index: index })
        }
    }    
    
    render() {
        return (
            <div className="main">
                <header>
                    <Header index={this.state.index} backgrounds={this.state.completedBackgrounds}/>
                </header>
                <section>
                    <CreateBack 
                        createBackground={this.createBackground}
                        />
                    <ListBack 
                        backgrounds={this.state.completedBackgrounds}
                        setIndex={this.setIndex}
                        updateBackground={this.updateBackground}
                        deleteBackground={this.deleteBackground}/>
                </section>
                
            </div>
        )
    }

}

