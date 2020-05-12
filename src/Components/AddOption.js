// Third party libraries
import React, { Component } from 'react'

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

    render() {
        return (
            <div>
                {/* {this.state.error && <p>{this.state.error}</p>} */}
                <form className="submit-form" onSubmit={this.handleOnFormSubmit}>
                    <input className="btn btn-form btn-form-inp" /* disabled={this.props.maxOptions} */ type="text" name="option" placeholder={this.state.error ? this.state.error : 'Write Your Option'} />
                    <button className="btn btn-form" /* disabled={this.props.maxOptions} */>Submit Your Option</button>
                </form>
            </div>
        )
    }
}