import React from 'react'
import Apply from './Apply'

export default function User(props) {
    return (
    <div>    
        <span>{props.background.user}</span>
        <button className="listbutton" onClick={() => props.setEditting(props.background.id)}>Edit</button>
        <button className="listbutton" onClick={() => props.deleteBackground(props.background.id)}>Delete</button>
        <Apply className="listbutton"
            setIndex={() => props.setIndex(props.id)}/>
    </div>
    )
}