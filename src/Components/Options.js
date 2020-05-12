// Third party libraries
import React from 'react'

// Components imports
import Option from './Option'

// Stateless Component
const Options = (props) => (
    <div className="option-container">
        {props.options.map((option) => <Option key={option} optionText={option} handleRemoveOption={props.handleRemoveOption} />)}
        {props.options.length === 0 && <p className="option-msg">Add options to begin with!</p>}
    </div>
)

export default Options