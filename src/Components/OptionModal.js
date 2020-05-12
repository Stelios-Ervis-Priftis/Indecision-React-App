import React from 'react'
import Modal from 'react-modal'
import { log } from '../helper'

const OptionModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel={"Selected Option"}
            ariaHideApp={false}
        >
        {!!props.selectedOption && <p>{props.selectedOption}</p>}
            <button className="btn" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    </div>
    
)

export default OptionModal