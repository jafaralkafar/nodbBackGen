import React from 'react'



export default function Header(props) {
    // console.log(props)
    
    return (
        <header className="header">
            {props.appliedBackground.user &&
            <h1>{props.appliedBackground.user}'s Background</h1>
            }
            
        </header>
    )
}