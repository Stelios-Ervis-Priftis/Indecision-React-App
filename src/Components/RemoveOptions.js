// Third party libraries
import React from 'react'

// Stateless Component
const RemoveOptions = (props) => (
    <div>
        <button className="btn widget__header__btn--danger" onClick={props.handleRemoveOptions} disabled={!props.hasOptions}>Remove All</button>
    </div>
)

export default RemoveOptions