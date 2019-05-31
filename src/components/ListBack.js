import React, {Component} from 'react'
import User from './User'

export default class ListBack extends Component {
    


    render() {
        return (
            <div className="backgroundlist">
                {this.props.backgrounds.map(background => {
                    // console.log(background)
                    return (
                        <div key={background.id}>   
                            <User 
                                background={background}
                                deleteBackground={this.props.deleteBackground}
                                setEditting={this.props.setEditting}
                                id={background.id}
                                currentBackground={this.props.currentBackground}
                                setIndex={this.props.setIndex}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}