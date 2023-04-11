import React, { useCallback } from "react";

const primaryBTNClasses = "font-medium text-gray-100 px-4 py-3 bg-violet-400 rounded-lg hover:bg-violet-500"

export const Button = function({value=undefined, children='Primary-btn', onClick=undefined, className=primaryBTNClasses}) {
    
    const handleClicks = useCallback(() => {
        onClick != undefined ? onClick() : null
    })

    return (
        <button className={className} onClick={handleClicks}>
            {value == undefined ? children : value}
        </button>
    )
}