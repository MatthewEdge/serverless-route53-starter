import React, { Component } from "react"
import PropTypes from "prop-types"


export class Modal extends Component {
    constructor() {
        super()
        this.state = {}

        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        var modal = this.props.anchorId
        document.getElementById(modal).classList.remove(this.props.activeClass)
        
        // Unfreeze scrollbars
        document.getElementsByTagName('html')[0].style.overflow = ""
        document.getElementsByTagName('body')[0].style.overflowY = ""
    }

    render() {
        return (
            <div id={this.props.anchorId} className="modal">
                <div className="modal-background" onClick={this.closeModal}></div>
                <div className="modal-content">
                    {this.props.children}
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={this.closeModal}></button>
            </div>
        )
    }
}

Modal.propTypes = {
    anchorId: PropTypes.string.isRequired

}
