// Helper js import
import { log, doc } from '../helper'

// Third party libraries
import React, { Component } from 'react'

// Components imports
import Header from './Header'
import AddOption from './AddOption'
import Action from './Action'
import Options from './Options'
import RemoveOptions from './RemoveOptions'

// Main Component State Component are wrapper and most of the logic
export default class IndecisionApp extends Component {
    state = {
        options: [
            "What Movie?",
            "What Food?",
            "What Clothes?"
        ]
    }
    componentDidMount = () => {
        try {
            const jsonOpts = localStorage.getItem('options')
            const options = JSON.parse(jsonOpts)
            if (options) {
                this.setState((prevState) => ({ options: prevState.options }))
                log('Fetching Data')
            }
        } catch (error) {
            log('error', error)
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        log(prevState.options.length === this.state.options.length)
        log(prevState.options)
        log(this.state.options)
        if (prevState.options.length !== this.state.options.length) {
            const jsonOpts = JSON.stringify(this.state.options)
            localStorage.setItem('options', jsonOpts)
            log(jsonOpts)
            log('Saving Data')
        }
    }

    handleOnMakeDecision = () => {
        if (this.state.options) {
            const randomNum = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomNum]
            log(option)
            this.handleRemoveOptions()
        }
    }

    handleOnFormSubmit = (option) => {
        const setErrorClass = document.getElementsByClassName('btn-form-inp')
        if (!option) {
            setErrorClass.option.classList.add('error')
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            setErrorClass.option.classList.add('error')
            return 'Already exist'
        }

        setErrorClass.option.classList.remove('error')
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }

    handleRemoveOptions = () => {
        log('Options removed:', this.state.options)
        this.setState(() => ({ options: [] }))
    }

    handleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    render() {
        const subTitle_1 = `You can't take a decision?`
        const subTitle_2 = `Put your life in the hands of a computer!`
        return (
            <div className='jsx-container'>
                <Header subTitle_1={subTitle_1} subTitle_2={subTitle_2} />
                <Action hasOptions={this.state.options.length > 0} handleOnMakeDecision={this.handleOnMakeDecision} />
                <Options options={this.state.options} handleRemoveOption={this.handleRemoveOption} />
                <AddOption maxOptions={this.state.options.length >= 3} handleOnFormSubmit={this.handleOnFormSubmit} />
                <RemoveOptions handleRemoveOptions={this.handleRemoveOptions} />
            </div>
        )
    }
}