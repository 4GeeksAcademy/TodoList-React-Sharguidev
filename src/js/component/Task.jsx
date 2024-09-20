import React, { useState } from "react";

const Task = (props) => {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <div className="d-flex justify-content-between py-3 px-5 fs-4"
        onMouseEnter={() => {
            setIsHovered(true)
        }}
        onMouseLeave={() => {
            setIsHovered(false)
        }}>
            <p className="colorFont">{props.task}</p>
            {(isHovered) && <span onClick={()=>{
                props.onRemove()
            }}>X</span>}
        </div>
    )
}

export default Task;