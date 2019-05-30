import React from 'react'



export default function Header(props) {
    console.log(props)
    
    return (
        <header className="header">
            {props.backgrounds[props.index] &&
            <h1>{props.backgrounds[props.index].user}'s Background</h1>
            }
            
        </header>
    )
}