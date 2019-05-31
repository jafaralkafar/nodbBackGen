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
            index: 0,
            editting: false,
            currentBackground: {}
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
    
    setEditting = id => {
        let background = this.state.completedBackgrounds.find(background => +background.id === +id)

        this.setState({
            editting: true,
            currentBackground: background
        })
    }

    updateBackground = (id, background) => {
        axios.put(`/api/backgrounds/${id}`, background)
        .then(res => this.setState({
            completedBackgrounds: res.data,
            currentCoin: {},
            editting: false
        }))
        .catch(err => console.log(err))
    }
    
    deleteBackground = id => {
        console.log(id)
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
        const {currentBackground, editting} = this.state

        return (
            <div className="main">
                <header>
                    <Header index={this.state.index} backgrounds={this.state.completedBackgrounds}/>
                </header>
                <section className="allstuff">
                    <CreateBack 
                        createBackground={this.createBackground} 
                        editting={editting}
                        updateBackground={this.updateBackground}
                        currentBackground={currentBackground}
                        />
                    <ListBack 
                        backgrounds={this.state.completedBackgrounds}
                        setIndex={this.setIndex}
                        deleteBackground={this.deleteBackground}
                        setEditting={this.setEditting}
                        currentBackground={currentBackground}
                        />
                </section>
                
            </div>
        )
    }

}

