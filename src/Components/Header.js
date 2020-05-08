// Third party libraries
import React from 'react'

// Stateless Component
const Header = (props) => {
    return (
        <div className="header-container">
            <h1 className="title">{props.title}</h1>
            <h2 className="sub-title">{props.subTitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

export default Header