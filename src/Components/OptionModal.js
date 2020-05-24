import React from 'react'
import Modal from 'react-modal'
import TypeIt from 'typeit-react'

const OptionModal = (props) => (
    <div>
        <Modal
            className="modal"
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel={"Selected Option"}
            closeTimeoutMS={200}
            ariaHideApp={false}
        >
        <p className="modal__title">Computer decided for you!</p>
        <TypeIt
            className="modal__option"
            options={{ speed: 50, cursor: false, lifeLike: true, waitUntilVisible: true }}
            element={"p"}
            getBeforeInit={instance => {
                instance
                    .pause(200)
                    .type(`${props.selectedOption}`)
                return instance;
            }}
        />
        <button className="btn modal__btn--mod" onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    </div>
    
)

export default OptionModal