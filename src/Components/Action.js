import React from 'react'

// Stateless Component
const Action = (props) => {
    return (
        <div>
            <button className="btn" onClick={props.handleOnMakeDecision} disabled={!props.hasOptions}>Computer Take Decision</button>
        </div>
    )
}

export default Action