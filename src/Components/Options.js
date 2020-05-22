// Third party libraries
import React from 'react'
import RemoveOptions from './RemoveOptions'

// Components imports
import Option from './Option'

// Stateless Component
const Options = (props) => (
    <div className="widget">
        <div className="widget__header">
            <h3 className="widget__header__title">Your Options</h3>
            <RemoveOptions handleRemoveOptions={props.handleRemoveOptions} hasOptions={props.options.length > 0} />
        </div>
        {props.options.map((option, index) => <Option key={option} optionText={option} count={index + 1} handleRemoveOption={props.handleRemoveOption} />)}
        {props.options.length === 0 && <p className="widget__message">Add options to begin with!</p>}
    </div>
)

export default Options