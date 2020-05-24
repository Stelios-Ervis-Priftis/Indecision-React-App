// Third party libraries
import React from 'react'
import TypeIt from 'typeit-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, animated, config } from 'react-spring'

// Stateless Component
const Option = (props) => {
    const styleProps = useSpring({
        to: { opacity: 1, marginTop: 0 },
        from: { opacity: 0, marginTop: +300 },
        delay: 50,
        config: config.stiff
    })
    return (
        <animated.div style={styleProps}>
            <div className="option">
                <TypeIt
                    className="option__text"
                    options={{ speed: 50, startDelay: 450, cursor: false, lifeLike: true, waitUntilVisible: true }}
                    element={"p"}
                    getBeforeInit={instance => {
                        instance
                            .type(`${props.count}: `)
                            .type(`${props.optionText}`)
                        return instance;
                    }}
                />
                <button className="btn option__btn--danger" onClick={(e) => { props.handleRemoveOption(props.optionText) }}>
                    <FontAwesomeIcon icon={["fas", "trash-alt"]} transform="shrink-2" />
                </button>
            </div>
        </animated.div>
    )
}

export default Option