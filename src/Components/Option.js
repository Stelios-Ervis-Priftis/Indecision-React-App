// Third party libraries
import React from 'react'
import TypeIt from 'typeit-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Stateless Component
const Option = (props) => (
    <div className="option">
        <TypeIt
            className="option__text"
            options={{ speed: 50, cursor: false, lifeLike: true, waitUntilVisible: true }}
            element={"p"}
            getBeforeInit={instance => {
                instance
                    .type(`${props.count}: `)
                    .pause(200)
                    .type(`${props.optionText}`)
                return instance;
            }}
        />
        <button className="btn option__btn--danger" onClick={(e) => { props.handleRemoveOption(props.optionText) }}>
            <FontAwesomeIcon icon={["fas", "trash-alt"]} transform="shrink-2" />
        </button>
    </div>
)

export default Option