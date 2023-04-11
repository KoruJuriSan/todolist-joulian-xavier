import React from "react"
import { Button } from "../button/button"

export const PrimaryBTN = function({onClick=undefined, children='', value=undefined}) {
    return <Button className="
    font-medium
    text-gray-100
    px-4
    py-3
    bg-violet-400
    rounded-lg
    hover:bg-violet-500" 
    onClick={onClick}>
        {value == undefined ? children : value}
    </Button>
}