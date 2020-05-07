import React from 'react'

// Stateless Component
const Option = (props) => {
    return (
        <div className="option">
            <p>{props.optionText}</p>
            <button className="btn btn-danger" onClick={(e) => { props.handleRemoveOption(props.optionText) }}>remove</button>
        </div>
    )
}

export default Option