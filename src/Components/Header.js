// Third party libraries
import React from 'react'
import TypeIt from 'typeit-react'

// Stateless Component
const Header = ({title, subTitleFirst, subTitleSecond}) => (
    <div className="header">
        <h1 className="header__title">{title}</h1>
        <TypeIt
            className="header__subTitle"
            options={{ speed: 50, cursor: false, lifeLike: false, waitUntilVisible: true }}
            getBeforeInit={instance => {
                instance
                    .type(`${subTitleFirst}`)
                    .pause(1500)
                    .break(`${subTitleSecond}`)
                    .type(`${subTitleSecond}`)

                return instance;
            }}
        />
    </div>
)

Header.defaultProps = {
    title: 'Indecision',
    subTitleFirst: 'Struggling to take a decision?',
    subTitleSecond: 'Put your life in the hands of a computer!'
}

export default Header