import React from "react"
import PropTypes from "prop-types"

// ImageCard displays a simple image in a 4by3 ratio'd view
const ImageCard = ({ url, clickHandler }) => (
    <figure className="image is-4by3">
        <img src={url} onClick={clickHandler} />
    </figure>
)

ImageCard.propTypes = {
    url: PropTypes.string.isRequired,
    clickHandler: PropTypes.func
}

export {ImageCard}
