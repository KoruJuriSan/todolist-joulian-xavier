import React from "react"
import { Button } from "../button/button"

export const IconBTN = function({onClick=undefined, children='', value=undefined, icon}) {
    return <Button className=" 
    flex gap-2
    text-gray-300
    hover:bg-gray-700
    w-full
    rounded-md
    px-2
    py-1
    " 
    onClick={onClick}>
        {icon}
        {value == undefined ? children : value}
    </Button>
}