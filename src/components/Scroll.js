import React from "react"

const Scroll = (props) => {
    console.log(props.children.props.robots)
    return (
        <div style={{ overflowY: 'scroll', height: '800px'}}>
            {props.children}
        </div>
    )
}
export default Scroll