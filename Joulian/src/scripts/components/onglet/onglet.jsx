import React, { useCallback, useContext, useMemo } from "react"
import { dataContext } from "../app/dataContext"
import { ongletContext } from "../app/ongletContext"
import { TrashBTN } from "../trashBTN/trashBTN"

export const Onglet = function({value=undefined, index, children='', onClick=undefined}) {

    const [currentOnglet, setCurrentOnglet] = useContext(ongletContext)
    const [data, setData] = useContext(dataContext)

    currentClass = useMemo(() => {4
        return !(index == currentOnglet) ? "hover:bg-gray-700" : "bg-violet-400 bg-opacity-60"
    })

    const handleClicks = useCallback((event) => {
        onClick != undefined ? onClick(index) : null
    })

    const handleDeletes = useCallback((event) => {
        const newData = [...data]
        newData.splice(index, 1)
        currentOnglet >= index ? setCurrentOnglet(index-1) : null
        setData(() => {
            return newData
        })
    })

    return (
        <div className={` ${currentClass} cursor-pointer  hoverspanspawn w-full flex justify-between rounded-md text-left overflow-hidden text-gray-300`}>
            <a onClick={handleClicks} className=" px-2 py-1 w-full whitespace-nowrap overflow-hidden overflow-ellipsis">{value == undefined ? children : value}</a>
            <span className=" opacity-0 hover:opacity-100">
                <TrashBTN className="pr-2 w-full" onClick={handleDeletes}></TrashBTN>
            </span>
        </div>
    )
}