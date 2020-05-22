// Third party libraries
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// Stateless Component
const Action = (props) => {
    const robotIcon = <FontAwesomeIcon icon={["fas", "robot"]} transform="shrink-2" />
    return (
        <div className="action">
            <button className="btn action__action--btn" onClick={props.handleOnMakeDecision} disabled={!props.hasOptions}>Computer {robotIcon} Take Decision</button>
        </div>
    )
}

export default Action