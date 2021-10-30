import React from "react"
import PropTypes from "prop-types"

export default function SharedLayout(props){
    return (
        <div className="container">
            { props.children }
        </div>
    )
}

SharedLayout.propTypes = {
    children: PropTypes.node.isRequired,
}