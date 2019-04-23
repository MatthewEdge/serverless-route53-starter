import React from "react"
import PropTypes from "prop-types"

const CardRow = ({ children }) => {

    var columns = children.map((child, idx) => (
        <div className="column" key={idx}>
            {child}
        </div>
    ))

    return (
        <div className="columns">
            {columns}
        </div>
    )
}

CardRow.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default CardRow
