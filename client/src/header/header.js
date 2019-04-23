import React from "react"
import PropTypes from "prop-types"

const Header = ({ title }) => (
    <section className="hero is-black is-small">
        <div className="hero-body">
            <div className="container has-text-centered">
                <p className="title">{title}</p>
            </div>
        </div>
    </section>
)

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
