// Third party libraries
import React from 'react'

// Stateless Component
const RemoveOptions = (props) => (
    <div>
        <button className="btn btn-danger" onClick={props.handleRemoveOptions}>Remove Your Options</button>
    </div>
)

export default RemoveOptions