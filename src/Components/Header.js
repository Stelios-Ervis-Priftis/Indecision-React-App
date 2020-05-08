// Third party libraries
import React from 'react'
import TypeIt from 'typeit-react'

// Stateless Component
const Header = (props) => {
    return (
        <div className="header-container">
            <h1 className="title">{props.title}</h1>
            {/* <h2 className="sub-title">{props.subTitle_1}</h2> */}
            <TypeIt className="sub-title" element={"h2"} options={{
                strings: [`${props.subTitle_1}`],
                speed: 50,
                cursor: false,
                lifeLike: true,
                waitUntilVisible: true
            }} />
            <TypeIt className="sub-title" element={"h4"} options={{
                strings: [`${props.subTitle_2}`],
                startDelay: 2500,
                speed: 50,
                cursor: false,
                lifeLike: true,
                waitUntilVisible: true
            }} />
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

export default Header