// Helper js import
import { log, doc } from '../helper'

// Third party libraries
import React, { Component } from 'react'

// Components imports
import Header from './Header'
import AddOption from './AddOption'
import Action from './Action'
import Options from './Options'

import OptionModal from './OptionModal'

// Main Component State Component are wrapper and most of the logic
export default class IndecisionApp extends Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    
    handleOnMakeDecision = () => {
        if (this.state.options) {
            const randomNum = Math.floor(Math.random() * this.state.options.length)
            const option = this.state.options[randomNum]
            this.setState(() => ({ selectedOption: option }))
        }
    }
    
    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
        this.handleRemoveOptions()
    }

    handleOnFormSubmit = (option) => {
        const setWarningClass = document.getElementsByClassName('addOption__input')

        if (!option) {
            setWarningClass.option.classList.add('warning-message')
            return 'Enter valid value'
        } else if (this.state.options.indexOf(option) > -1) {
            setWarningClass.option.classList.add('warning-message')
            return `Already exist, [${option}]`
        }
        
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

    componentDidMount() {
        try {
            const jsonOpts = localStorage.getItem('options')
            const options = JSON.parse(jsonOpts)
            if (options) {
                this.setState(() => ({ options: options }))
                log('Fetching Data')
            }
        } catch (error) {
            log('error', error)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // log(prevState.options.length === this.state.options.length)
        // log(prevState.options)
        // log(this.state.options)
        if (prevState.options.length !== this.state.options.length) {
            const jsonOpts = JSON.stringify(this.state.options)
            localStorage.setItem('options', jsonOpts)
            log('Saving Data')
        }
    }

    render() {
        return (
            <div className='container'>
                <Header />
                <Action hasOptions={this.state.options.length > 0} handleOnMakeDecision={this.handleOnMakeDecision} />
                <Options options={this.state.options} handleRemoveOption={this.handleRemoveOption} handleRemoveOptions={this.handleRemoveOptions} />
                <AddOption maxOptions={this.state.options.length >= 3} handleOnFormSubmit={this.handleOnFormSubmit} />
                <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption}/>
            </div>
        )
    }
}