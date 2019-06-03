import React from 'react'



export default function Header(props) {
    // console.log(props)
    
    return (
        <header className="header">
            {props.appliedBackground.user &&
            <h1>{props.appliedBackground.user}'s Background</h1>
            }
            {props.appliedBackground.user &&
            <h3>
            {`Your background is "linear-gradient(to right, ${props.appliedBackground.color1}, ${props.appliedBackground.color2})`}
            </h3>
        }
            
        </header>
    )
}