import React from "react"

import CardRow from "./card-row"
import { Modal } from "../modal/modal"

import { chunk, pad } from "../helper"
import { ImageCard } from "./image-card"

import "./cards.css"

const activeClass = "is-active"

// CardContainer displays images as a list of cards in rows of `rowSize` with a Modal-implemented larger display
const CardContainer = ({ rowSize, images }) => {

    // Each card consists of the image itself, clickable, and a Modal with the same image
    const cards = images.map((imgUrl, idx) => (
        <div>
            <ImageCard url={imgUrl} key={`card-${idx}`} clickHandler={() => openModal(`card-row-modal-${idx}`)} />

            <Modal anchorId={`card-row-modal-${idx}`} activeClass={activeClass}>
                <ImageCard url={imgUrl} key={`modal-img-${idx}`} />
            </Modal>
        </div>
    ))

    // Make sure to pad empty divs so the elements stay equal size
    const rows = chunk(cards, rowSize).map((rows, idx) => {
        return (
            <CardRow key={`card-row-${idx}`}>
                {pad(rows, rowSize, <div/>)}
            </CardRow>
        )
    })

    return (
        <section className="container">
            {rows}
        </section>
    )
}

function openModal(target) {
    document.getElementById(target).classList.add(activeClass)

    // Freeze scrollbars
    document.getElementsByTagName('html')[0].style.overflow = "hidden"
    document.getElementsByTagName('body')[0].style.overflowY = "scroll"
}

export default CardContainer
