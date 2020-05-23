// Third party libraries
import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { log } from '../helper'

// State Component
export default class AddOption extends Component {
    state = {
        error: undefined
    }

    handleOnFormSubmit = (e) => {
        e.preventDefault()
        let intValue = e.target.option.value.trim(' ').toUpperCase()
        const error = this.props.handleOnFormSubmit(intValue)

        this.setState(() => ({ error: error }))

        e.target.option.value = ''
    }

    handleOnInputChange = (e) => {
        const setWarningClass = document.getElementsByClassName('addOption__input')
        setWarningClass.option.classList.remove('warning-message')
    }

    render() {
        return (
            <div>
                {/* {this.state.error && <p>{this.state.error}</p>} */}
                <form className="addOption" onSubmit={this.handleOnFormSubmit}>
                    <input className="addOption__input" onChange={this.handleOnInputChange} /* disabled={this.props.maxOptions} */ type="text" name="option" placeholder={this.state.error ? this.state.error : 'Write Your Option'} />
                    <button className="btn addOption__btn--mod" /* disabled={this.props.maxOptions} */>
                        <FontAwesomeIcon icon="plus-circle" />
                    </button>
                    <div className="addOption__underline"></div>
                </form>
            </div>
        )
    }
}