// Third party libraries
import React from 'react'
import TypeIt from 'typeit-react'


// Stateless Component
const Option = (props) => {
    return (
        <div className="option">
            <TypeIt element={"p"} options={{
                strings: [`${props.optionText}`],
                speed: 50,
                cursor: false,
                lifeLike: true,
                waitUntilVisible: true
            }} />
            {/* <p>{props.optionText}</p> */}
            <button className="btn btn-danger" onClick={(e) => { props.handleRemoveOption(props.optionText) }}>remove</button>
        </div>
    )
}

export default Option