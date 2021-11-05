import React from "react"
import PropTypes from "prop-types"

type SharedLayoutProps = {
    children: React.ReactNode
}

export default function SharedLayout(props : SharedLayoutProps){
    return (
        <div className="container">
            { props.children }
        </div>
    )
}

SharedLayout.propTypes = {
    children: PropTypes.node.isRequired,
}