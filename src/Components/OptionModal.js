import React from 'react'
import Modal from 'react-modal'
import TypeIt from 'typeit-react'

const OptionModal = (props) => (
    <div>
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel={"Selected Option"}
            // closeTimeoutMS={700}
            ariaHideApp={false}
        >
        <p>Computer decided for you!</p>
        {!!props.selectedOption &&
            <TypeIt element={"p"} options={{
                strings: [`${props.selectedOption}`],
                speed: 50,
                cursor: false,
                lifeLike: true,
                waitUntilVisible: true
            }} />
        }
        <button className="btn btn-modal" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    </div>
    
)

export default OptionModal